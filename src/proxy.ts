import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
	const session = request.cookies.get('session');
	const { pathname } = request.nextUrl;

	// Protect all routes except /login and /api/login and /r/[slug]
	if (!session) {
		if (pathname === '/login' || pathname.startsWith('/api/login') || pathname.startsWith('/r/')) {
			return NextResponse.next();
		}
		return NextResponse.redirect(new URL('/login', request.url));
	}

	// Redirect authenticated users away from /login
	if (session && pathname === '/login') {
		return NextResponse.redirect(new URL('/dashboard', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!_next/static|_next/image|favicon.ico).*)',
	],
};
