import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/site";

/**
 * robots.ts  —  Next.js generates /robots.txt from this at build time.
 * The static public/robots.txt is IGNORED when this file exists.
 * Keep both in sync, or prefer this file as the single source of truth.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General crawlers  —  allow everything except internals
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // AI crawlers  —  explicitly allow for AEO / llms.txt visibility
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Anthropic-ai", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      // Block aggressive SEO scrapers
      { userAgent: "SemrushBot", disallow: "/" },
      { userAgent: "AhrefsBot", disallow: "/" },
      { userAgent: "MJ12bot", disallow: "/" },
    ],
    sitemap: absoluteUrl("sitemap.xml"),
  };
}
