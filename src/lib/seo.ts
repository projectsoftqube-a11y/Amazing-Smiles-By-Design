import type { Metadata } from "next";
import { practice, SITE_URL } from "@/content/site";

type PageSeo = {
  path: string;
  /** Used verbatim: the SEO team writes complete titles, so there is no title template. */
  title: string;
  description: string;
  ogDescription?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
};

export function buildMetadata({ path, title, description, ogDescription, ogType = "website", noindex }: PageSeo): Metadata {
  const url = new URL(path, SITE_URL).toString();
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: ogType,
      url,
      title,
      description: ogDescription ?? description,
      siteName: practice.name,
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title,
      description: ogDescription ?? description,
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();
