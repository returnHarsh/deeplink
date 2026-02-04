import { NextResponse } from 'next/server';
import { createLink } from '@/lib/storage';

export async function POST(request: Request) {
	try {
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

		const link = await createLink(url, slug, tag || 'others');
		return NextResponse.json(link);
	} catch (error: any) {
		console.error('Error in /api/gen:', error);
		if (error.message === 'Slug already in use') {
			return NextResponse.json({ error: 'Slug already in use' }, { status: 409 });
		}
		if (error.name === 'ValidationError') {
			return NextResponse.json({ error: 'Validation failed', details: error.message }, { status: 400 });
		}
		return NextResponse.json({ error: 'Failed to create link', details: error.message }, { status: 500 });
	}
}
