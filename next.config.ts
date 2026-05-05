import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: ".next-prod",
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
