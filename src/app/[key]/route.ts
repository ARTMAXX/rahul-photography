// IndexNow key verification file route.
// When you submit URLs to IndexNow (https://www.bing.com/indexnow),
// the API checks that the key in your submission URL matches a file
// served at the same path on your site. For example, if your key is
// "abc123", you submit:
//   https://api.indexnow.org/IndexNow?url=...&key=abc123
// And the file https://yoursite.com/abc123.txt must exist.
//
// This dynamic route serves that file with the key from the URL.
// Configure INDEXNOW_KEY in .env.local (see .env.local.example).
// The matching POST endpoint at /api/indexnow uses the same key.

import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ key: string }> }
) {
  const { key } = await params;
  const expectedKey = process.env.INDEXNOW_KEY;
  if (!expectedKey || key !== expectedKey) {
    return new NextResponse('Key not found', { status: 404 });
  }
  return new NextResponse(key, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
