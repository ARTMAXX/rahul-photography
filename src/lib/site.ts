/**
 * Central site configuration.
 *
 * CHANGE THIS ONE LINE when the real custom domain goes live.
 * All canonicals, sitemap URLs, robots.txt, OG image URLs, and schema
 * references resolve through this file — nothing else needs touching.
 */
export const siteConfig = {
  /** Current live URL — production site on Cloudflare (rahulchandaphotography.com). */
  url: "https://rahulchandaphotography.com",

  name: "Rahul Chanda Photography",
  title: "Rahul Chanda — Commercial Product Photographer | Dehradun, India",
  description:
    "Commercial and product photographer in Dehradun, India. Product, food & beverage, footwear, and campaign photography shot and retouched in-house.",

  /** Path to the social share image (must be a raster format — JPG/PNG).
   *  Optimized 1200×630 JPEG derivative (63 KB) — the old /og-image.png
   *  was 482 KB and slowed every share unfurl. */
  ogImagePath: "/opt/og-image.jpg",

  contact: {
    name: "Rahul Chanda",
    email: "rahulchandaphotography@gmail.com",
    telephone: "+917078939475",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
    latitude: 30.3165,
    longitude: 78.0322,
    priceRange: "₹12,000 — ₹2,00,000+",
    instagram: "https://www.instagram.com/rahul_chanda_photography/",
    /** Google Business Profile (via Maps CID). */
    googleBusiness: "https://maps.google.com/?cid=2875568559570212542",
  },
} as const;

/**
 * Absolute URL helper: resolves a path like "/blog" against the site root.
 * A leading slash is added automatically, so "sitemap.xml" and "/sitemap.xml" both work.
 */
export function absoluteUrl(path = "/"): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${p}`;
}
