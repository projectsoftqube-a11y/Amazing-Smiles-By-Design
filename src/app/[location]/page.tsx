import { notFound } from "next/navigation";
import { LegalPage } from "@/components/sections/legal/LegalPage";
import { LocationPage } from "@/components/sections/location/LocationPage";
import { SitemapPage } from "@/components/sections/sitemap/SitemapPage";
import { ServicePage } from "@/components/sections/service/ServicePage";
import { legalNav, legalPages, legalSlugs } from "@/content/pages/legal";
import { driveFacts, locationPages, locationSlugs } from "@/content/pages/locations";
import { serviceLocationPages, serviceLocationSlugs } from "@/content/pages/service-locations";
import { sitemapMeta } from "@/content/pages/sitemap";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ location: string }> };

/**
 * Top-level content pages, prerendered at build time: the 25 town pages
 * (/dentist-langhorne-pa/ …), the service + location pages (/dental-implants-bucks-county/ …)
 * the legal pages (/privacy-policy/ …) and the HTML sitemap (/sitemap/; /sitemap.xml is app/sitemap.ts).
 * Every other top-level slug 404s; static routes (/about-us/ …) always win.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [...locationSlugs, ...serviceLocationSlugs, ...legalSlugs, "sitemap"].map((location) => ({ location }));
}

export async function generateMetadata({ params }: Props) {
  const { location } = await params;
  if (location === "sitemap") return buildMetadata(sitemapMeta);
  const page = locationPages[location] ?? serviceLocationPages[location]?.content ?? legalPages[location];
  return page ? buildMetadata(page.meta) : {};
}

export default async function TownPage({ params }: Props) {
  const { location } = await params;
  if (location === "sitemap") return <SitemapPage />;
  const page = locationPages[location];
  if (page) return <LocationPage content={page} drive={driveFacts[page.meta.path]} />;
  const service = serviceLocationPages[location];
  if (service) return <ServicePage content={service.content} extras={service.extras} />;
  const legal = legalPages[location];
  if (!legal) notFound();
  return <LegalPage content={legal} related={legalNav} />;
}
