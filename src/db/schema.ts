import { createId } from '@paralleldrive/cuid2';
import { index, pgEnum, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';

export const waitlistStatus = pgEnum('waitlist_status', ['waitlisted', 'invited', 'onboarded']);

export const waitlist = pgTable(
  'waitlist',
  {
    id: varchar('id', { length: 32 })
      .$defaultFn(() => createId())
      .primaryKey(),
    email: varchar('email', { length: 255 }).unique().notNull(),
    status: waitlistStatus().notNull().default('waitlisted'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at'),
  },
  (t) => [index('waitlist_email_idx').on(t.email)],
);
