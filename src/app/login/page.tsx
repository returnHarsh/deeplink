/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden relative flex items-center justify-center px-4 py-7"
      style={{
        background: `radial-gradient(900px 500px at 70% 20%, rgba(139,92,246,.22), transparent 60%),
                    radial-gradient(700px 450px at 20% 80%, rgba(37,99,235,.18), transparent 62%),
                    rgb(5,6,10)`
      }}
    >
      <div className="w-full max-w-5xl p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-7 items-center">
          {/* Left Info Panel (Desktop only) */}
          <section className="hidden lg:block p-1.5">
            <div className="flex items-center gap-3.5 mb-3.5 ">
              <div 
                className="w-15 h-15 rounded-lg bg-gradient-to-br from-purple-500/95 to-blue-500/95 flex items-center justify-center border border-solid border-white/15 shadow-lg shadow-purple-500/25"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M7.5 10V8.5a4.5 4.5 0 0 1 9 0V10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6.5 10h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <div className="font-bold tracking-tight">Open in Browser</div>
                <div className="text-xs text-slate-400">Smart Links • Default Browser Redirect</div>
              </div>
            </div>

            <h1 className="text-5xl font-bold leading-tight mt-2.5 mb-1.5 tracking-tight">Welcome Back</h1>
            <p className="text-base text-slate-400 leading-relaxed mb-4.5">
              Sign in to manage smart links that reliably open in the <span className="font-bold">default browser</span> across apps, webviews, and devices.
            </p>

            <div className="flex flex-wrap gap-2">
              <div className="text-sm px-3 py-1.5 rounded-full bg-white/6 border border-white/10 text-slate-300">Deep links</div>
              <div className="text-sm px-3 py-1.5 rounded-full bg-white/6 border border-white/10 text-slate-300">UTM tracking</div>
              <div className="text-sm px-3 py-1.5 rounded-full bg-white/6 border border-white/10 text-slate-300">Fallback routing</div>
              <div className="text-sm px-3 py-1.5 rounded-full bg-white/6 border border-white/10 text-slate-300">Safe redirects</div>
            </div>
          </section>

          {/* Login Card */}
          <section className="relative rounded-3xl flex justify-center items-center">
            <div 
              className="w-full md:w-[95%] bg-white/6 border border-white/10 rounded-5xl backdrop-blur-sm shadow-2xl relative overflow-hidden p-6.5 lg:p-6.5 rounded-3xl"
              style={{ boxShadow: '0 30px 80px rgba(0,0,0,.55)' }}
            >
              <div className="absolute inset-0 rounded-5xl pointer-events-none"
                style={{
                  background: 'radial-gradient(700px 240px at 50% 0%, rgba(139,92,246,.18), transparent 60%)'
                }}
              />
              
              <div className="relative">
                <div className="flex items-center justify-between gap-3 mb-4.5">
                  <h2 className="text-2xl font-semibold tracking-tight">Sign in</h2>
                  <div className="flex items-center gap-2 text-xs text-slate-300 whitespace-nowrap">
                    <span 
                      className="w-1.75 h-1.75 rounded-full bg-orange-500"
                      style={{ boxShadow: '0 0 0 6px rgba(255,152,0,.12)' }}
                    />
                    <span>Powered by <span className="font-bold">Mployee.me</span></span>
                  </div>
                </div>

                <form onSubmit={handleLogin} className="mt-6">
                  <div>
                    <label htmlFor="email" className="block text-sm text-slate-300 mb-2">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      autoComplete="email"
                      className="w-full px-3 py-2.5 rounded-lg border border-white/12 bg-white/8 text-slate-100 placeholder:text-slate-500 outline-none transition-all focus:border-orange-500/45 focus:shadow-orange-focus"
                      style={{
                        // focusBorderColor: 'rgba(255,152,0,.45)',
                        boxShadow: `0 0 0 0px rgba(255,152,0,.12)`
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,152,0,.45)';
                        e.currentTarget.style.boxShadow = '0 0 0 4px rgba(255,152,0,.12)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)';
                        e.currentTarget.style.boxShadow = '0 0 0 0px rgba(255,152,0,.12)';
                      }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mt-3.5">
                    <label htmlFor="password" className="block text-sm text-slate-300 mb-2">Password</label>
                    <input
                      id="password"
                      type="password"
                      required
                      placeholder="••••••••"
                      autoComplete="current-password"
                      className="w-full px-3 py-2.5 rounded-lg border border-white/12 bg-white/8 text-slate-100 placeholder:text-slate-500 outline-none transition-all focus:border-orange-500/45 focus:shadow-orange-focus"
                      style={{
                        // focusBorderColor: 'rgba(255,152,0,.45)',
                        boxShadow: `0 0 0 0px rgba(255,152,0,.12)`
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,152,0,.45)';
                        e.currentTarget.style.boxShadow = '0 0 0 4px rgba(255,152,0,.12)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)';
                        e.currentTarget.style.boxShadow = '0 0 0 0px rgba(255,152,0,.12)';
                      }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-5.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:brightness-105 text-white font-bold py-2.5 rounded-4xl transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-0.5 cursor-pointer"
                    style={{
                      boxShadow: '0 16px 40px rgba(37,99,235,.20), 0 18px 55px rgba(139,92,246,.18)'
                    }}
                  >
                    {loading ? 'Signing in...' : 'Sign In'}
                  </button>

                  <div className="flex items-center justify-between gap-3 mt-3.5">
                    <a href="#" className="text-sm text-slate-400 hover:text-slate-100 transition-colors no-underline hover:underline">
                      Forgot password?
                    </a>
                    <a href="#" className="text-sm text-slate-400 hover:text-slate-100 transition-colors no-underline hover:underline">
                      Contact support
                    </a>
                  </div>

                  <p className="mt-3.5 text-xs text-slate-500 leading-relaxed">
                    By signing in, you agree to manage redirects responsibly. This service is operated by Mployee.me (formerly Padhakku).
                  </p>
                </form>

                {error && (
                  <div className="mt-4 p-3.5 bg-red-500/10 border border-red-500/20 rounded-3 text-red-400 text-sm text-center animate-in fade-in slide-in-from-top-2">
                    {error}
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
