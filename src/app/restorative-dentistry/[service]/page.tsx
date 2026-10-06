import { notFound } from "next/navigation";
import { ServicePage } from "@/components/sections/service/ServicePage";
import { restorativeServices, restorativeSlugs } from "@/content/pages/restorative";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ service: string }> };

/** The 7 Restorative Dentistry treatments, prerendered at build time; any other slug 404s */
export const dynamicParams = false;

export function generateStaticParams() {
  return restorativeSlugs.map((service) => ({ service }));
}

export async function generateMetadata({ params }: Props) {
  const { service } = await params;
  const entry = restorativeServices[service];
  return entry ? buildMetadata(entry.content.meta) : {};
}

export default async function RestorativeServicePage({ params }: Props) {
  const { service } = await params;
  const entry = restorativeServices[service];
  if (!entry) notFound();
  return <ServicePage content={entry.content} extras={entry.extras} />;
}
