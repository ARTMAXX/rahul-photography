import { NextResponse } from "next/server";

/**
 * API Catalog — RFC 9727
 * https://www.rfc-editor.org/rfc/rfc9727
 *
 * Serves /.well-known/api-catalog as application/linkset+json
 * so AI agents and API directories can auto-discover all machine-readable
 * endpoints on this site.
 */

const BASE = "https://rahulchandaphotography.com";

export function GET() {
  const catalog = {
    linkset: [
      {
        anchor: BASE,
        // Agent Skills Index — Agent Skills Discovery RFC v0.2.0
        "https://schemas.agentskills.io/relations/agent-skills": [
          { href: `${BASE}/.well-known/agent-skills/index.json` },
        ],
        // A2A Agent Card — a2a-protocol.org
        "https://a2a-protocol.org/relations/agent-card": [
          { href: `${BASE}/.well-known/agent-card.json` },
        ],
        // MCP Server Card — SEP-1649
        "https://modelcontextprotocol.io/relations/server-card": [
          { href: `${BASE}/.well-known/mcp/server-card.json` },
        ],
        // OIDC / OAuth discovery — RFC 8414 / OIDC Discovery
        "service-desc": [
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
        // Human-readable documentation
        "service-doc": [
          {
            href: `${BASE}/services`,
            type: "text/html",
            title: "Photography Services",
          },
          {
            href: `${BASE}/faq`,
            type: "text/html",
            title: "FAQ",
          },
        ],
        // Site description / llms.txt
        describedby: [
          {
            href: `${BASE}/llms.txt`,
            type: "text/plain",
            title: "LLMs.txt — AI site directory",
          },
          {
            href: `${BASE}/auth.md`,
            type: "text/markdown",
            title: "Auth.md — Agent registration & auth guidance",
          },
        ],
        // Status / health
        status: [
          {
            href: `${BASE}/api/health`,
            type: "application/json",
            title: "Health endpoint",
          },
        ],
      },
      // Per-skill entries
      {
        anchor: `${BASE}/.well-known/agent-skills/portfolio-search/SKILL.md`,
        "service-doc": [
          {
            href: `${BASE}/gallery`,
            type: "text/html",
            title: "Portfolio Gallery",
          },
        ],
      },
      {
        anchor: `${BASE}/.well-known/agent-skills/booking-inquiry/SKILL.md`,
        "service-doc": [
          {
            href: `${BASE}/contact`,
            type: "text/html",
            title: "Booking & Contact",
          },
        ],
      },
    ],
  };

  return new NextResponse(JSON.stringify(catalog, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/linkset+json",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

export const dynamic = "force-dynamic";
