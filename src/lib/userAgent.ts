// Utility to detect if the user agent is a social media in-app browser

export function isLinkedIn(userAgent: string): boolean {
	return /LinkedInApp/i.test(userAgent);
}

export function isInstagram(userAgent: string): boolean {
	return /Instagram/i.test(userAgent);
}

// Detect if it's a known bot (for OG tags)
export function isBot(userAgent: string): boolean {
	return /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent) ||
		/LinkedInBot/i.test(userAgent) ||
		/facebookexternalhit/i.test(userAgent);
}

export function getBrowserInfo(userAgent: string) {
	const isLI = isLinkedIn(userAgent);
	const isIG = isInstagram(userAgent);

	return {
		isLinkedIn: isLI,
		isInstagram: isIG,
		isInAppBrowser: isLI || isIG,
		isBot: isBot(userAgent),
		// Add more detection if needed
	};
}
