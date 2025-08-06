import type { NextConfig } from "next";
const appZoneUrl = process.env.NEXT_PUBLIC_APP_ZONE_URL || 'http://app-zone:3001';

const nextConfig: NextConfig = {
  output: (process.env.NEXT_CONFIG_OUTPUT as NextConfig["output"]) || undefined,
  async rewrites() {
    return [
      {
        source: `/dashboard/:path*`,
        destination: `${appZoneUrl}/dashboard/:path*`,
      },
      {
        source: '/investimentos/:path*',
        destination: `${appZoneUrl}/investimentos/:path*`,
      },
      {
        source: '/_next/static/:path*',
        destination: `${appZoneUrl}/_next/static/:path*`,
      },
      {
        source: '/api/:path*',
        destination: `${appZoneUrl}/api/:path*`,
      },
    ];
  },

};

export default nextConfig;
