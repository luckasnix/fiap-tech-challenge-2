import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: (process.env.NEXT_CONFIG_OUTPUT as NextConfig["output"]) || undefined,
};

export default nextConfig;
