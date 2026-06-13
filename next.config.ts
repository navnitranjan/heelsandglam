import type { NextConfig } from "next";
import path from "path";

const isVercel = process.env.VERCEL === '1';
const isStaticExport = process.env.IS_STATIC_EXPORT === 'true' || (process.env.NODE_ENV === 'production' && !isVercel);

const nextConfig: NextConfig = {
  output: isStaticExport ? 'export' : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  turbopack: {
    root: path.resolve(__dirname),
  }
};

export default nextConfig;
