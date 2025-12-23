'use server';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { db, waitlist } from '@/db';

const CreateWaitlistSchema = z.object({
  email: z.email().min(1).max(255),
});

type CreateWaitlistPayload = z.infer<typeof CreateWaitlistSchema>;

export const createWaitlist = async (payload: CreateWaitlistPayload) => {
  try {
    const validation = CreateWaitlistSchema.safeParse(payload);

    if (!validation.success) {
      return { success: false, errors: z.treeifyError(validation.error) };
    }

    const { email } = validation.data;

    await db.insert(waitlist).values({ email }).onConflictDoNothing({ target: waitlist.email });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to create waitlist entry' };
  }
};
