import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If the request is not for the home page
  if (pathname !== '/') {
    // Redirect to the home page
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Configure the matcher to exclude static files and API routes
export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|api).*)',
};
