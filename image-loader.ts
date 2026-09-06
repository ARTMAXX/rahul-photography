import type { ImageLoaderProps } from "next/image";
import { siteConfig } from "@/lib/site";

/**
 * Cloudflare Images custom loader — the officially supported image-caching
 * mechanism for @opennextjs/cloudflare (see opennext.js.org/cloudflare/howtos/image).
 *
 * Why: the OpenNext /_next/image handler (a) sets no Cache-Control for
 * non-static-import images (this site references every image by string path,
 * so `immutable` is always false) and (b) never caches transformations, so
 * every request re-transformed on the fly (~500 ms added to the LCP hero's
 * load duration, measured 2026-09-06).
 *
 * /cdn-cgi/image/ responses are edge-cached by Cloudflare automatically
 * (verified live: `Cache-Control: public, max-age=2592000`,
 * `CF-Cache-Status: HIT`, repeat request ~4.5x faster) and format=auto
 * negotiates AVIF/WebP via `Vary: Accept` — one billable transformation.
 *
 * Responsive behavior is unchanged: deviceSizes/imageSizes still drive the
 * srcset candidate widths, `sizes` still drives selection, `priority` still
 * emits the fetchpriority=high preload. Only the URL scheme changes.
 *
 * Cost: Free plan includes 5,000 unique transformations/month (unique =
 * same source image + options, counted once per calendar month; cached
 * deliveries are not re-billed). This site uses a few hundred per month.
 *
 * ⚠️ Cloudflare transformations require ABSOLUTE source URLs — relative
 * paths return 404 (verified live). encodeURI() percent-encodes spaces in
 * asset paths ("best shots") — literal spaces would break srcset parsing.
 */
const normalizeSrc = (src: string) => (src.startsWith("/") ? src.slice(1) : src);

export default function cloudflareLoader({ src, width, quality }: ImageLoaderProps) {
  const params = [`width=${width}`, `quality=${quality ?? 75}`, `format=auto`];

  if (process.env.NODE_ENV === "development") {
    // Serve the original image when using `next dev`
    return `${src}?${params.join("&")}`;
  }

  const absolute = new URL(src, siteConfig.url).href;
  return `/cdn-cgi/image/${params.join(",")}/${encodeURI(absolute)}`;
}
