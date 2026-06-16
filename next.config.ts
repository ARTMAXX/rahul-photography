import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Support up to 4K resolutions
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 720, 1080, 1440, 1920, 2560],
    // Maximum quality - no compression
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
    unoptimized: false,
  },
};

export default nextConfig;
