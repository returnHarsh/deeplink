'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // We might need to install framer-motion, or just use CSS animations if not available. I'll stick to CSS for zero-dep or add it.
// Actually, for "Premium" feel, framer-motion is great. But to avoid installing too many deps without asking, I will use Tailwind animate-pulse/spin and custom CSS transitions.
// But the user asked for premium. I will add a simple copy-to-clipboard hook.

interface BreakoutPageProps {
  destinationUrl: string;
}

export default function BreakoutPage({ destinationUrl }: BreakoutPageProps) {
  const [copied, setCopied] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(destinationUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenSystemBrowser = () => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;

    setIsRedirecting(true);

    try {
      if (isAndroid) {
        // Android Intent with fallback
        // Uses the special 'intent://' scheme which WebViews often handle by delegating to the OS
        // S.browser_fallback_url ensures that if the intent fails (e.g. Chrome not installed), it falls back to the original URL
        const urlPart = destinationUrl.replace(/^https?:\/\//, '');
        const intentUrl = `intent://${urlPart}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${encodeURIComponent(destinationUrl)};end`;
        window.location.href = intentUrl;
        return;
      }

      if (isIOS) {
        // iOS: Attempt to open in Chrome first using the scheme
        const chromeUrl = destinationUrl.replace(/^https/, 'googlechromes').replace(/^http/, 'googlechrome');
        
        // We attempt to open Chrome
        window.location.href = chromeUrl;

        // Fallback to standard navigation if Chrome scheme doesn't work (after a short delay)
        // Note: This relies on the browser not blocking the subsequent redirect if the first one fails silently
        setTimeout(() => {
           window.location.href = destinationUrl;
        }, 500);
        return;
      }

      // Desktop / Other Fallback
      window.open(destinationUrl, '_blank');
      
    } catch (e) {
      console.error("Redirect attempt failed", e);
      // Last resort
      window.location.href = destinationUrl;
    } finally {
      // Create a timeout to clean up state if the user cancels or comes back
      setTimeout(() => setIsRedirecting(false), 3000);
    }
  };

  // ... (render)

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6 text-white overflow-hidden relative font-sans selection:bg-purple-500/30">
      {/* ... (background) */}
      
      {/* ... (main content) */}
      <main className="relative z-10 w-full max-w-md flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* ... (icon / title) */}
        
        {/* ... (instructions) */}

        {/* Action Buttons */}
        <div className="w-full space-y-3">
             <button 
              onClick={handleOpenSystemBrowser}
              disabled={isRedirecting}
              className="w-full py-4 px-6 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg shadow-white/5 active:scale-95 duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isRedirecting ? (
                <>
                   <svg className="animate-spin h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                   <span>Opening...</span>
                </>
              ) : (
                <span>Open System Browser</span>
              )}
            </button>

            {/* Copy Link wrapper */}
            <div className="relative group w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-30 group-hover:opacity-75 transition duration-500 blur"></div>
              <div className="relative flex items-center bg-gray-900 border border-gray-800 rounded-xl p-2 pl-4">
                <p className="flex-1 text-gray-400 truncate text-sm font-mono mr-4">{destinationUrl}</p>
                <button 
                  onClick={handleCopy}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors border border-gray-700"
                >
                  {copied ? (
                      <span className="flex items-center text-green-400">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          Copied
                      </span>
                  ) : 'Copy Link'}
                </button>
              </div>
            </div>
        </div>

        <p className="text-gray-600 text-sm pt-8">
            DeepLinker &copy; {new Date().getFullYear()}
        </p>

      </main>
    </div>
  );
}
