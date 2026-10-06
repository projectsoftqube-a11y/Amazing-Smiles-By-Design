import { notFound } from "next/navigation";
import { ServicePage } from "@/components/sections/service/ServicePage";
import { cosmeticServices, cosmeticSlugs } from "@/content/pages/cosmetic";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ service: string }> };

/** The 5 Cosmetic Dentistry treatments, prerendered at build time; any other slug 404s */
export const dynamicParams = false;

export function generateStaticParams() {
  return cosmeticSlugs.map((service) => ({ service }));
}

export async function generateMetadata({ params }: Props) {
  const { service } = await params;
  const entry = cosmeticServices[service];
  return entry ? buildMetadata(entry.content.meta) : {};
}

export default async function CosmeticServicePage({ params }: Props) {
  const { service } = await params;
  const entry = cosmeticServices[service];
  if (!entry) notFound();
  return <ServicePage content={entry.content} extras={entry.extras} />;
}
