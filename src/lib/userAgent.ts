/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-explicit-any */



// // Utility to detect if the user agent is a social media in-app browser

// export function isLinkedIn(userAgent: string): boolean {
// 	return /LinkedInApp/i.test(userAgent);
// }

// export function isInstagram(userAgent: string): boolean {
// 	return /Instagram/i.test(userAgent);
// }

// // Detect if it's a known bot (for OG tags)
// export function isBot(userAgent: string): boolean {
// 	return /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent) ||
// 		/LinkedInBot/i.test(userAgent) ||
// 		/facebookexternalhit/i.test(userAgent);
// }

// export function getBrowserInfo(userAgent: string) {
// 	const isLI = isLinkedIn(userAgent);
// 	const isIG = isInstagram(userAgent);

// 	return {
// 		isLinkedIn: isLI,
// 		isInstagram: isIG,
// 		isInAppBrowser: isLI || isIG,
// 		isBot: isBot(userAgent),
// 		// Add more detection if needed
// 	};
// }







// Enhanced social media in-app browser detection

export function isLinkedIn(userAgent: string): boolean {
	// LinkedIn patterns vary by platform
	return /LinkedInApp/i.test(userAgent) || 
	       /LinkedIn/i.test(userAgent);
}

export function isInstagram(userAgent: string): boolean {
	// Instagram includes 'Instagram' in UA on both iOS and Android
	return /Instagram/i.test(userAgent);
}

export function isFacebook(userAgent: string): boolean {
	// Facebook's in-app browser (FBAN/FBAV)
	return /\bFB[\w_]+\//i.test(userAgent) || 
	       /FBAN|FBAV/i.test(userAgent);
}

export function isTwitter(userAgent: string): boolean {
	return /Twitter/i.test(userAgent);
}

// Detect if it's a known bot (for OG tags)
export function isBot(userAgent: string): boolean {
	return /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent) ||
		/LinkedInBot/i.test(userAgent) ||
		/facebookexternalhit/i.test(userAgent) ||
		/Twitterbot/i.test(userAgent);
}

// Enhanced detection with fallback methods
export function getBrowserInfo(userAgent: string) {
	const isLI = isLinkedIn(userAgent);
	const isIG = isInstagram(userAgent);
	const isFB = isFacebook(userAgent);
	const isTW = isTwitter(userAgent);
	const isWebView = /wv|WebView/i.test(userAgent);

	return {
		isLinkedIn: isLI,
		isInstagram: isIG,
		isFacebook: isFB,
		isTwitter: isTW,
		isInAppBrowser: isLI || isIG || isFB || isTW,
		isWebView: isWebView,
		isBot: isBot(userAgent),
		userAgent: userAgent, // Include for debugging
	};
}

// Client-side detection (if running in browser)
export function detectInAppBrowserClient(): {
	isInAppBrowser: boolean;
	platform: string | null;
} {
	if (typeof window === 'undefined') {
		return { isInAppBrowser: false, platform: null };
	}

	const ua = navigator.userAgent;
	const info = getBrowserInfo(ua);

	// Additional client-side checks
	const hasStandaloneMode = (window.navigator as any).standalone === false;
	const isIOSWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ua);
	
	let platform = null;
	if (info.isLinkedIn) platform = 'linkedin';
	else if (info.isInstagram) platform = 'instagram';
	else if (info.isFacebook) platform = 'facebook';
	else if (info.isTwitter) platform = 'twitter';

	return {
		isInAppBrowser: info.isInAppBrowser || isIOSWebView || hasStandaloneMode,
		platform,
	};
}