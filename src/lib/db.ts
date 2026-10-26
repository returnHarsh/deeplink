import mongoose from 'mongoose';

function getMongoUri(): string {
	const uri = process.env.MONGODB_URI;
	if (uri) return uri;
	if (process.env.NODE_ENV === 'development') {
		return 'mongodb://localhost:27017/deeplinker';
	}
	throw new Error('MONGODB_URI environment variable is missing on this server.');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
// @ts-ignore
let cached = global.mongoose;

if (!cached) {
	// @ts-ignore
	cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			bufferCommands: false,
			serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of hanging for 30s
		};

		const uri = getMongoUri();
		cached.promise = mongoose.connect(uri, opts).then((mongoose) => {
			return mongoose;
		});
	}

	try {
		cached.conn = await cached.promise;
	} catch (e) {
		cached.promise = null;
		throw e;
	}

	return cached.conn;
}

export default dbConnect;
