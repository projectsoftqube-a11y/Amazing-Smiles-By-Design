import { notFound } from "next/navigation";
import { ServicePage } from "@/components/sections/service/ServicePage";
import { generalServices, generalSlugs } from "@/content/pages/general";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ service: string }> };

/** The 10 General Dentistry treatments, prerendered at build time; any other slug 404s */
export const dynamicParams = false;

export function generateStaticParams() {
  return generalSlugs.map((service) => ({ service }));
}

export async function generateMetadata({ params }: Props) {
  const { service } = await params;
  const entry = generalServices[service];
  return entry ? buildMetadata(entry.content.meta) : {};
}

export default async function GeneralServicePage({ params }: Props) {
  const { service } = await params;
  const entry = generalServices[service];
  if (!entry) notFound();
  return <ServicePage content={entry.content} extras={entry.extras} />;
}
