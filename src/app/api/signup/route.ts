import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { signToken } from '@/lib/jwt';

export async function POST(request: Request) {
	try {
		await dbConnect();
		const { name, companyName, email, password, heardFrom } = await request.json();

		if (!email || !password) {
			return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
		}

		if (typeof password !== 'string' || password.length < 6) {
			return NextResponse.json({ error: 'Password must be at least 6 characters long' }, { status: 400 });
		}

		const cleanEmail = email.trim().toLowerCase();

		// Check if user already exists
		const existingUser = await User.findOne({ email: cleanEmail });
		if (existingUser) {
			return NextResponse.json({ error: 'An account with this email already exists' }, { status: 409 });
		}

		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(password, salt);

		// Create user with extended details
		const user = await User.create({
			name: name?.trim() || '',
			companyName: companyName?.trim() || '',
			email: cleanEmail,
			password: hashPassword,
			heardFrom: heardFrom || 'Others',
			lastLoggedin: new Date(),
		});

		// Generate JWT token
		const token = signToken({
			userId: user._id.toString(),
			email: user.email,
		});

		// Set session cookie
		const cookieStore = await cookies();
		cookieStore.set('session', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			maxAge: 60 * 60 * 24 * 7, // 1 week
			path: '/',
		});

		return NextResponse.json(
			{
				message: 'Account created successfully',
				token,
				user: {
					id: user._id,
					name: user.name,
					email: user.email,
					companyName: user.companyName,
				},
			},
			{ status: 201 }
		);
	} catch (error: any) {
		console.error('Signup error:', error);
		return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
	}
}
