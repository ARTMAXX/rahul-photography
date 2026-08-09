import type { MetadataRoute } from "next";
import { siteConfig, absoluteUrl } from "../lib/site";

// Publication date of every blog post, used for sitemap lastmod + BlogPosting schema.
// Format: yyyy-mm-dd (newest first).
export const blogPostsSEO: { slug: string; date: string }[] = [
  { slug: "preparing-for-a-product-shoot", date: "2026-07-15" },
  { slug: "why-beverage-splash-photography-is-hard", date: "2026-06-20" },
  { slug: "lighting-patterns-for-product-photography", date: "2026-05-27" },
  { slug: "food-styling-for-menus", date: "2026-05-08" },
  { slug: "footwear-photography-angles", date: "2026-04-19" },
  { slug: "luxury-watch-campaign", date: "2026-04-03" },
  { slug: "beverage-photography-glass", date: "2026-03-22" },
  { slug: "color-science-ecommerce", date: "2026-03-05" },
  { slug: "dark-vs-white-backgrounds", date: "2026-02-18" },
  { slug: "retouching-101", date: "2026-02-02" },
  { slug: "how-to-brief-a-photographer", date: "2026-01-19" },
  { slug: "campaign-photography-process", date: "2026-01-05" },
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

  const pages: MetadataRoute.Sitemap = core.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: new Date(),
    changeFrequency: p.change,
    priority: Number(p.priority),
  }));

  const posts: MetadataRoute.Sitemap = blogPostsSEO.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...posts];
}