import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every URL on the current site ends in a slash; the SEO sitemap keeps them.
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
};

export default nextConfig;
