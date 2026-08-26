import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getMarkdownForPath } from "@/lib/markdown-generator";

export function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";

  // Support Content Negotiation for AI Agents (Accept: text/markdown)
  // Ref: https://isitagentready.com/.well-known/agent-skills/markdown-negotiation/SKILL.md
  // Ref: https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
  if (
    acceptHeader.includes("text/markdown") ||
    acceptHeader.includes("text/x-markdown")
  ) {
    const pathname = request.nextUrl.pathname;
    const result = getMarkdownForPath(pathname);

    if (result) {
      return new NextResponse(result.markdown, {
        status: 200,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "X-Markdown-Tokens": result.tokens.toString(),
          "Vary": "Accept",
          "Cache-Control": "public, max-age=3600, s-maxage=86400",
        },
      });
    }
  }

  // Standard HTML response for regular browsers
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all page routes while excluding static assets, media, and build files
     */
    "/((?!_next/static|_next/image|opt/|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|webp|avif|mp4|gif|css|js)).*)",
  ],
};
