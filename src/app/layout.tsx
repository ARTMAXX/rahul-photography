import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Playfair_Display, Outfit } from "next/font/google";
import { siteConfig, absoluteUrl } from "../lib/site";
import PageShell from "../components/PageShell";
import CustomCursor from "../components/CustomCursor";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import GoogleAnalytics from "../components/GoogleAnalytics";
import GoogleAnalyticsScript from "../components/GoogleAnalyticsScript";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    // No template suffix. Each page's title is used as-is. The previous
    // template ("%s — Rahul Chanda Photography") added a 28-char suffix
    // to every page, which made every page's effective title longer than
    // its source string, pushed many pages over Google's 60-char truncation
    // threshold, and double-branded pages that already had "Rahul Chanda"
    // in the title (e.g., "Rahul Chanda — Commercial Photographer in
    // Dehradun — Rahul Chanda Photography" rendered as the page title).
    // The default title below carries the brand for the home page; every
    // other page sets its own title in its own metadata block.
    template: "%s",
  },
  description: siteConfig.description,
  authors: [{ name: "Rahul Chanda" }],
  creator: "Rahul Chanda",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    images: [
      {
        url: absoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Rahul Chanda — Commercial Product Photographer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImagePath)],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "LPBLXilY-PFQjebIFc4eq2AG5bSQqeuKsxm4i_xZoks",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        {/* Unified typography system — loaded as a side-channel stylesheet
            so Tailwind v4's PostCSS pipeline doesn't purge the rules. */}
        <link rel="stylesheet" href="/css/typography.css" />
        {/* Preload hero assets for LCP. Mobile uses the lightweight static
            hero-mobile.webp (the actual LCP element); desktop preloads the
            video poster. Media queries keep each device from fetching both. */}
        <link
          rel="preload"
          href="/opt/hero-mobile.webp"
          as="image"
          fetchPriority="high"
          media="(max-width: 767px)"
        />
        <link
          rel="preload"
          href="/opt/hero-shots/hero-video-poster.webp"
          as="image"
          fetchPriority="high"
          media="(min-width: 768px)"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#070707" />
        {/* Google Analytics 4 — gtag.js loader (server-rendered, in <head>) */}
        <GoogleAnalyticsScript />
      </head>
      <body
        className={`${playfair.variable} ${outfit.variable} antialiased`}
      >
        <PageShell>
          <CustomCursor />
          <Header />
          <ScrollToTop />
          {children}
        </PageShell>
        {/* Google Analytics 4 — page views + client-side route changes */}
        <GoogleAnalytics />
        {/* Microsoft Clarity — heatmaps and session recording */}
        <Script strategy="beforeInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "ya0waul2ro");
        `}</Script>
        {/* Ahrefs Web Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="TiJZdymXtkHehsEBZqxbkg"
          strategy="afterInteractive"
        />
        {/* WebMCP — expose site tools to browser-based AI agents
            Ref: https://webmachinelearning.github.io/webmcp/ */}
        <Script id="webmcp-tools" strategy="afterInteractive">{`
          (function () {
            if (!("modelContext" in navigator) || typeof navigator.modelContext.registerTool !== "function") return;
            const ac = new AbortController();
            navigator.modelContext.registerTool({
              name: "search_portfolio",
              description: "Search Rahul Chanda Photography commercial portfolio by category or style. Returns portfolio items with image references.",
              inputSchema: {
                type: "object",
                properties: {
                  category: {
                    type: "string",
                    description: "Portfolio category: product, beverage, footwear, fashion, food, lifestyle",
                    enum: ["product", "beverage", "footwear", "fashion", "food", "lifestyle"]
                  }
                }
              },
              execute: async function(params) {
                const url = new URL("https://rahulchandaphotography.com/gallery");
                if (params && params.category) url.searchParams.set("category", params.category);
                const res = await fetch(url.toString(), { headers: { "Accept": "text/markdown" } });
                return res.text();
              },
              signal: ac.signal
            });
            navigator.modelContext.registerTool({
              name: "get_services",
              description: "Get the list of commercial photography services offered by Rahul Chanda Photography including pricing guidance and turnaround times.",
              inputSchema: { type: "object", properties: {} },
              execute: async function() {
                const res = await fetch("https://rahulchandaphotography.com/services", { headers: { "Accept": "text/markdown" } });
                return res.text();
              },
              signal: ac.signal
            });
            navigator.modelContext.registerTool({
              name: "get_page_markdown",
              description: "Get any page on rahulchandaphotography.com as clean markdown. Supported paths: /, /services, /gallery, /about, /contact, /faq, /blog, /blog/{slug}",
              inputSchema: {
                type: "object",
                required: ["path"],
                properties: {
                  path: { type: "string", description: "Page path, e.g. /services or /blog/retouching-101" }
                }
              },
              execute: async function(params) {
                const safePath = (params.path || "/").replace(/[^a-zA-Z0-9/_-]/g, "");
                const res = await fetch("https://rahulchandaphotography.com" + safePath, { headers: { "Accept": "text/markdown" } });
                return res.text();
              },
              signal: ac.signal
            });
            window.addEventListener("beforeunload", function() { ac.abort(); });
          })();
        `}</Script>
      </body>
    </html>
  );
}