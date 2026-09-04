import type { MetadataRoute } from "next";
import { siteConfig, absoluteUrl } from "../lib/site";
import { postDates, postModified } from "../lib/blog-posts";

// Standalone blog posts that have their own page.tsx — listed in the sitemap
// with lastModified derived from their own page file, not from postDates
// (postDates still holds their publish date for JSON-LD).
const standaloneBlogSlugs = new Set<string>([
  "food-photography-restaurants",
  "product-photography-small-business-india",
  "product-photography-lighting-setup",
  "how-to-photograph-products-ecommerce",
  "beverage-photography-glass-splash",
]);

// Per-page lastModified values for core pages. Set from git history of the
// relevant page file when known. Edit these as pages get updated — do not
// stamp new Date() here.
const corePageDates: Record<string, string> = {
  "/":          "2026-08-29",
  "/services":  "2026-08-29",
  "/dehradun":  "2026-08-29",
  "/gallery":   "2026-08-29",
  "/about":     "2026-08-29",
  "/blog":      "2026-08-29",
  "/contact":   "2026-08-29",
  "/faq":       "2026-08-29",
  "/terms":     "2026-08-29",
  "/privacy":   "2026-08-29",
  "/services/product-photography":          "2026-08-29",
  "/services/food-beverage-photography":    "2026-08-29",
  "/services/footwear-fashion-photography": "2026-08-29",
  "/services/commercial-campaigns":         "2026-08-29",
};

// Service sub-pages  —  primary national/India-wide ranking targets
const servicePages = [
  { path: "/services/product-photography", priority: 0.9, freq: "monthly" as const },
  { path: "/services/food-beverage-photography", priority: 0.9, freq: "monthly" as const },
  { path: "/services/footwear-fashion-photography", priority: 0.9, freq: "monthly" as const },
  { path: "/services/commercial-campaigns", priority: 0.9, freq: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const core = [
    { path: "/", priority: 1.0, freq: "weekly" as const },
    { path: "/services", priority: 0.9, freq: "monthly" as const },
    { path: "/dehradun", priority: 0.9, freq: "weekly" as const },
    { path: "/gallery", priority: 0.9, freq: "monthly" as const },
    { path: "/about", priority: 0.8, freq: "monthly" as const },
    { path: "/blog", priority: 0.8, freq: "weekly" as const },
    { path: "/contact", priority: 0.9, freq: "yearly" as const },
    { path: "/faq", priority: 0.6, freq: "monthly" as const },
    { path: "/terms", priority: 0.2, freq: "yearly" as const },
    { path: "/privacy", priority: 0.2, freq: "yearly" as const },
  ];

  const pages: MetadataRoute.Sitemap = [...core, ...servicePages].map((p) => ({
    url: absoluteUrl(p.path),
    ...(corePageDates[p.path] && { lastModified: new Date(corePageDates[p.path]) }),
    changeFrequency: p.freq,
    priority: Number(p.priority),
  }));

  const standalonePosts: MetadataRoute.Sitemap = [...standaloneBlogSlugs].map(
    (slug) => ({
      url: absoluteUrl(`/blog/${slug}`),
      lastModified: new Date(postModified[slug] ?? postDates[slug]),
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  const dynamicPosts: MetadataRoute.Sitemap = Object.entries(postDates)
    .filter(([slug]) => !standaloneBlogSlugs.has(slug))
    .map(([slug, date]) => ({
      url: absoluteUrl(`/blog/${slug}`),
      lastModified: new Date(postModified[slug] ?? date),
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  return [...pages, ...standalonePosts, ...dynamicPosts];
}