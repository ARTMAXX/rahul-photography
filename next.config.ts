import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
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
    // Required in Next.js 16
    qualities: [75, 100],
  },
};

export default nextConfig;
