import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Игнорировать ESLint ошибки во время сборки production
    ignoreDuringBuilds: true,
  },
  devIndicators: {
    position: 'bottom-left',
  },
  experimental: {
    appDocumentPreloading: false,
  },
  serverExternalPackages: [],
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Output configuration for standalone deployment
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Compression
  compress: true,
  // Redirects temporarily disabled - handle via Vercel domain settings
  // async redirects() {
  //   return [];
  // },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
