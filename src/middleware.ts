import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BASE = "https://rahulchandaphotography.com";

/**
 * Paths that support Markdown content negotiation (Accept: text/markdown).
 * Any path NOT in this list will never trigger the markdown-generator import,
 * keeping middleware lightweight for normal HTML and static requests.
 */
const MARKDOWN_PATHS = new Set([
  "/",
  "/blog",
  "/services",
  "/gallery",
  "/about",
  "/contact",
  "/faq",
  "/dehradun",
]);
const MARKDOWN_PATH_PREFIXES = ["/blog/"];

/**
 * Link header values per RFC 8288 / RFC 9727 §3
 * Added to page responses so AI agents can auto-discover machine-readable resources.
 */
const LINK_HEADERS = [
  `<${BASE}/.well-known/api-catalog>; rel="api-catalog"`,
  `<${BASE}/.well-known/agent-card.json>; rel="https://a2a-protocol.org/relations/agent-card"`,
  `<${BASE}/.well-known/mcp/server-card.json>; rel="https://modelcontextprotocol.io/relations/server-card"`,
  `<${BASE}/.well-known/oauth-authorization-server>; rel="service-desc"`,
  `<${BASE}/.well-known/openid-configuration>; rel="service-desc"`,
  `<${BASE}/.well-known/agent-skills/index.json>; rel="service-doc"`,
  `<${BASE}/llms.txt>; rel="describedby"`,
  `<${BASE}/auth.md>; rel="describedby"; type="text/markdown"`,
].join(", ");

// RFC 9727 API Catalog representation
const API_CATALOG_PAYLOAD = JSON.stringify(
  {
    linkset: [
      {
        anchor: `${BASE}/api`,
        "service-desc": [
          {
            href: `${BASE}/openapi.json`,
            type: "application/openapi+json",
            title: "OpenAPI Specification",
          },
          {
            href: `${BASE}/.well-known/oauth-authorization-server`,
            type: "application/json",
            title: "OAuth 2.0 Authorization Server Metadata",
          },
          {
            href: `${BASE}/.well-known/openid-configuration`,
            type: "application/json",
            title: "OpenID Connect Discovery",
          },
          {
            href: `${BASE}/.well-known/oauth-protected-resource`,
            type: "application/json",
            title: "OAuth Protected Resource Metadata",
          },
        ],
        "service-doc": [
          {
            href: `${BASE}/services`,
            type: "text/html",
            title: "Photography Services",
          },
          {
            href: `${BASE}/faq`,
            type: "text/html",
            title: "Frequently Asked Questions",
          },
          {
            href: `${BASE}/.well-known/agent-skills/index.json`,
            type: "application/json",
            title: "Agent Skills Discovery Index",
          },
        ],
        status: [
          {
            href: `${BASE}/api/health`,
            type: "application/json",
            title: "Service Health Status",
          },
        ],
      },
    ],
  },
  null,
  2
);

export async function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";
  const pathname = request.nextUrl.pathname;
  const cleanPath = pathname.replace(/\/$/, "") || "/";

  // 1. API Catalog (RFC 9727)  —  return application/linkset+json
  if (pathname === "/.well-known/api-catalog") {
    return new NextResponse(API_CATALOG_PAYLOAD, {
      status: 200,
      headers: {
        "Content-Type": "application/linkset+json; charset=utf-8",
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
        "Access-Control-Allow-Origin": "*",
        "Link": LINK_HEADERS,
      },
    });
  }

  // 2. Health endpoint  —  /api/health
  if (pathname === "/api/health") {
    return new NextResponse(
      JSON.stringify(
        {
          status: "ok",
          service: "rahul-chanda-photography",
          timestamp: new Date().toISOString(),
        },
        null,
        2
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-cache, no-store",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }

  // 3. Content Negotiation for AI Agents (Accept: text/markdown)
  // Ref: https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
  // Guard: only import markdown-generator when (a) Accept matches AND (b) path is known.
  // This prevents the blog posts dataset from loading into V8 on every request.
  if (
    acceptHeader.includes("text/markdown") ||
    acceptHeader.includes("text/x-markdown")
  ) {
    const isKnownPath =
      MARKDOWN_PATHS.has(cleanPath) ||
      MARKDOWN_PATH_PREFIXES.some((p) => cleanPath.startsWith(p));

    if (isKnownPath) {
      const { getMarkdownForPath } = await import("@/lib/markdown-generator");
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
    // Unknown path with Accept: text/markdown  —  fall through to normal HTML
  }

  // 4. Standard HTML and static responses  —  attach Link discovery headers
  const response = NextResponse.next();
  response.headers.set("Link", LINK_HEADERS);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all routes while excluding static bundle chunks, media binaries,
     * the IndexNow key file (32-hex .txt at root), and the well-known directory.
     */
    "/((?!_next/static|_next/image|opt/|favicon.ico|robots.txt|sitemap.xml|\\.well-known/|[a-f0-9]{32}\\.txt|.*\\.(?:svg|png|jpg|jpeg|webp|avif|mp4|gif|css|ico))(?!.*\\.js$).*)",
  ],
};
