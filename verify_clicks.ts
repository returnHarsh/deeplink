
import {recordClick } from './src/lib/storage';
import dbConnect from './src/lib/db';
import Link from './src/models/Link';

async function verify() {
	await dbConnect();

	// 1. Create a test link
	// Note: We'll just check an existing one or create one manually if needed but for now let's check the first one
	const link = await Link.findOne({});

	if (!link) {
		console.log("No links found to verify.");
		return;
	}

	console.log(`Checking link: ${link.slug}`);
	console.log(`Initial clicks: ${link.clicks}`);
	console.log(`Initial timestamps: ${link.clickTimestamps}`);

	// Note: We can't easily simulate the page visit here without running the server and making a request.
	// But we can manually call recordClick to verify the DB logic works.

	// const { recordClick } = require('./src/lib/storage');

	console.log("Simulating click...");
	await recordClick(link.slug);

	const updatedLink = await Link.findOne({ slug: link.slug });
	console.log(`Updated clicks: ${updatedLink?.clicks}`);
	console.log(`Updated timestamps: ${updatedLink?.clickTimestamps}`);

	if (updatedLink?.clicks === link.clicks + 1 && updatedLink?.clickTimestamps.length === link.clickTimestamps.length + 1) {
		console.log("SUCCESS: Click recorded correctly.");
	} else {
		console.error("FAILURE: Click not recorded correctly.");
	}

	process.exit(0);
}

verify().catch(console.error);
