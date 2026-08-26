import type { MetadataRoute } from "next";
import { siteConfig, absoluteUrl } from "../lib/site";

// Publication date of every active blog post, used for sitemap lastmod + BlogPosting schema.
// Format: yyyy-mm-dd (newest first). MUST stay in sync with src/app/blog/[slug]/page.tsx postISO.
export const blogPostsSEO: { slug: string; date: string }[] = [
  { slug: "ai-photoshop-retouching-techniques", date: "2026-08-15" },
  { slug: "ai-commercial-product-photography", date: "2026-08-05" },
  { slug: "ai-video-editing-tools-2026", date: "2026-07-22" },
  { slug: "why-beverage-splash-photography-is-hard", date: "2026-06-20" },
  { slug: "generative-ai-product-backgrounds", date: "2026-06-10" },
  { slug: "lighting-patterns-for-product-photography", date: "2026-05-27" },
  { slug: "footwear-photography-angles", date: "2026-04-28" },
  { slug: "ai-color-grading-scene-detection", date: "2026-04-15" },
  { slug: "beverage-photography-glass", date: "2026-03-24" },
  { slug: "ai-upscaling-ecommerce", date: "2026-03-10" },
  { slug: "color-science-ecommerce", date: "2026-03-08" },
  { slug: "retouching-101", date: "2026-02-06" },
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
    changeFrequency: p.freq,
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