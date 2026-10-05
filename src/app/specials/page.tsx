import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { HeroCard, PageHero } from "@/components/sections/PageHero";
import {
  Compare,
  Coverage,
  HowItWorks,
  MEMBERSHIP_TRACK,
  Plans,
  SaveAndEmergency,
} from "@/components/sections/specials/SpecialsSections";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { images } from "@/content/images";
import {
  specialsBreadcrumb,
  specialsFaqs,
  specialsFinalCta,
  specialsHero,
  specialsMeta,
  specialsOfferDescriptions,
} from "@/content/pages/specials";
import { contactLinks, emergencySpecial, membershipPlans, practice } from "@/content/site";
import { breadcrumbList, faqPage, graph, ids, webPageEntity, websiteEntity } from "@/lib/schema";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(specialsMeta);

/**
 * WebPage + BreadcrumbList + Dentist with plan Offers (03 Developer Handoff.md, 3a).
 * Prices come from site.ts, the same source the page and the homepage schema use,
 * so a price change updates all three together.
 */
const offers = [...membershipPlans, emergencySpecial].map((offer) => ({
  "@type": "Offer",
  name: offer.name,
  price: String(offer.price),
  priceCurrency: "USD",
  description: specialsOfferDescriptions[offer.name],
  url: absoluteUrl(specialsMeta.path),
  offeredBy: { "@id": ids.dentist },
}));

const coreSchema = graph(
  webPageEntity({
    path: specialsMeta.path,
    name: specialsMeta.title,
    description: specialsMeta.description,
    breadcrumb: true,
    mainEntity: null,
  }),
  breadcrumbList(specialsMeta.path, specialsBreadcrumb),
  {
    "@type": "Dentist",
    "@id": ids.dentist,
    name: practice.name,
    url: absoluteUrl("/"),
    telephone: practice.phone.schema,
    address: {
      "@type": "PostalAddress",
      streetAddress: practice.address.street,
      addressLocality: practice.address.city,
      addressRegion: practice.address.region,
      postalCode: practice.address.postalCode,
      addressCountry: practice.address.country,
    },
    makesOffer: offers,
  },
  websiteEntity(),
);

const faqSchema = graph(faqPage({ path: specialsMeta.path, items: specialsFaqs.items }));

const callButton = (variant: "primary" | "inverse") => (
  <Button href={contactLinks.call} variant={variant} icon="phone" track={MEMBERSHIP_TRACK}>
    Call or Text {practice.phone.display}
  </Button>
);

export default function SpecialsPage() {
  return (
    <>
      <JsonLd data={coreSchema} />
      <JsonLd data={faqSchema} />

      <PageHero
        id="specials-page-title"
        breadcrumb={specialsBreadcrumb}
        eyebrow={`Specials & membership plans · ${practice.address.city}`}
        title={specialsHero.title}
        subtitle={specialsHero.subtitle}
        intro={specialsHero.intro}
        image={images.specialsHero}
        actions={
          <>
            {callButton("primary")}
            <Button href={specialsHero.cta.href} variant="secondary" icon="calendar" track="appointment_click">
              {specialsHero.cta.label}
            </Button>
          </>
        }
        cards={
          <>
            <HeroCard
              position="top"
              icon={<Icon name="alert" size={20} />}
              title={`$${emergencySpecial.price} emergency exam`}
              text="New patients only"
            />
            <HeroCard
              position="bottom"
              icon={<Icon name="tag" size={20} />}
              title="Members save 20%"
              text="Excluding implants & Invisalign"
            />
          </>
        }
      />

      <Compare />
      <Plans />
      <SaveAndEmergency />
      <HowItWorks />
      <Coverage />
      <Faq id="specials-faq-title" title={specialsFaqs.title} items={specialsFaqs.items} />
      <FinalCta
        id="specials-book-title"
        title={specialsFinalCta.title}
        body={specialsFinalCta.body}
        actions={
          <>
            {callButton("inverse")}
            <Button href={specialsHero.cta.href} variant="inverse-outline" icon="calendar" track="appointment_click">
              {specialsHero.cta.label}
            </Button>
          </>
        }
      />
    </>
  );
}
