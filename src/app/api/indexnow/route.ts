import { NextResponse } from "next/server";
import { submitToIndexNow } from "../../../lib/indexnow";
import { siteConfig } from "../../../lib/site";

/**
 * IndexNow submission endpoint.
 *
 * POST /api/indexnow
 * Body: { urls: string[] }   (each must start with https://rahulchandaphotography.com)
 *
 * Submits the given URLs to the IndexNow API using the key from the
 * INDEXNOW_KEY environment variable. The key is published in plain text
 * at /{key}.txt on the public site (IndexNow spec requires this).
 */
export async function POST(request: Request) {
  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    return NextResponse.json(
      { ok: false, error: "INDEXNOW_KEY not configured" },
      { status: 500 },
    );
  }

  let body: { urls?: string[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const urls = (body.urls ?? []).filter(
    (u) => typeof u === "string" && u.startsWith("https://" + siteConfig.url.replace(/^https?:\/\//, "")),
  );
  if (urls.length === 0) {
    return NextResponse.json(
      { ok: false, error: "No valid rahulchandaphotography.com URLs in body" },
      { status: 400 },
    );
  }

  const result = await submitToIndexNow("rahulchandaphotography.com", key, urls);
  return NextResponse.json(result, { status: result.ok ? 200 : 502 });
}
