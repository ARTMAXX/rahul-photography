import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/site";

/**
 * robots.ts  —  Next.js generates /robots.txt from this at build time.
 * The static public/robots.txt is IGNORED when this file exists.
 * Keep both in sync, or prefer this file as the single source of truth.
 *
 * Policy (Aug 2026): allow all legitimate crawlers — search engines, AI
 * search/reference bots, and AI training crawlers. Only /api/ and /_next/
 * are disallowed (application / build-internal resources).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General crawlers — allow everything except internals
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Major search engines (explicit allow — some UAs ignore the wildcard)
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      // AI search / reference crawlers (ChatGPT browse mode, Perplexity, Google
      // AI Overviews / Gemini, Claude reference) — all allowed
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      // AI training crawlers
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      // Other legitimate crawlers
      { userAgent: "AhrefsBot", allow: "/" },
    ],
    sitemap: absoluteUrl("sitemap.xml"),
  };
}
