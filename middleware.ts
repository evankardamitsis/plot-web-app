import { Database } from '@/app/types/database.types'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient<Database>({ req, res })
  const { data: { session } } = await supabase.auth.getSession()

  // Get the current path
  const path = req.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath = 
    path.startsWith('/(public)') || // All routes in the (public) group
    path.startsWith('/auth')        // All auth routes

  // If it's a public path, allow access regardless of session
  if (isPublicPath) {
    return res
  }

  // For protected routes, check authentication
  if (!session) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}