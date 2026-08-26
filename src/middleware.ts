import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getMarkdownForPath } from "@/lib/markdown-generator";

const BASE = "https://rahulchandaphotography.com";

/**
 * Link header values per RFC 8288 / RFC 9727 §3
 * Added to every page response so agents can auto-discover machine-readable resources.
 */
const LINK_HEADERS = [
  `<${BASE}/.well-known/api-catalog>; rel="api-catalog"`,
  `<${BASE}/.well-known/agent-card.json>; rel="https://a2a-protocol.org/relations/agent-card"`,
  `<${BASE}/.well-known/mcp/server-card.json>; rel="https://modelcontextprotocol.io/relations/server-card"`,
  `<${BASE}/.well-known/openid-configuration>; rel="service-desc"`,
  `<${BASE}/llms.txt>; rel="describedby"`,
  `<${BASE}/auth.md>; rel="describedby"; type="text/markdown"`,
].join(", ");

export function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";
  const pathname = request.nextUrl.pathname;

  // ─────────────────────────────────────────────────────────────
  // 1. Content Negotiation for AI Agents (Accept: text/markdown)
  //    Ref: https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
  // ─────────────────────────────────────────────────────────────
  if (
    acceptHeader.includes("text/markdown") ||
    acceptHeader.includes("text/x-markdown")
  ) {
    const result = getMarkdownForPath(pathname);

    if (result) {
      return new NextResponse(result.markdown, {
        status: 200,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "X-Markdown-Tokens": result.tokens.toString(),
          Vary: "Accept",
          "Cache-Control": "public, max-age=3600, s-maxage=86400",
          Link: LINK_HEADERS,
        },
      });
    }
  }

  // ─────────────────────────────────────────────────────────────
  // 2. Agent Skills Index — fix Content-Type for static JSON file
  //    Cloudflare Assets serve .json as application/json by default;
  //    the Agent Skills Discovery RFC requires no special type, but
  //    we explicitly set it here for correctness and future-proofing.
  // ─────────────────────────────────────────────────────────────
  if (pathname === "/.well-known/agent-skills/index.json") {
    // Pass through to static asset but ensure correct CORS header
    const res = NextResponse.next();
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Cache-Control", "public, max-age=86400, s-maxage=86400");
    return res;
  }

  // ─────────────────────────────────────────────────────────────
  // 3. Standard HTML response — add Link discovery headers per
  //    RFC 8288 / RFC 9727 §3 so agents can find all endpoints.
  // ─────────────────────────────────────────────────────────────
  const response = NextResponse.next();
  response.headers.set("Link", LINK_HEADERS);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all page routes while excluding static assets, media, and build files.
     * .well-known/* paths ARE included so we can attach Link discovery headers.
     * Note: exclude .js (scripts) but NOT .json (agent discovery documents).
     */
    "/((?!_next/static|_next/image|opt/|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|webp|avif|mp4|gif|css))(?!.*\\.js$).*)",
  ],
};
