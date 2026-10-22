import type { Metadata } from "next";
import { notFound } from "next/navigation";

/**
 * Root catch-all (3-dot spread) — guarantees every unknown URL matches a real
 * route. Without this, OpenNext's worker route trie has no entry for unknown
 * paths and the fallback crashes with:
 *   TypeError: Cannot read properties of undefined (reading 'default')
 * which production serves as an HTTP 500 for any single-segment unknown URL
 * (an SEO-negative behaviour: Google records soft 500s on crawl waste).
 */
export const metadata: Metadata = {
  title: "404 — Page Not Found",robots: { index: false, follow: false },
};

export default function CatchAll404() {
  notFound();
}
