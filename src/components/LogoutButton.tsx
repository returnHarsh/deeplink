'use client';

// import { logoutAction } from '@/app/dashboard/actions';
import { redirect } from 'next/navigation';

export default function LogoutButton() {

async function logoutAction(): Promise<void> {
  // await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/logout`, {
  //   method: 'POST',
  // });

  await fetch('/api/logout' , {
    method :"POST",
     headers: {
          'Content-Type': 'application/json',
    },
  })

  redirect('/login');
}



  const handleLogout = async () => {
    await logoutAction();
  };

  return (
    <button 
      onClick={handleLogout}
      className="flex-1 md:flex-initial px-2 md:px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all font-medium text-[14px] cursor-pointer"
    >
      Log Out
    </button>
  );
}
