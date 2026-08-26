import { NextResponse } from "next/server";

/**
 * Health check endpoint — referenced in api-catalog as status link
 */
export function GET() {
  return NextResponse.json(
    {
      status: "ok",
      service: "rahul-chanda-photography",
      timestamp: new Date().toISOString(),
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-cache, no-store",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}

export const dynamic = "force-dynamic";
