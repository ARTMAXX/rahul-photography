import { getMarkdownForPath } from "@/lib/markdown-generator";

// Prerendered at build time.
export const dynamic = "force-static";

/**
 * /llms-full.txt — full-site markdown dump for AI agents (llmstxt.org spec:
 * llms-full.txt carries the complete content llms.txt links to).
 */

const SITE_PATHS = [
  "/",
  "/services",
  "/dehradun",
  "/gallery",
  "/about",
  "/contact",
  "/faq",
  "/blog",
];

const POST_SLUGS = [
  "ai-photoshop-retouching-techniques",
  "ai-commercial-product-photography",
  "ai-video-editing-tools-2026",
  "why-beverage-splash-photography-is-hard",
  "generative-ai-product-backgrounds",
  "lighting-patterns-for-product-photography",
  "footwear-photography-angles",
  "ai-color-grading-scene-detection",
  "beverage-photography-glass",
  "ai-upscaling-ecommerce",
  "color-science-ecommerce",
  "retouching-101",
];

export async function GET() {
  const sections: string[] = [];

  for (const p of SITE_PATHS) {
    const md = getMarkdownForPath(p);
    if (md) sections.push(md.markdown);
  }
  for (const slug of POST_SLUGS) {
    const md = getMarkdownForPath(`/blog/${slug}`);
    if (md) sections.push(md.markdown);
  }

  const body = sections.join("\n\n---\n\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}