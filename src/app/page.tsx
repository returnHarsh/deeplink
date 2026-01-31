'use client';

import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [slug, setSlug] = useState('');
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
        body: JSON.stringify({ url, slug }),
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
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
           <div className="inline-block p-4 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-blue-500/20 border border-white/5 mb-4 shadow-2xl shadow-purple-500/10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
           </div>
           <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
             DeepLinker
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
