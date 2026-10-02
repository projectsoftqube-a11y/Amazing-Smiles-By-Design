import type { MetadataRoute } from "next";
import { routes } from "@/content/routes";
import { absoluteUrl } from "@/lib/seo";

/** Only published, indexable pages. Paid /lp/ pages are noindex and never listed. */
export default function sitemap(): MetadataRoute.Sitemap {
  return routes
    .filter((route) => route.published && !route.noindex)
    .map((route) => ({
      url: absoluteUrl(route.path),
      changeFrequency: route.path === "/" ? "weekly" : "monthly",
      priority: route.path === "/" ? 1 : 0.7,
    }));
}
