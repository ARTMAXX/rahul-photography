"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { GA_MEASUREMENT_ID, GA_SCRIPT_SRC, pageview } from "../lib/gtag";

/**
 * Google Analytics 4 — client-side loader.
 *
 * - Injects gtag.js and configures the Measurement ID on mount.
 * - Initializes `window.dataLayer` and `window.gtag` queue BEFORE the remote
 *   script finishes loading, so events fired in the first paint are queued.
 * - Sends a `page_view` on the initial load AND on every client-side route
 *   change (Next.js App Router does not auto-fire page views).
 *
 * Loaded via `next/script` with `afterInteractive` so the gtag.js request
 * does not block first paint.
 */
export default function GoogleAnalytics() {
  // Suspense boundary is required by Next.js when using useSearchParams()
  // during static rendering. We split the route-change tracker out so the
  // outer component can still render.
  return (
    <>
      {GA_MEASUREMENT_ID ? (
        <>
          {/* Initialize dataLayer + gtag queue inline so any calls made
              before the remote script loads are buffered, not dropped. */}
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              window.gtag = function gtag(){ window.dataLayer.push(arguments); };
              window.gtag('js', new Date());
              window.gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
            `}
          </Script>
          {/* Load the gtag.js bundle. */}
          <Script
            id="ga4-loader"
            src={GA_SCRIPT_SRC(GA_MEASUREMENT_ID)}
            strategy="afterInteractive"
          />
        </>
      ) : null}
      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>
    </>
  );
}

/**
 * Sends a `page_view` to GA4 on every client-side route change.
 * Wrapped in Suspense above because useSearchParams() requires it during
 * static generation.
 */
function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    const query = searchParams?.toString();
    const path = query ? `${pathname}?${query}` : pathname;
    pageview(path);
  }, [pathname, searchParams]);

  return null;
}
