import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://analytics.ahrefs.com https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://rahulchandaphotography.com https://*.rahulchandaphotography.com https://www.google-analytics.com",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://analytics.ahrefs.com https://www.google-analytics.com https://vitals.vercel-insights.com",
      "media-src 'self' https://rahulchandaphotography.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // SECURITY HEADERS — now handled directly in Next.js config
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        // Cache static assets for 1 year
        source: "/opt/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache Next.js static files
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache fonts
        source: "/(.*)\\.(woff|woff2|ttf|otf|eot)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache images
        source: "/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp|avif)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
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
        source: "/blog/ai-retouching-workflow",
        destination: "/blog/ai-photoshop-retouching-techniques",
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
