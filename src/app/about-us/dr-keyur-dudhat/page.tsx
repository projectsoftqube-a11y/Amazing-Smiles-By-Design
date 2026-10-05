import type { Metadata } from "next";
import { Education, Focus, Glance, Highlights } from "@/components/sections/doctor/DoctorSections";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { HeroCard, PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { images } from "@/content/images";
import { homeAreas } from "@/content/pages/home";
import {
  doctorBreadcrumb,
  doctorFaqs,
  doctorFinalCta,
  doctorHero,
  doctorMeta,
} from "@/content/pages/doctor";
import { contactLinks, practice } from "@/content/site";
import {
  breadcrumbList,
  dentistEntity,
  dentistPerson,
  faqPage,
  graph,
  ids,
  webPageEntity,
  websiteEntity,
} from "@/lib/schema";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

// og:type "profile" per the Developer Handoff
const base = buildMetadata(doctorMeta);
export const metadata: Metadata = { ...base, openGraph: { ...base.openGraph, type: "profile" } };

const portrait = { ...images.doctorPortrait, alt: doctorHero.portraitAlt };

/**
 * ProfilePage + Person + BreadcrumbList + Dentist (03 Developer Handoff.md, 3a).
 * The Person @id is the canonical ID for Dr. Dudhat, shared with Home and About;
 * the Dentist links back to him through `employee`. The headshot is added to the
 * Person node as the handoff asks once a real photo exists.
 */
const coreSchema = graph(
  webPageEntity({
    path: doctorMeta.path,
    name: doctorMeta.title,
    description: doctorMeta.description,
    type: "ProfilePage",
    breadcrumb: true,
    mainEntity: ids.person,
    about: null,
  }),
  breadcrumbList(doctorMeta.path, doctorBreadcrumb),
  dentistPerson({
    description: doctorHero.intro,
    image: images.doctorPortrait.src ? absoluteUrl(images.doctorPortrait.src.src) : undefined,
    birthPlace: true,
    knowsAbout: ["Dental implants", "Cosmetic dentistry", "Porcelain veneers"],
  }),
  dentistEntity({ areaServed: homeAreas.towns.map((town) => town.name), employee: true }),
  websiteEntity(),
);

const faqSchema = graph(faqPage({ path: doctorMeta.path, items: doctorFaqs.items }));

export default function DoctorPage() {
  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        id="doctor-page-title"
        breadcrumb={doctorBreadcrumb}
        eyebrow="Meet your dentist"
        title={doctorHero.title}
        subtitle={doctorHero.subtitle}
        intro={doctorHero.intro}
        image={portrait}
        ratio="4 / 5"
        actions={
          <>
            <Button href={doctorHero.primaryCta.href} icon="calendar" track="appointment_click">
              {doctorHero.primaryCta.label}
            </Button>
            <Button href={contactLinks.call} variant="secondary" icon="phone" track="call_click">
              Call or Text {practice.phone.display}
            </Button>
          </>
        }
        cards={
          <>
            <HeroCard
              position="top"
              icon={<Icon name="cap" size={20} />}
              title="Doctor of Dental Medicine"
              text={practice.dentist.school}
            />
            <HeroCard
              position="bottom"
              icon={<Icon name="tooth" size={20} />}
              title="Implant & cosmetic focus"
              text={`${practice.address.city}, ${practice.address.region}`}
            />
          </>
        }
      />

      <Glance />
      <Education />
      <Focus />
      <Highlights />
      <Faq id="doctor-faq-title" title={doctorFaqs.title} items={doctorFaqs.items} />
      <FinalCta
        id="doctor-book-title"
        title={doctorFinalCta.title}
        body={doctorFinalCta.body}
        actions={
          <>
            <Button href={doctorFinalCta.cta.href} variant="inverse" icon="calendar" track="appointment_click">
              {doctorFinalCta.cta.label}
            </Button>
            <Button href={doctorFinalCta.secondary.href} variant="inverse-outline" icon="family">
              {doctorFinalCta.secondary.label}
            </Button>
          </>
        }
      />
    </>
  );
}
