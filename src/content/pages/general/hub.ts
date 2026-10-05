import { appointmentHref } from "@/content/navigation";
import type { ServiceExtras, ServiceSection } from "@/content/service-page";

/**
 * General Dentistry hub copy, verbatim from
 * docs/seo-content/03 General Dentistry/00 Hub/General Dentistry Hub/02 Content.md (Final v1).
 * Headings and link labels use "&" (client rule); paragraphs keep "and".
 */

export const generalMeta = {
  path: "/general-dentistry/",
  title: "Family & General Dentist in Bensalem, PA | Amazing Smiles",
  description:
    "Checkups, cleanings, children's dentistry, gum care, extractions and emergency care for the whole family at Amazing Smiles By Design in Bensalem, PA.",
};

export const generalBreadcrumb = [
  { name: "Home", path: "/" },
  { name: "General Dentistry", path: "/general-dentistry/" },
];

/** Home › General Dentistry › {name} */
export const generalCrumb = (name: string, path: string) => [...generalBreadcrumb, { name, path }];

export const generalHero = {
  title: { lead: "General & Family Dentistry", accent: "in Bensalem" },
  intro:
    "General dentistry is the everyday care that keeps teeth and gums healthy: checkups, cleanings, X-rays, gum treatment, children's care, extractions and help in a dental emergency. At Amazing Smiles By Design, Dr. Keyur Dudhat and our team provide general and family dentistry for adults and children at 3101 Bristol Road, Suite 1, Bensalem, PA 19020.",
  cta: { label: "Request an Appointment", href: appointmentHref },
};

export type ClusterLink = { label: string; text?: string; href: string; icon: string };

/** The cluster blocks (Developer Handoff: crawlable links to all 10 child pages) */
export const generalClusters: { id: string; eyebrow: string; title: string; intro: string; links: ClusterLink[] }[] = [
  {
    id: "preventive-title",
    eyebrow: "Preventive care",
    title: "Preventive Care: Checkups, Cleanings & X-Rays",
    intro:
      "Preventive visits typically happen every six months. They let us find problems early, when treatment is usually simpler, more comfortable and more affordable.",
    links: [
      {
        label: "Dental checkups, cleanings & X-rays",
        text: "A comprehensive exam, a professional cleaning and digital X-rays when needed.",
        href: "/general-dentistry/dental-checkups-x-rays/",
        icon: "sparkle",
      },
      {
        label: "Oral cancer screening",
        text: "A quick, painless check included in routine exams.",
        href: "/general-dentistry/oral-cancer-screening/",
        icon: "search",
      },
      {
        label: "Oral hygiene",
        text: "How to brush, floss and choose products between visits.",
        href: "/general-dentistry/oral-hygiene/",
        icon: "smile",
      },
    ],
  },
  {
    id: "gum-health-title",
    eyebrow: "Gum health",
    title: "Gum Health: Deep Cleaning, Periodontal Maintenance & Arestin",
    intro: "Gum disease often develops quietly below the gum line. We treat and manage it with:",
    links: [
      {
        label: "Scaling & root planing (deep cleaning)",
        text: "Non-surgical treatment that removes plaque, tartar and bacteria below the gum line.",
        href: "/general-dentistry/scaling-and-root-planing/",
        icon: "tooth",
      },
      {
        label: "Periodontal maintenance",
        text: "Ongoing gum care, often every three to four months, after gum disease has been treated.",
        href: "/general-dentistry/periodontal-maintenance/",
        icon: "calendar",
      },
      {
        label: "Arestin",
        text: "An antibiotic placed directly into infected gum pockets after a deep cleaning.",
        href: "/general-dentistry/arestin/",
        icon: "shield",
      },
    ],
  },
  {
    id: "children-title",
    eyebrow: "Children's care",
    title: "Children's Dentistry & Sealants",
    intro:
      "Your child's first regular dental visit should take place just after their first birthday. We focus on prevention, education and positive visits.",
    links: [
      { label: "Children's dentistry", href: "/general-dentistry/child-dentistry/", icon: "family" },
      {
        label: "Dental sealants",
        text: "Protective coatings for cavity-prone back teeth.",
        href: "/general-dentistry/dental-sealants/",
        icon: "shield",
      },
    ],
  },
  {
    id: "extraction-title",
    eyebrow: "Urgent care",
    title: "Tooth Extraction",
    intro:
      "When a tooth can't be saved, we remove it carefully under local anesthesia and discuss options for replacing it.",
    links: [{ label: "Tooth extraction", href: "/general-dentistry/tooth-extraction/", icon: "tooth" }],
  },
  {
    id: "emergency-care-title",
    eyebrow: "Urgent care",
    title: "Emergency Dental Care",
    intro:
      "Severe tooth pain, swelling, a broken or knocked-out tooth, or an infection? Call or text (215) 639-5331. When you contact us, our team will arrange a same-day dental appointment whenever possible.",
    links: [{ label: "Emergency dentistry", href: "/general-dentistry/emergency-dentistry/", icon: "alert" }],
  },
];

/** "Family Dentistry That Fits Your Budget", in the treatment-section format (rendered as cards) */
export const generalBudget: ServiceSection = {
  id: "budget-title",
  title: "Family Dentistry That Fits Your Budget",
  blocks: [
    {
      kind: "ul",
      items: [
        "**Insurance:** your PPO insurance is accepted here. [Insurance & payment](/patient-information/insurance-payment-options/)",
        "**No insurance:** the Regular Membership Plan ($269 a year) covers 2 cleanings, 2 exams, routine X-rays and an emergency exam. The Child plan ($212 a year) adds 2 fluoride treatments for children 13 and younger. [Membership plans](/specials/)",
      ],
    },
  ],
};

/** Hero side card for the hub (facts from the hub copy) */
export const generalHeroCard: ServiceExtras = {
  icon: "family",
  eyebrow: "General & family dentistry",
  label: "For the whole family",
  facts: [
    { icon: "calendar", title: "Every six months", text: "Preventive visits find problems early" },
    { icon: "family", title: "From age one", text: "First visit just after your child's first birthday" },
    { icon: "alert", title: "Same-day emergency care", text: "Whenever possible" },
  ],
  related: [
    { label: "New patients", href: "/patient-information/new-patients/" },
    { label: "Membership plans", href: "/specials/" },
  ],
};

export const generalFaqs = {
  title: "General Dentistry FAQs",
  items: [
    {
      question: "What is general dentistry?",
      answer:
        "General dentistry is the everyday dental care that keeps teeth and gums healthy, including checkups, cleanings, X-rays, fillings, gum treatment, extractions and emergency care. A general dentist is usually your first stop for any dental concern.",
    },
    {
      question: "Is Amazing Smiles By Design a family dentist in Bensalem?",
      answer:
        "Yes. Amazing Smiles By Design in Bensalem, PA provides general and family dentistry for adults and children, including children's dentistry, from its office at 3101 Bristol Road, Suite 1.",
    },
    {
      question: "Is the practice accepting new patients?",
      answer: "Yes. New patients are welcome. Call or text (215) 639-5331, or request an appointment online.",
    },
    {
      question: "How often should my family see the dentist?",
      answer:
        "Preventive dental visits typically occur every six months. Patients who have been treated for gum disease often need periodontal maintenance visits every three to four months.",
    },
  ],
};

export const generalFinalCta = {
  title: { lead: "Book Your Family's", accent: "Next Visit" },
  body: "Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020 · (215) 639-5331",
  links: [{ label: "New patients", href: "/patient-information/new-patients/" }],
};

/** ItemList for the CollectionPage (3a): the 10 services, names as in the handoff */
export const generalServiceList = [
  { name: "Dental Checkups & X-Rays", path: "/general-dentistry/dental-checkups-x-rays/" },
  { name: "Oral Cancer Screening", path: "/general-dentistry/oral-cancer-screening/" },
  { name: "Oral Hygiene", path: "/general-dentistry/oral-hygiene/" },
  { name: "Scaling & Root Planing", path: "/general-dentistry/scaling-and-root-planing/" },
  { name: "Periodontal Maintenance", path: "/general-dentistry/periodontal-maintenance/" },
  { name: "Arestin", path: "/general-dentistry/arestin/" },
  { name: "Children's Dentistry", path: "/general-dentistry/child-dentistry/" },
  { name: "Dental Sealants", path: "/general-dentistry/dental-sealants/" },
  { name: "Tooth Extraction", path: "/general-dentistry/tooth-extraction/" },
  { name: "Emergency Dentistry", path: "/general-dentistry/emergency-dentistry/" },
];
