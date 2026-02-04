'use server';

import { deleteLinkBySlug } from '@/lib/storage';

export async function deleteLinkAction(slug: string): Promise<void> {
  await deleteLinkBySlug(slug);
}

