import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createLink, getLinks } from '@/lib/storage';
import { verifyToken } from '@/lib/jwt';

async function getAuthenticatedUserId(request: Request): Promise<string | null> {
	// First check header set by middleware
	const headerUserId = request.headers.get('x-user-id');
	if (headerUserId) {
		return headerUserId;
	}

	// Fallback to checking session cookie directly
	const cookieStore = await cookies();
	const sessionToken = cookieStore.get('session')?.value;
	if (sessionToken) {
		const payload = verifyToken(sessionToken);
		if (payload?.userId) {
			return payload.userId;
		}
	}

	return null;
}

export async function POST(request: Request) {
	try {
		const userId = await getAuthenticatedUserId(request);
		if (!userId) {
			return NextResponse.json({ error: 'Unauthorized: Please log in to generate links' }, { status: 401 });
		}

		const body = await request.json();
		const { url, slug, tag } = body;

		if (!url) {
			return NextResponse.json({ error: 'URL is required' }, { status: 400 });
		}

		try {
			// creating a URL Object to check if the url is valid or not..
			new URL(url);
		} catch {
			return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
		}

		const link = await createLink(url, slug, tag || 'others', userId);
		return NextResponse.json(link);
	} catch (error: any) {
		console.error('Error in /api/gen POST:', error);
		if (error.message === 'Slug already in use') {
			return NextResponse.json({ error: 'Slug already in use' }, { status: 409 });
		}
		if (error.name === 'ValidationError') {
			return NextResponse.json({ error: 'Validation failed', details: error.message }, { status: 400 });
		}
		return NextResponse.json({ error: 'Failed to create link', details: error.message }, { status: 500 });
	}
}

export async function GET(request: Request) {
	try {
		const userId = await getAuthenticatedUserId(request);
		if (!userId) {
			return NextResponse.json({ error: 'Unauthorized: Please log in to view links' }, { status: 401 });
		}

		const links = await getLinks(userId);
		return NextResponse.json(links);
	} catch (error: any) {
		console.error('Error in /api/gen GET:', error);
		return NextResponse.json({ error: 'Failed to fetch links', details: error.message }, { status: 500 });
	}
}
