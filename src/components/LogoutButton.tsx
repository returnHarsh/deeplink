'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      console.error('Logout error:', e);
    } finally {
      localStorage.removeItem('token');
      window.dispatchEvent(new Event('auth-change'));
      router.push('/login');
      router.refresh();
    }
  };

  return (
    <button 
      onClick={handleLogout}
      disabled={loading}
      className="flex-1 md:flex-initial px-2 md:px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all font-medium text-[14px] cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
    >
      {loading ? (
        <>
          <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          <span>Logging out...</span>
        </>
      ) : (
        'Log Out'
      )}
    </button>
  );
}
