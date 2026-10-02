import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/**
 * Nothing is disallowed: the paid /lp/ pages carry a noindex meta tag, and a
 * robots.txt block would stop crawlers from ever seeing it.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
