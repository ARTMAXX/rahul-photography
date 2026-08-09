/**
 * Central site configuration.
 *
 * CHANGE THIS ONE LINE when the real custom domain goes live.
 * All canonicals, sitemap URLs, robots.txt, OG image URLs, and schema
 * references resolve through this file — nothing else needs touching.
 */
export const siteConfig = {
  /** Current live URL — the site is deployed on Netlify's default domain. */
  url: "https://rahulchandaphotography.netlify.app",

  name: "Rahul Chanda Photography",
  title: "Rahul Chanda — Commercial Product Photographer | Dehradun, India",
  description:
    "Rahul Chanda is a high-end commercial product photographer based in Dehradun, India. Specialising in product, food, beverage splash, and footwear photography for premium brands.",

  /** Path to the social share image (must be a raster format — JPG/PNG). */
  ogImagePath: "/og-image.png",

  contact: {
    name: "Rahul Chanda",
    email: "rahulchandaphotography@gmail.com",
    telephone: "+917078939475",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
    latitude: 30.3165,
    longitude: 78.0322,
    priceRange: "₹12,000 – ₹2,00,000+",
    instagram: "https://www.instagram.com/rahul_chanda_photography/",
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