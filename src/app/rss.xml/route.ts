import { posts } from "@/app/blog/[slug]/page";
import { postDates } from "@/lib/blog-posts";
import { siteConfig, absoluteUrl } from "@/lib/site";

// Prerendered at build time — the feed changes only when the blog changes.
export const dynamic = "force-static";

/**
 * /rss.xml — RSS 2.0 feed for the blog.
 * Advertised in the document head via layout.tsx metadata `alternates.types`.
 * Dynamic posts come from the [slug] posts array; standalone posts (which own
 * their page.tsx) are listed in postDates and merged in by slug.
 */

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = posts
    .map((p) => {
      const iso = postDates[p.slug] ?? new Date().toISOString().slice(0, 10);
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${absoluteUrl(`/blog/${p.slug}`)}</link>
      <guid isPermaLink="true">${absoluteUrl(`/blog/${p.slug}`)}</guid>
      <description>${esc(p.excerpt)}</description>
      <category>${esc(p.tag)}</category>
      <pubDate>${new Date(`${iso}T09:00:00+05:30`).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(siteConfig.name)} — Blog</title>
    <link>${absoluteUrl("/blog")}</link>
    <description>Field notes on commercial, product, food, footwear and campaign photography from Dehradun, India.</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${absoluteUrl("/rss.xml")}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}