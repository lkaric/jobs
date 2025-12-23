import { toNextJsHandler } from 'better-auth/next-js';
import { getAuth } from '@/lib/auth';

export async function GET(request: Request) {
  const { GET } = toNextJsHandler(getAuth());
  return GET(request);
}

export async function POST(request: Request) {
  const { POST } = toNextJsHandler(getAuth());
  return POST(request);
}
