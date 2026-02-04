/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-explicit-any */





'use client';

import { useEffect, useState} from 'react';
// import { motion } from 'framer-motion'; // We might need to install framer-motion, or just use CSS animations if not available. I'll stick to CSS for zero-dep or add it.
// Actually, for "Premium" feel, framer-motion is great. But to avoid installing too many deps without asking, I will use Tailwind animate-pulse/spin and custom CSS transitions.
// But the user asked for premium. I will add a simple copy-to-clipboard hook.

interface BreakoutPageProps {
  destinationUrl: string;
}

export default function BreakoutPage({ destinationUrl }: BreakoutPageProps) {
  const [copied, setCopied] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [isRedirectingFirstTime, setIsRedirectingFirstTime] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(destinationUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  // android breakout jugaad
  const handleAndroidBreakout = (destinationUrl: string) => {
    const urlPart = destinationUrl.replace(/^https?:\/\//, '');
    const intentUrl = `intent://${urlPart}#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;end`;
    
    // Create a temporary hidden link and 'click' it
    const anchor = document.createElement('a');
    anchor.href = intentUrl;
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
};

  const handleOpenSystemBrowser = () => {
    setIsRedirecting(true);
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;

    try {
      if (isAndroid) {
        console.log("it is android")
        const urlPart = destinationUrl.replace(/^https?:\/\//, '');
        const intentUrl = `intent://${urlPart}#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;end`;
        // const intentUrl = `intent://${urlPart}#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.android.chrome;end`;
        // window.location.href = intentUrl;
        // const chromeUrl = `googlechrome://${destinationUrl.replace(/^https?:\/\//, '')}`;
        // window.location.href = chromeUrl;
        handleAndroidBreakout(destinationUrl)

      } else if (isIOS) {
        console.log("it is IOS")
        const urlPart = destinationUrl.replace(/^https?:\/\//, '');
        // const chromeUrl = destinationUrl.replace(/^https/, 'googlechromes').replace(/^http/, 'googlechrome');
        window.location.href = `x-safari-https://${urlPart}`;
        // window.location.href = destinationUrl;
      } else {
        console.log("no android or IOS found , Opening generic")
        window.open(destinationUrl, '_blank');
      }
    } catch (e) {
      console.error("Redirect attempt failed", e);
      window.location.href = destinationUrl;
    } finally {
       setTimeout(() => setIsRedirecting(false), 2000);
    }
  };

  useEffect(() => {
    // Attempt redirect immediately on mount
    handleOpenSystemBrowser();
    
    // Set a timer to show the fallback UI if redirect doesn't happen
    const timer = setTimeout(() => {
      setIsRedirectingFirstTime(false);
    }, 2500); // Increased slightly to give redirect time to work before showing UI

    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if(isRedirectingFirstTime){
    return (
      <div className='fixed inset-0 z-50 flex justify-center items-center bg-gray-950'>
         <div className='flex flex-col gap-4 justify-center items-center'>
            <div className="relative flex justify-center items-center">
              <svg className="animate-spin h-8 w-8 text-white absolute" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <span className="text-white/80 font-medium animate-pulse text-sm">Opening External Browser...</span>
         </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6 text-white overflow-hidden relative font-sans selection:bg-purple-500/30">
      
      <main className="relative z-10 w-full max-w-md flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* Action Buttons */}
        <div className="w-full space-y-3">
             <p className="text-gray-300 text-sm mb-4">
                This website is better when you opened this on your default browser..
             </p>
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

            <div className='border border-solid border-gray-700'>
            <a
              href="x-safari-https://dev.mployee.me/"
              target="_blank"
              rel="noopener noreferrer"
              className='py-4  w-full flex items-center justify-center'
            >
              Open in Safari
            </a>

            {/* <a
  href="shortcuts://x-callback-url/run-shortcut?name=abc&x-error=https://dev.mployee.me/"
  target="_blank"
  rel="noopener noreferrer"
  className='py-4  w-full flex items-center justify-center'
>
  Open in Safari 2.0
</a> */}

            </div>

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
