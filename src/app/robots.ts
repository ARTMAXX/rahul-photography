import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/site";

/**
 * robots.ts  —  Next.js generates /robots.txt from this at build time.
 * The static public/robots.txt is IGNORED when this file exists.
 *
 * Policy (Aug 2026): one wildcard rule. This implicitly allows every
 * legitimate crawler (Googlebot, Bingbot, GPTBot, ChatGPT-User, ClaudeBot,
 * Google-Extended, PerplexityBot, Amazonbot, anthropic-ai, Bytespider,
 * CCBot, AhrefsBot, etc.) without any conflicting per-bot rules.
 * Only /api/ and /_next/ are disallowed (application / build-internal).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: absoluteUrl("sitemap.xml"),
  };
}
