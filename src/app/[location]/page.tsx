import { notFound } from "next/navigation";
import { LocationPage } from "@/components/sections/location/LocationPage";
import { driveFacts, locationPages, locationSlugs } from "@/content/pages/locations";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ location: string }> };

/**
 * The 25 town pages (/dentist-langhorne-pa/ …), prerendered at build time.
 * Every other top-level slug 404s; static routes (/about-us/ …) always win.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return locationSlugs.map((location) => ({ location }));
}

export async function generateMetadata({ params }: Props) {
  const { location } = await params;
  const page = locationPages[location];
  return page ? buildMetadata(page.meta) : {};
}

export default async function TownPage({ params }: Props) {
  const { location } = await params;
  const page = locationPages[location];
  if (!page) notFound();
  return <LocationPage content={page} drive={driveFacts[page.meta.path]} />;
}
