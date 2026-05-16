'use server';

import { db } from '@/lib/db';
import { guestbookMessages } from '@/db/schema';
import { revalidatePath } from 'next/cache';
import { desc } from 'drizzle-orm';

export async function addMessage(formData: FormData) {
  const name = formData.get('name') as string;
  const content = formData.get('content') as string;

  if (!name || !content) return;

  await db.insert(guestbookMessages).values({
    name,
    content,
  });

  revalidatePath('/');
}

export async function getMessages() {
  return await db.select().from(guestbookMessages).orderBy(desc(guestbookMessages.createdAt));
}
