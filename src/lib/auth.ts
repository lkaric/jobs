import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';
import { getDb } from '@/db';

let _auth: ReturnType<typeof betterAuth> | undefined;

export function getAuth() {
  if (_auth) return _auth;

  const GITHUB_CLIENT_ID = process.env.BETTER_AUTH_GITHUB_CLIENT_ID;
  const GITHUB_CLIENT_SECRET = process.env.BETTER_AUTH_GITHUB_CLIENT_SECRET;

  if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
    throw new Error('Missing Better Auth GitHub client ID or secret');
  }

  _auth = betterAuth({
    database: drizzleAdapter(getDb(), {
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

  return _auth;
}
