import { createId } from '@paralleldrive/cuid2';
import { pgEnum, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';

export const waitlistStatus = pgEnum('waitlist_status', ['waitlisted', 'invited', 'onboarded']);

export const waitlist = pgTable('waitlist', {
  id: varchar('id', { length: 32 })
    .$defaultFn(() => createId())
    .primaryKey(),
  email: varchar('email', { length: 255 }).notNull(),
  status: waitlistStatus().notNull().default('waitlisted'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at'),
});
