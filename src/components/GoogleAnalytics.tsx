"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { GA_MEASUREMENT_ID, pageview } from "../lib/gtag";

/**
 * Google Analytics 4 — client-side loader.
 *
 * Uses the canonical GA4 install pattern (single inline script that:
 *   1. creates the dataLayer + gtag queue
 *   2. appends the gtag.js bundle to <head>
 * ).
 * This matches Google's official snippet, so we avoid the dynamic-script
 * teardown issue that happens with separate <Script src=...> in App Router.
 *
 * Page-view tracking on client-side route changes is wired below via
 * `usePathname` / `useSearchParams`.
 */
export default function GoogleAnalytics() {
  return (
    <>
      {GA_MEASUREMENT_ID ? (
        <Script id="ga4-loader" strategy="afterInteractive">
          {`(function(w,d,s,l,i){
              w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtag/js?id='+i+dl;
              f.parentNode.insertBefore(j,f);

              w.dataLayer = w.dataLayer || [];
              w.gtag = function(){ w.dataLayer.push(arguments); };
              w.gtag('js', new Date());
              w.gtag('config', i, { send_page_view: true });
          })(window,document,'script','dataLayer','${GA_MEASUREMENT_ID}');`}
        </Script>
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
