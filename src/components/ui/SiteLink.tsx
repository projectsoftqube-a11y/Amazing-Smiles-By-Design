import NextLink from "next/link";
import type { ComponentProps } from "react";
import { getRoute } from "@/content/routes";

/**
 * Internal link. Prefetching is turned off for pages that are not published yet
 * (routes.ts), so the browser doesn't request pages that would return 404.
 * When a page's `published` flag flips to true, prefetching resumes automatically.
 */
export default function SiteLink({ href, prefetch, ...rest }: ComponentProps<typeof NextLink>) {
  const path = typeof href === "string" ? href.split("#")[0] : href.pathname ?? "";
  const route = getRoute(path);
  const unpublished = route !== undefined && !route.published;
  return <NextLink href={href} prefetch={unpublished ? false : prefetch} {...rest} />;
}
