import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* output: 'export', */ // Commented out for Vercel deployment compatibility. Un-comment if building for Apache/Nginx.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
