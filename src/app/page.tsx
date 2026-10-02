import { Faq } from "@/components/sections/Faq";
import { Areas } from "@/components/sections/home/Areas";
import { CareIntro } from "@/components/sections/home/CareIntro";
import { Coverage } from "@/components/sections/home/Coverage";
import { DoctorIntro } from "@/components/sections/home/DoctorIntro";
import { Emergency } from "@/components/sections/home/Emergency";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { Hero } from "@/components/sections/home/Hero";
import { Location } from "@/components/sections/home/Location";
import { Reviews } from "@/components/sections/home/Reviews";
import { Services } from "@/components/sections/home/Services";
import { Technology } from "@/components/sections/home/Technology";
import { JsonLd } from "@/components/ui/JsonLd";
import { homeAreas, homeFaqs, homeMeta } from "@/content/pages/home";
import { dentistEntity, dentistPerson, faqPage, graph, webPageEntity, websiteEntity } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(homeMeta);

const coreSchema = graph(
  dentistEntity({ areaServed: homeAreas.towns.map((town) => town.name) }),
  dentistPerson(),
  websiteEntity(),
  webPageEntity({ path: homeMeta.path, name: homeMeta.title, description: homeMeta.description }),
);

const faqSchema = graph(faqPage({ path: homeMeta.path, items: homeFaqs.items }));

export default function HomePage() {
  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />
      <Hero />
      <CareIntro />
      <Services />
      <DoctorIntro />
      <Technology />
      <Coverage />
      <Emergency />
      <Reviews />
      <Areas />
      <Location />
      <Faq id="faq-title" title={homeFaqs.title} items={homeFaqs.items} />
      <FinalCta />
    </>
  );
}
