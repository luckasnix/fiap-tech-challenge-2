import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: (process.env.NEXT_CONFIG_OUTPUT as NextConfig["output"]) || undefined,
  async rewrites() {
    return [
      {
        source: '/dashboard/:path*',
        destination: 'http://localhost:3001/dashboard/:path*',
      },
      {
        source: '/investimentos/:path*',
        destination: 'http://localhost:3001/investimentos/:path*',
      },
      {
        source: '/_next/static/:path*',
        destination: 'http://localhost:3001/_next/static/:path*',
      },
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*',
      },
    ];
  },
};

export default nextConfig;
