import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';
import { db } from '@/db';

const GITHUB_CLIENT_ID = process.env.BETTER_AUTH_GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.BETTER_AUTH_GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error(`Missing Better Auth GitHub client ID or secret`);
}

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  socialProviders: {
    github: {
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    },
  },
  plugins: [nextCookies()],
});
