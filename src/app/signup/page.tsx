/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [heardFrom, setHeardFrom] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // If user arrived at signup, clear any stale token to prevent false redirect loops
    localStorage.removeItem('token');
    window.dispatchEvent(new Event('auth-change'));
  }, []);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          companyName,
          email,
          password,
          heardFrom: heardFrom || 'Others',
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Signup failed');
      }
      localStorage.setItem("token", data.token);
      window.dispatchEvent(new Event('auth-change'));
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden relative flex items-center justify-center px-4 py-8"
      style={{
        background: `radial-gradient(900px 500px at 70% 20%, rgba(139,92,246,.22), transparent 60%),
                    radial-gradient(700px 450px at 20% 80%, rgba(37,99,235,.18), transparent 62%),
                    rgb(5,6,10)`,
      }}
    >
      <div className="w-full max-w-5xl p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          {/* Left Info Panel (Desktop only) */}
          <section className="hidden lg:block p-2">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-15 h-15 rounded-lg bg-gradient-to-br from-purple-500/95 to-blue-500/95 flex items-center justify-center border border-solid border-white/15 shadow-lg shadow-purple-500/25">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" y1="8" x2="19" y2="14" />
                  <line x1="22" y1="11" x2="16" y2="11" />
                </svg>
              </div>
              <div>
                <div className="font-bold tracking-tight">Open in Browser</div>
                <div className="text-xs text-slate-400">Smart Links • Default Browser Redirect</div>
              </div>
            </div>

            <h1 className="text-5xl font-bold leading-tight mt-2.5 mb-2 tracking-tight">Create Account</h1>
            <p className="text-base text-slate-400 leading-relaxed mb-6">
              Sign up to start creating and managing smart links that reliably open in the{' '}
              <span className="font-bold text-slate-200">default browser</span> across apps, webviews, and devices.
            </p>

            <div className="flex flex-wrap gap-2">
              <div className="text-sm px-3 py-1.5 rounded-full bg-white/6 border border-white/10 text-slate-300">Instant setup</div>
              <div className="text-sm px-3 py-1.5 rounded-full bg-white/6 border border-white/10 text-slate-300">Deep links</div>
              <div className="text-sm px-3 py-1.5 rounded-full bg-white/6 border border-white/10 text-slate-300">UTM tracking</div>
              <div className="text-sm px-3 py-1.5 rounded-full bg-white/6 border border-white/10 text-slate-300">Safe redirects</div>
            </div>
          </section>

          {/* Signup Card */}
          <section className="relative rounded-3xl flex justify-center items-center">
            <div
              className="w-full md:w-[98%] bg-white/6 border border-white/10 backdrop-blur-sm shadow-2xl relative overflow-hidden p-6 lg:p-7 rounded-3xl"
              style={{ boxShadow: '0 30px 80px rgba(0,0,0,.55)' }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(700px 240px at 50% 0%, rgba(139,92,246,.18), transparent 60%)',
                }}
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <h2 className="text-2xl font-semibold tracking-tight">Sign up</h2>
                  <div className="flex items-center gap-2 text-xs text-slate-300 whitespace-nowrap">
                    <span
                      className="w-1.75 h-1.75 rounded-full bg-orange-500"
                      style={{ boxShadow: '0 0 0 6px rgba(255,152,0,.12)' }}
                    />
                    <span>
                      Powered by <span className="font-bold">Mployee.me</span>
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSignUp} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        autoComplete="name"
                        className="w-full px-3 py-2 rounded-lg border border-white/12 bg-white/8 text-slate-100 placeholder:text-slate-500 outline-none transition-all text-sm"
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,152,0,.45)';
                          e.currentTarget.style.boxShadow = '0 0 0 4px rgba(255,152,0,.12)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)';
                          e.currentTarget.style.boxShadow = '0 0 0 0px rgba(255,152,0,.12)';
                        }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label htmlFor="companyName" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        required
                        placeholder="Acme Inc."
                        autoComplete="organization"
                        className="w-full px-3 py-2 rounded-lg border border-white/12 bg-white/8 text-slate-100 placeholder:text-slate-500 outline-none transition-all text-sm"
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,152,0,.45)';
                          e.currentTarget.style.boxShadow = '0 0 0 4px rgba(255,152,0,.12)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)';
                          e.currentTarget.style.boxShadow = '0 0 0 0px rgba(255,152,0,.12)';
                        }}
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      autoComplete="email"
                      className="w-full px-3 py-2 rounded-lg border border-white/12 bg-white/8 text-slate-100 placeholder:text-slate-500 outline-none transition-all text-sm"
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

                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      required
                      minLength={6}
                      placeholder="At least 6 characters"
                      autoComplete="new-password"
                      className="w-full px-3 py-2 rounded-lg border border-white/12 bg-white/8 text-slate-100 placeholder:text-slate-500 outline-none transition-all text-sm"
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

                  {/* How did you come across OpenInBrowser? Dropdown */}
                  <div>
                    <label htmlFor="heardFrom" className="block text-xs font-medium text-slate-300 mb-1.5">
                      How did you come across OpenInBrowser?
                    </label>
                    <div className="relative">
                      <select
                        id="heardFrom"
                        required
                        className="w-full px-3 py-2.5 rounded-lg border border-white/12 bg-slate-900/90 text-slate-100 outline-none transition-all text-sm appearance-none cursor-pointer pr-10"
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,152,0,.45)';
                          e.currentTarget.style.boxShadow = '0 0 0 4px rgba(255,152,0,.12)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)';
                          e.currentTarget.style.boxShadow = '0 0 0 0px rgba(255,152,0,.12)';
                        }}
                        value={heardFrom}
                        onChange={(e) => setHeardFrom(e.target.value)}
                      >
                        <option value="" disabled className="bg-slate-900 text-slate-400">
                          Select an option
                        </option>
                        <option value="Google Search" className="bg-slate-900 text-slate-100">
                          Google Search
                        </option>
                        <option value="Social Media" className="bg-slate-900 text-slate-100">
                          Social Media
                        </option>
                        <option value="Referral" className="bg-slate-900 text-slate-100">
                          Referral
                        </option>
                        <option value="Others" className="bg-slate-900 text-slate-100">
                          Others
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:brightness-105 text-white font-bold py-2.5 rounded-4xl transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-0.5 cursor-pointer text-sm flex items-center justify-center gap-2"
                    style={{
                      boxShadow: '0 16px 40px rgba(37,99,235,.20), 0 18px 55px rgba(139,92,246,.18)',
                    }}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        <span>Creating account...</span>
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </button>

                  <div className="text-center mt-3.5 text-xs text-slate-400">
                    Already have an account?{' '}
                    <Link
                      href="/login"
                      className="text-purple-400 hover:text-purple-300 font-semibold transition-colors underline hover:no-underline"
                    >
                      Sign in
                    </Link>
                  </div>

                  <p className="mt-3 text-[11px] text-slate-500 leading-relaxed text-center">
                    By signing up, you agree to our{' '}
                    <Link href="/terms" className="text-slate-400 hover:underline">
                      Terms
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-slate-400 hover:underline">
                      Privacy Policy
                    </Link>
                    . This service is operated by Mployee.me.
                  </p>
                </form>

                {error && (
                  <div className="mt-3.5 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs text-center">
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