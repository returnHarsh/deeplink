'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function NavigationProgressBar() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // When pathname changes, route transition has completed
  useEffect(() => {
    if (loading) {
      setProgress(100);
      const timer = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Animate progress bar while loading
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      setProgress(15);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 85) {
            clearInterval(interval);
            return 85;
          }
          const increment = Math.max(2, (85 - prev) * 0.15);
          return Math.min(85, prev + increment);
        });
      }, 80);
    }
    return () => clearInterval(interval);
  }, [loading]);

  // Intercept all internal navigation clicks for instant 0ms feedback
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      const targetAttr = target.getAttribute('target');

      // Ignore external, download, empty, hash, or target="_blank" links
      if (
        !href ||
        targetAttr === '_blank' ||
        target.hasAttribute('download') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#') ||
        href === pathname
      ) {
        return;
      }

      // Check if it's an internal link
      try {
        const url = new URL(href, window.location.href);
        const currentUrl = new URL(window.location.href);

        if (url.origin === currentUrl.origin && url.pathname !== currentUrl.pathname) {
          // Internal route change starting
          setLoading(true);
          setProgress(10);
        }
      } catch {
        // Ignore invalid URLs
      }
    };

    document.addEventListener('click', handleAnchorClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleAnchorClick, { capture: true });
    };
  }, [pathname]);

  if (!loading && progress === 0) return null;

  return (
    <>
      {/* Top progress bar with neon gradient glow */}
      <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none h-[3px]">
        <div
          className="h-full transition-all ease-out"
          style={{
            width: `${progress}%`,
            transitionDuration: progress === 100 ? '200ms' : '150ms',
            background: 'linear-gradient(90deg, #7C5CFF 0%, #23D5FF 50%, #6FE7B2 100%)',
            boxShadow: '0 0 14px rgba(124, 92, 255, 0.8), 0 0 24px rgba(35, 213, 255, 0.6)',
          }}
        />
      </div>

      {/* Floating corner indicator */}
      <div className="fixed top-4 right-4 z-[9999] pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1120]/90 border border-white/10 shadow-xl backdrop-blur-md animate-fade-in">
        <svg
          className="animate-spin h-3.5 w-3.5 text-[#23D5FF]"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            className="opacity-90"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
        <span className="text-[11px] font-medium text-slate-300 tracking-wide">
          Loading...
        </span>
      </div>
    </>
  );
}
