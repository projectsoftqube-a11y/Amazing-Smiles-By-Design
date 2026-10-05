/**
 * JSON-LD builders. Everything is generated from the same content objects the page
 * renders, so visible text and structured data cannot drift apart.
 * Spec: docs/seo-content/01 Core/01 Home/Home/03 Developer Handoff.md, section 3.
 */

import { serviceHubs } from "@/content/services";
import {
  emergencySpecial,
  hours,
  membershipPlans,
  practice,
  contactLinks,
  SITE_URL,
} from "@/content/site";
import { absoluteUrl } from "./seo";

type Json = Record<string, unknown>;

export const ids = {
  dentist: `${SITE_URL}/#dentist`,
  website: `${SITE_URL}/#website`,
  person: absoluteUrl(`${practice.dentist.bioPath}#person`),
  webpage: (path: string) => `${absoluteUrl(path)}#webpage`,
  faq: (path: string) => `${absoluteUrl(path)}#faq`,
  breadcrumb: (path: string) => `${absoluteUrl(path)}#breadcrumb`,
};

const logoUrl = absoluteUrl("/images/amazing-smiles-by-design-logo.png");

function openingHours(): Json[] {
  // Group days that share the same opening and closing times.
  const groups = new Map<string, string[]>();
  for (const day of hours) {
    if (!day.opens || !day.closes) continue;
    const key = `${day.opens}-${day.closes}`;
    groups.set(key, [...(groups.get(key) ?? []), day.day]);
  }
  return [...groups.entries()].map(([key, days]) => {
    const [opens, closes] = key.split("-");
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: days.length === 1 ? days[0] : days,
      opens,
      closes,
    };
  });
}

export function dentistEntity({
  areaServed,
  employee = false,
  contactPoint = false,
}: {
  areaServed: string[];
  /** Link back to Dr. Dudhat (bio page Developer Handoff) */
  employee?: boolean;
  /** Appointments contact point (Contact page Developer Handoff) */
  contactPoint?: boolean;
}): Json {
  return {
    "@type": "Dentist",
    "@id": ids.dentist,
    name: practice.name,
    url: absoluteUrl("/"),
    telephone: practice.phone.schema,
    faxNumber: practice.fax.schema,
    address: {
      "@type": "PostalAddress",
      streetAddress: practice.address.street,
      addressLocality: practice.address.city,
      addressRegion: practice.address.region,
      postalCode: practice.address.postalCode,
      addressCountry: practice.address.country,
    },
    hasMap: contactLinks.map,
    openingHoursSpecification: openingHours(),
    logo: logoUrl,
    image: logoUrl,
    medicalSpecialty: "https://schema.org/Dentistry",
    ...(employee ? { employee: { "@id": ids.person } } : {}),
    ...(contactPoint
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            telephone: practice.phone.schema,
            contactType: "appointments",
          },
        }
      : {}),
    areaServed: areaServed.map((name) => ({ "@type": "Place", name: `${name}, ${practice.address.region}` })),
    makesOffer: [
      ...membershipPlans.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        price: String(plan.price),
        priceCurrency: "USD",
        description: plan.schemaDescription,
      })),
      {
        "@type": "Offer",
        name: emergencySpecial.name,
        price: String(emergencySpecial.price),
        priceCurrency: "USD",
        description: emergencySpecial.schemaDescription,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental services",
      itemListElement: serviceHubs.map((hub) => ({
        "@type": "OfferCatalog",
        name: hub.title,
        url: absoluteUrl(hub.path),
        itemListElement: hub.services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service.name, url: absoluteUrl(service.path) },
        })),
      })),
    },
  };
}

export function dentistPerson({
  description,
  image,
  birthPlace = false,
  knowsAbout = ["Dental implants", "Cosmetic dentistry"],
}: {
  description?: string;
  /** Absolute URL of the headshot */
  image?: string;
  birthPlace?: boolean;
  knowsAbout?: string[];
} = {}): Json {
  const { dentist } = practice;
  return {
    "@type": "Person",
    "@id": ids.person,
    name: dentist.name,
    honorificPrefix: "Dr.",
    honorificSuffix: dentist.degree,
    jobTitle: "Dentist",
    url: absoluteUrl(dentist.bioPath),
    ...(description ? { description } : {}),
    ...(image ? { image } : {}),
    worksFor: { "@id": ids.dentist },
    ...(birthPlace ? { birthPlace: { "@type": "Place", name: dentist.hometown } } : {}),
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: dentist.school },
      { "@type": "CollegeOrUniversity", name: dentist.undergrad },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: `${dentist.degreeName} (${dentist.degree})`,
      recognizedBy: { "@type": "CollegeOrUniversity", name: dentist.school },
    },
    knowsAbout,
  };
}

export function websiteEntity(): Json {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: absoluteUrl("/"),
    name: practice.name,
    publisher: { "@id": ids.dentist },
    inLanguage: "en-US",
  };
}

export function webPageEntity({
  path,
  name,
  description,
  type = "WebPage",
  breadcrumb = false,
  mainEntity = ids.dentist,
  about = ids.dentist,
}: {
  path: string;
  name: string;
  description: string;
  /** e.g. "AboutPage" for /about-us/ (its Developer Handoff) */
  type?: string;
  /** Link to this page's BreadcrumbList node */
  breadcrumb?: boolean;
  /** @id of the page's main entity: the dentist by default, the person on the bio page, none on some pages */
  mainEntity?: string | null;
  /** @id the page is about: the dentist by default; null to omit (ProfilePage) */
  about?: string | null;
}): Json {
  return {
    "@type": type,
    "@id": ids.webpage(path),
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-US",
    isPartOf: { "@id": ids.website },
    ...(about ? { about: { "@id": about } } : {}),
    ...(mainEntity ? { mainEntity: { "@id": mainEntity } } : {}),
    ...(breadcrumb ? { breadcrumb: { "@id": ids.breadcrumb(path) } } : {}),
  };
}

/** BreadcrumbList matching the visible breadcrumb on the page */
export function breadcrumbList(path: string, items: { name: string; path: string }[]): Json {
  return {
    "@type": "BreadcrumbList",
    "@id": ids.breadcrumb(path),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** FAQPage: only for questions that are visible on the page with identical text. */
export function faqPage({ path, items }: { path: string; items: { question: string; answer: string }[] }): Json {
  return {
    "@type": "FAQPage",
    "@id": ids.faq(path),
    isPartOf: { "@id": ids.webpage(path) },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export const graph = (...nodes: Json[]): Json => ({ "@context": "https://schema.org", "@graph": nodes });

/** Serialized for a <script type="application/ld+json">, with "<" escaped (Next.js JSON-LD guide). */
export const serializeJsonLd = (data: Json) => JSON.stringify(data).replace(/</g, "\\u003c");
