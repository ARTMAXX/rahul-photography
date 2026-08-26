import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // SECURITY HEADERS (HSTS / nosniff / referrer-policy):
  // Next 16's Turbopack build does not compile next.config headers() into the
  // output (verified Aug 2026 — redirects() compile, headers() do not).
  // These must be enabled at the Cloudflare edge instead:
  //   Dashboard → SSL/TLS → Edge Certificates → Enable HSTS
  //   (max-age 6 months+, includeSubDomains; add preload only later)
  // Optional hardening via a Response Header Transform Rule:
  //   X-Content-Type-Options: nosniff / Referrer-Policy: strict-origin-when-cross-origin
  //
  // HOST CANONICALIZATION (SEO fix Aug 2026): Moved to Cloudflare Dashboard
  // Redirect Rules because @opennextjs/cloudflare does NOT support `has`
  // conditions in next.config.ts redirects — the `:path*` param is never
  // interpolated, producing broken Location headers like "/:path*".
  //   CF Dashboard → Rules → Redirect Rules:
  //     Rule 1: www.rahulchandaphotography.com/* → https://rahulchandaphotography.com/$1 (301)
  //     Rule 2: http://rahulchandaphotography.com/* → https://rahulchandaphotography.com/$1 (301)
  // 301 redirects for blog slugs removed from the sitemap (2026-08-15).
  // Google had already queued these from the old sitemap — redirecting to the
  // closest live page kills the 404s, preserves link equity, and keeps crawl
  // budget clean instead of burning it on "resource not found".
  async redirects() {
    return [
      {
        source: "/blog/preparing-for-a-product-shoot",
        destination: "/blog/ai-commercial-product-photography",
        permanent: true,
      },
      {
        source: "/blog/food-styling-for-menus",
        destination: "/blog/why-beverage-splash-photography-is-hard",
        permanent: true,
      },
      {
        source: "/blog/luxury-watch-campaign",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/blog/dark-vs-white-backgrounds",
        destination: "/blog/color-science-ecommerce",
        permanent: true,
      },
      {
        source: "/blog/how-to-brief-a-photographer",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/blog/campaign-photography-process",
        destination: "/blog/ai-commercial-product-photography",
        permanent: true,
      },
    ];
  },
  // Turbopack root — resolves lockfile ambiguity warning
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // Support up to 4K resolutions
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 720, 1080, 1440, 1920, 2560],
    // Maximum quality - no compression
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
    unoptimized: false,
    // Quality ladder actually requested by components (Next 16 rejects
    // any quality not listed here with a 400 on /_next/image).
    qualities: [70, 72, 74, 75, 76, 78, 80],
  },
};

export default nextConfig;
