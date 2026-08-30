"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { GA_MEASUREMENT_ID, pageview } from "../lib/gtag";

/**
 * Google Analytics 4 — client-side route-change tracker.
 *
 * The actual gtag.js loader + dataLayer bootstrap is rendered server-side
 * in `src/app/layout.tsx` (see GoogleAnalyticsScript), so window.gtag and
 * window.dataLayer are guaranteed to exist by the time this component runs.
 *
 * This component only listens for App-Router client-side route changes
 * (pathname / searchParams) and fires a `page_view` event for each.
 * The initial page_view is fired by `gtag('config', ..., {send_page_view:true})`
 * in the loader script — so we only need to handle subsequent navigations here.
 */
export default function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <RouteChangeTracker />
    </Suspense>
  );
}

function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    if (typeof window.gtag !== "function") return;
    const query = searchParams?.toString();
    const path = query ? `${pathname}?${query}` : pathname;
    pageview(path);
  }, [pathname, searchParams]);

  return null;
}
