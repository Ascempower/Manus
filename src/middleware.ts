import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add security headers to fix Chrome DevTools issues
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Handle cookie security for all responses
  const isSecure = request.nextUrl.protocol === 'https:';

  // Set secure cookie attributes for any Set-Cookie headers
  const setCookieHeader = response.headers.get('Set-Cookie');
  if (setCookieHeader) {
    const secureCookie = setCookieHeader
      .split(';')
      .map(part => part.trim())
      .filter(
        part => !part.toLowerCase().startsWith('samesite=') && !part.toLowerCase() === 'secure'
      )
      .join('; ');

    const newCookieHeader = `${secureCookie}; SameSite=Strict${isSecure ? '; Secure' : ''}`;
    response.headers.set('Set-Cookie', newCookieHeader);
  }

  // Special handling for Netlify analytics endpoints
  if (request.nextUrl.pathname.startsWith('/cdp/')) {
    response.headers.set('Access-Control-Allow-Origin', 'https://app.netlify.com');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
