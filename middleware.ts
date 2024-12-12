import { Database } from '@/app/types/database.types'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient<Database>({ req, res })
  const { data: { session } } = await supabase.auth.getSession()

  // Define public paths
  const publicPaths = ['/auth/login', '/auth/signup']
  const isPublicPath = publicPaths.some(path => req.nextUrl.pathname.startsWith(path))

  if (!session && !isPublicPath) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  if (session && isPublicPath) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}