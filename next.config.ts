import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every URL on the current site ends in a slash; the SEO sitemap keeps them.
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    // Serve /public images as they are: Vercel image optimisation is a paid allowance on the Hobby plan
    // and answers 402 once it is used up, which leaves every next/image blank.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
};

export default nextConfig;
