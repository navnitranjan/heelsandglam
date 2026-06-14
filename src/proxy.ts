import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') || '';
  if (host === 'www.heelsandglam.com') {
    const url = request.nextUrl.clone();
    url.host = 'heelsandglam.com';
    return NextResponse.redirect(url.toString(), 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (image assets)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};
