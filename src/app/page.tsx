/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [url, setUrl] = useState('');
  const [slug, setSlug] = useState('');
  const [tag, setTag] = useState('others');
  const [generatedLink, setGeneratedLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setGeneratedLink('');

    try {
      const res = await fetch('/api/gen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, slug, tag }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setGeneratedLink(`${window.location.origin}/r/${data.slug}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30 overflow-hidden relative">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col items-center max-w-2xl">
        
        {/* Navigation */}
        <div className="absolute top-8 right-8">
          <Link 
            href="/dashboard"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm font-medium bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg border border-white/5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6H20.25M3.75 12H20.25M3.75 18H20.25" />
            </svg>
            <span>Dashboard</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
           <div className="inline-block p-4 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-blue-500/20 border border-white/5 mb-4 shadow-2xl shadow-purple-500/10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
           </div>
           <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
             {/* DeepLinker */}
             Open In Browser
           </h1>
           <p className="text-xl text-gray-400 max-w-lg mx-auto">
             Generate smart redirect links that breakout of Instagram and LinkedIn in-app browsers.
           </p>
        </div>

        {/* Generator Card */}
        <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-2">
              <label htmlFor="url" className="text-sm font-medium text-gray-300 ml-1">Destination URL</label>
              <input
                id="url"
                type="url"
                required
                placeholder="https://example.com/my-awesome-post"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="slug" className="text-sm font-medium text-gray-300 ml-1">Custom Slug (Optional)</label>
              <div className="relative">
                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">/r/</span>
                 <input
                  id="slug"
                  type="text"
                  placeholder="my-link"
                  className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Select Tag (Mandatory)</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['linkedin', 'instagram', 'twitter(x)', 'facebook', 'others'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTag(t)}
                    className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                      tag === t 
                        ? 'bg-purple-600/20 border-purple-500 text-purple-400' 
                        : 'bg-black/40 border-white/10 text-gray-500 hover:border-white/20'
                    }`}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/20 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center space-x-2">
                   <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                   <span>Generating...</span>
                </span>
              ) : 'Generate Smart Link'}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center animate-in fade-in slide-in-from-top-2">
              {error}
            </div>
          )}

          {generatedLink && (
            <div className="mt-8 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-top-4">
               <label className="text-sm font-medium text-gray-300 ml-1 mb-2 block">Your Smart Link</label>
               <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-black/40 border border-green-500/30 rounded-xl px-4 py-4 text-green-400 font-mono truncate">
                    {generatedLink}
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="p-4 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors border border-white/5"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
               </div>
                 <p className="mt-3 text-xs text-gray-500 text-center">
                 Share this link on LinkedIn or Instagram.
               </p>
               
               <div className="mt-6 flex justify-center">
                  <Link 
                    href={`/dashboard/${generatedLink.split('/r/')[1] || ''}`}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm font-medium bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg border border-white/5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                    </svg>
                    <span>View Link Stats</span>
                  </Link>
                </div>
            </div>
          )}

        </div>
        
        <footer className="mt-20 text-gray-600 text-sm">
          Built for creators • {new Date().getFullYear()}
        </footer>

      </div>
    </main>
  );
}
