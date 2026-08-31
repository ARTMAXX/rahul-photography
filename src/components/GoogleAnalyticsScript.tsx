import Script from "next/script";
import { GA_MEASUREMENT_ID, GA_SCRIPT_SRC } from "../lib/gtag";

/**
 * Google Analytics 4 — server-rendered gtag.js loader.
 *
 * Pure GA4 (NOT GTM). Renders two scripts into the document:
 *   1. Inline script that initializes window.dataLayer and window.gtag
 *      queue, then calls gtag('js', new Date()) and gtag('config', ID)
 *      which fires the initial page_view.
 *   2. The remote gtag.js bundle from googletagmanager.com.
 *
 * Both are placed with `beforeInteractive` so they are inlined into the
 * server-rendered HTML inside <head> — guaranteeing the dataLayer and
 * gtag function exist before any page JS runs.
 *
 * If the env var is missing, nothing is rendered.
 */
export default function GoogleAnalyticsScript() {
  if (!GA_MEASUREMENT_ID) return null;
  return (
    <>
      <Script id="ga4-init" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){ window.dataLayer.push(arguments); };
          window.gtag('js', new Date());
          window.gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
        `}
      </Script>
      <Script
        id="ga4-loader"
        src={GA_SCRIPT_SRC(GA_MEASUREMENT_ID)}
        strategy="afterInteractive"
      />
    </>
  );
}
