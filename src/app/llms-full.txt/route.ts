import { getMarkdownForPath } from "@/lib/markdown-generator";
import { blogs } from "@/lib/blog-catalog";

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

/**
 * Blog paths with markdown available. Derived from the canonical catalog so
 * both standalone and dynamic posts are included automatically; catalog slugs
 * are already in "/blog/<slug>" form, which is what getMarkdownForPath expects.
 */
const POST_PATHS = [...new Set(blogs.map((b) => b.slug))];

export async function GET() {
  const sections: string[] = [];

  for (const p of SITE_PATHS) {
    const md = getMarkdownForPath(p);
    if (md) sections.push(md.markdown);
  }
  for (const path of POST_PATHS) {
    const md = getMarkdownForPath(path);
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