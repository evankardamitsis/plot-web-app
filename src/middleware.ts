import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if we're in production and not already on the coming soon page
  if (process.env.NODE_ENV === 'production' && !request.nextUrl.pathname.startsWith('/coming-soon')) {
    return NextResponse.redirect(new URL('/coming-soon', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - coming-soon (coming soon page)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|coming-soon).*)',
  ],
} 