import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    deviceSizes: [480, 640, 768, 992, 1200, 1440],
    imageSizes: [128, 256, 384, 512],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },
};

export default nextConfig;
