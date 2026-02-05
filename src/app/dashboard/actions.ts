'use server';

import { deleteLinkBySlug } from '@/lib/storage';
// import { redirect } from 'next/navigation';

export async function deleteLinkAction(slug: string): Promise<void> {
  await deleteLinkBySlug(slug);
}

// export async function logoutAction(): Promise<void> {
//   // await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/logout`, {
//   //   method: 'POST',
//   // });

//   await fetch('/api/logout' , {
//     method :"POST",
//      headers: {
//           'Content-Type': 'application/json',
//     },
//   })

//   redirect('/login');
// }

