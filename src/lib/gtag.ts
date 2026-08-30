/**
 * Google Analytics 4 — gtag helper.
 *
 * Loads the official gtag.js snippet inline (so the script tag is rendered
 * by Next.js on the client, not loaded via an extra round-trip) and
 * configures the page once the script is parsed. The dataLayer is initialized
 * as a plain array so gtag's queue (gtag('js', new Date()) and
 * gtag('config', id, { send_page_view: true })) can push into it before
 * the remote gtag.js bundle finishes downloading.
 *
 * Page-view tracking on client-side route changes is wired in
 * `GoogleAnalytics.tsx` via `usePathname` / `useSearchParams`.
 */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

/** URL of the gtag.js bundle. Standard GA4 install path. */
export const GA_SCRIPT_SRC = (id: string) =>
  `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;

// Window augmentation so TS knows about the gtag queue.
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Send a page_view event. Safe to call on every client-side route change.
 * `path` is the new URL; the gtag `page_path` override is what GA4 uses to
 * attribute the page view (avoids sending the previous path on back/forward).
 */
export function pageview(path: string) {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.origin + path,
    page_title: document.title,
  });
}
