import { Faq } from "@/components/sections/Faq";
import { Coverage } from "@/components/sections/home/Coverage";
import { DoctorIntro } from "@/components/sections/home/DoctorIntro";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { Hero } from "@/components/sections/home/Hero";
import { Location } from "@/components/sections/home/Location";
import { Reviews } from "@/components/sections/home/Reviews";
import { Services } from "@/components/sections/home/Services";
import { Technology } from "@/components/sections/home/Technology";
import { Welcome } from "@/components/sections/home/Welcome";
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
      <Welcome />
      {/* Client edits (16 Oct 2026): Insurance, Membership Plans & Financing moved up to follow
          Welcome; the Dental Emergency and Service Area sections removed (the areas are in the
          footer, and emergency care has its own pages). */}
      <Coverage />
      <Services />
      <DoctorIntro />
      <Technology />
      <Reviews />
      <Location />
      <Faq id="faq-title" title={homeFaqs.title} items={homeFaqs.items} />
      <FinalCta />
    </>
  );
}
