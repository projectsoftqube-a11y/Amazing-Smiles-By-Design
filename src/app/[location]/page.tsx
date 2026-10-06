import { notFound } from "next/navigation";
import { LocationPage } from "@/components/sections/location/LocationPage";
import { ServicePage } from "@/components/sections/service/ServicePage";
import { driveFacts, locationPages, locationSlugs } from "@/content/pages/locations";
import { serviceLocationPages, serviceLocationSlugs } from "@/content/pages/service-locations";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ location: string }> };

/**
 * Top-level content pages, prerendered at build time: the 25 town pages
 * (/dentist-langhorne-pa/ …) and the service + location pages (/dental-implants-bucks-county/ …).
 * Every other top-level slug 404s; static routes (/about-us/ …) always win.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [...locationSlugs, ...serviceLocationSlugs].map((location) => ({ location }));
}

export async function generateMetadata({ params }: Props) {
  const { location } = await params;
  const page = locationPages[location] ?? serviceLocationPages[location]?.content;
  return page ? buildMetadata(page.meta) : {};
}

export default async function TownPage({ params }: Props) {
  const { location } = await params;
  const page = locationPages[location];
  if (page) return <LocationPage content={page} drive={driveFacts[page.meta.path]} />;
  const service = serviceLocationPages[location];
  if (!service) notFound();
  return <ServicePage content={service.content} extras={service.extras} />;
}
