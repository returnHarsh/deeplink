/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-explicit-any */





'use client';

import { useEffect, useState} from 'react';
// import { motion } from 'framer-motion'; // We might need to install framer-motion, or just use CSS animations if not available. I'll stick to CSS for zero-dep or add it.
// Actually, for "Premiuuim" feel, framer-motion is great. But to avoid installing too many deps without asking, I will use Tailwind animate-pulse/spin and custom CSS transitions.
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
        // window.open(destinationUrl, '_blank');  -----> to open in new tab , but we are not doing that here
        // window.location.href = destinationUrl;
        window.open(destinationUrl, '_self');
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
    <main className="min-h-screen grid place-items-center p-6 text-white" style={{
      background: 'radial-gradient(900px 520px at 70% 20%, rgba(139,92,246,.22), transparent 60%), radial-gradient(700px 520px at 25% 80%, rgba(37,99,235,.18), transparent 62%), rgb(5,6,10)'
    }}>
      <div className="w-full max-w-2xl text-center">
        <p className="text-sm text-gray-400 mb-2">Opening in your default browser…</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3">This link works best in your system browser</h1>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto mb-6">Some apps open links inside an in-app browser. To continue smoothly and avoid login issues, open this in your default browser.</p>

        <section className="mx-auto bg-white/6 border border-white/10 rounded-2xl backdrop-blur-md p-5 relative" style={{maxWidth: 620}}>
          <div style={{position: 'absolute', inset: -2, background: 'radial-gradient(700px 240px at 50% 0%, rgba(139,92,246,.18), transparent 60%)', pointerEvents: 'none', borderRadius: 'inherit'}} />
          <div className="relative">
            <button
              id="openBtn"
              onClick={handleOpenSystemBrowser}
              disabled={isRedirecting}
              className="w-full btn text-white font-extrabold py-4 rounded-lg cursor-pointer"
              style={{background: 'linear-gradient(90deg,#8B5CF6,#2563EB)', boxShadow: '0 16px 44px rgba(37,99,235,.18), 0 22px 60px rgba(139,92,246,.14)'}}
            >
              {isRedirecting ? 'Opening System Browser...' : 'Open System Browser'}
            </button>

            <div className="flex items-center gap-3 text-xs text-gray-300 my-4 uppercase tracking-wider" style={{alignItems: 'center'}}>
              <span style={{flex: 1, height: 1, background: 'rgba(255,255,255,.10)'}} />
              <span style={{padding: '0 8px'}}>or</span>
              <span style={{flex: 1, height: 1, background: 'rgba(255,255,255,.10)'}} />
            </div>

            <div className="copyRow flex items-center gap-2 bg-white/6 border border-white/12 rounded-lg p-2">
              <input className="url flex-1 bg-transparent text-left text-gray-200 px-2 py-2 truncate font-mono" id="urlField" readOnly value={destinationUrl} />
              <button
                id="copyBtn"
                onClick={handleCopy}
                type="button"
                className="copyBtn font-semibold px-4 py-2 rounded-md"
                style={{border: '1px solid rgba(255,255,255,.14)', background: 'rgba(255,255,255,.08)'}}
              >
                {copied ? 'Copied ✓' : 'Copy Link'}
              </button>
            </div>

            <div className="text-left text-sm text-gray-400 mt-3">If nothing happens after tapping “Open System Browser”, tap “Copy Link” and paste it into Chrome/Safari.</div>
          </div>
        </section>

        <div className="mt-6 text-sm text-gray-400">
          <div>Powered by <b className="text-white">Mployee.me</b></div>
          <div className="mt-1">OpenInBrowser | Built for Creators | © {new Date().getFullYear()}</div>
        </div>
      </div>
    </main>
  );
}
