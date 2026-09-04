import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/site";

/**
 * robots.ts — Next.js generates /robots.txt from this at build time.
 * The static public/robots.txt is IGNORED when this file exists.
 *
 * Policy (Aug 2026):
 *  - One wildcard rule allows every legitimate crawler (search engines,
 *    AI search/reference crawlers, AI training crawlers).
 *  - Only /api/ and /_next/ are disallowed (application / build-internal).
 *  - Content-Signal header declares AI usage preferences for crawlers that
 *    respect it (Cloudflare AI Crawl Control, isitagentready, etc.):
 *      ai-train=yes   — allow training on this content
 *      search=yes     — allow indexing for search engines
 *      ai-input=yes   — allow content as LLM context/grounding
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Only /_next/data/ is blocked. Do NOT block /_next/ wholesale:
      // that also blocks /_next/static (CSS/JS), which Googlebot needs
      // to render the page and evaluate mobile-friendliness.
      disallow: ["/api/", "/_next/data/"],
    },
    sitemap: absoluteUrl("sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
