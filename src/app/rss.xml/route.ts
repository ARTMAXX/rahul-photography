import { posts } from "@/app/blog/[slug]/page";
import { blogs } from "@/lib/blog-catalog";
import { postDates } from "@/lib/blog-posts";
import { siteConfig, absoluteUrl } from "@/lib/site";

// Prerendered at build time — the feed changes only when the blog changes.
export const dynamic = "force-static";

/**
 * /rss.xml — RSS 2.0 feed for the blog.
 * Advertised in the document head via layout.tsx metadata `alternates.types`.
 *
 * Items come from the canonical catalog (@/lib/blog-catalog), which covers both
 * standalone posts (which own their page.tsx) and dynamic [slug] posts. Any
 * dynamic post missing from the catalog is merged in as a safety net, and
 * publish dates come from postDates in @/lib/blog-posts.
 */

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

interface FeedEntry {
  slug: string;
  title: string;
  description: string;
  tag: string;
}

/** Normalizes a catalog slug ("/blog/foo") to a bare post slug ("foo"). */
function bareSlug(slug: string): string {
  return slug.replace(/^\/blog\//, "");
}

/**
 * Merges the canonical catalog with the dynamic [slug] posts, newest first.
 * Catalog entries win on conflict so feed metadata matches what /blog shows.
 */
function feedEntries(): FeedEntry[] {
  const bySlug = new Map<string, FeedEntry>();

  for (const b of blogs) {
    const slug = bareSlug(b.slug);
    bySlug.set(slug, {
      slug,
      title: b.title,
      description: b.description,
      tag: b.tag,
    });
  }

  for (const p of posts) {
    if (!bySlug.has(p.slug)) {
      bySlug.set(p.slug, {
        slug: p.slug,
        title: p.title,
        description: p.excerpt,
        tag: p.tag,
      });
    }
  }

  const today = new Date().toISOString().slice(0, 10);
  return [...bySlug.values()].sort((a, b) =>
    (postDates[b.slug] ?? today).localeCompare(postDates[a.slug] ?? today)
  );
}

export async function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const items = feedEntries()
    .map((e) => {
      const iso = postDates[e.slug] ?? today;
      return `    <item>
      <title>${esc(e.title)}</title>
      <link>${absoluteUrl(`/blog/${e.slug}`)}</link>
      <guid isPermaLink="true">${absoluteUrl(`/blog/${e.slug}`)}</guid>
      <description>${esc(e.description)}</description>
      <category>${esc(e.tag)}</category>
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