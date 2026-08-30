/**
 * Google Analytics 4 — gtag helper.
 *
 * The Measurement ID is read from `NEXT_PUBLIC_GA_MEASUREMENT_ID` so it
 * is inlined into the client bundle at build time. In Cloudflare Workers
 * via OpenNext, the value is sourced from `wrangler.toml [vars]` (or
 * `.dev.vars` for local dev).
 */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

/** URL of the gtag.js bundle. Standard GA4 install path. */
export const GA_SCRIPT_SRC = (id: string) =>
  `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Send a `page_view` event. Safe to call on every client-side route change.
 * The `page_path` override is what GA4 uses to attribute the page view
 * (avoids sending the previous path on back/forward navigation).
 */
export function pageview(path: string) {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.origin + path,
    page_title: document.title,
  });
}
