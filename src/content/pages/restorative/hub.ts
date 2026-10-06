import { appointmentHref } from "@/content/navigation";
import type { ServiceExtras, ServiceSection } from "@/content/service-page";

/**
 * Restorative Dentistry hub copy, verbatim from
 * docs/seo-content/04 Restorative Dentistry/00 Hub/Restorative Dentistry Hub/02 Content.md (Final v1).
 * Headings and link labels use "&" (client rule); paragraphs keep "and".
 */

export const restorativeMeta = {
  path: "/restorative-dentistry/",
  title: "Restorative Dentist Bensalem, PA | Implants, Crowns & More",
  description:
    "Dental implants, crowns, bridges, fillings, inlays and onlays, root canals and dentures to repair and replace teeth in Bensalem, PA. (215) 639-5331.",
};

export const restorativeBreadcrumb = [
  { name: "Home", path: "/" },
  { name: "Restorative Dentistry", path: "/restorative-dentistry/" },
];

/** Home › Restorative Dentistry › {name} */
export const restorativeCrumb = (name: string, path: string) => [...restorativeBreadcrumb, { name, path }];

export const restorativeHero = {
  title: { lead: "Restorative Dentistry", accent: "in Bensalem" },
  intro:
    "Restorative dentistry repairs damaged teeth and replaces missing ones so you can chew, speak and smile comfortably again. At Amazing Smiles By Design, your restorative dentist in Bensalem, Dr. Keyur Dudhat, provides dental implants, crowns, bridges, fillings, inlays and onlays, non-surgical root canals and dentures at 3101 Bristol Road, Suite 1, Bensalem, PA 19020.",
  cta: { label: "Request a Consultation", href: appointmentHref },
};

export type PathLink = { label: string; text?: string; href: string; icon: string };

/** The three cluster blocks (Developer Handoff: crawlable links to all 7 child pages) */
export const restorativePaths: { id: string; eyebrow: string; title: string; intro?: string; links: PathLink[] }[] = [
  {
    id: "repairing-title",
    eyebrow: "Repair",
    title: "Repairing Damaged Teeth",
    intro: "When a tooth is decayed, cracked or worn, the right repair depends on how much healthy tooth is left:",
    links: [
      {
        label: "Dental fillings",
        text: "Tooth-colored composite fillings for cavities and small chips or cracks.",
        href: "/restorative-dentistry/dental-fillings/",
        icon: "sparkle",
      },
      {
        label: "Inlays & onlays",
        text: "Custom restorations for teeth with too much damage for a filling but not enough to need a full crown.",
        href: "/restorative-dentistry/inlays-onlays/",
        icon: "tooth",
      },
      {
        label: "Dental crowns",
        text: "A custom cap that covers and protects a weak, cracked or heavily filled tooth.",
        href: "/restorative-dentistry/dental-crowns/",
        icon: "shield",
      },
    ],
  },
  {
    id: "saving-title",
    eyebrow: "Save",
    title: "Saving an Infected Tooth",
    intro:
      "When the soft tissue inside a tooth becomes infected or inflamed, [non-surgical root canal therapy](/restorative-dentistry/non-surgical-root-canal/) removes the infection so you can keep your natural tooth instead of having it extracted. Many teeth then need a crown for strength.",
    links: [{ label: "Non-surgical root canal", href: "/restorative-dentistry/non-surgical-root-canal/", icon: "heart" }],
  },
  {
    id: "replacing-title",
    eyebrow: "Replace",
    title: "Replacing Missing Teeth",
    links: [
      {
        label: "Dental implants",
        text: "A titanium or zirconia post that replaces the root of a missing tooth and supports a custom crown, bridge or full-arch restoration.",
        href: "/restorative-dentistry/dental-implants/",
        icon: "tooth",
      },
      {
        label: "Dental bridges",
        text: "A fixed replacement tooth anchored to the healthy teeth on either side of the gap.",
        href: "/restorative-dentistry/dental-bridges/",
        icon: "plus",
      },
      {
        label: "Dentures",
        text: "Full, partial, immediate and implant-supported dentures.",
        href: "/restorative-dentistry/dentures/",
        icon: "smile",
      },
    ],
  },
];

/** "Which Restorative Treatment Is Right for You?", "Planned With Advanced Imaging", "Paying for Restorative Care" */
export const restorativeSections: ServiceSection[] = [
  {
    id: "which-treatment-title",
    title: "Which Restorative Treatment Is Right for You?",
    blocks: [
      {
        kind: "table",
        head: ["Your situation", "Options to discuss"],
        rows: [
          ["A small cavity, chip or crack", "Filling"],
          ["Moderate damage to the chewing surface", "Inlay or onlay"],
          ["A weak, cracked or root-canal-treated tooth", "Crown"],
          ["Severe tooth pain or an infected tooth", "Root canal, then usually a crown"],
          ["One missing tooth", "Implant or bridge"],
          ["Several or all teeth missing", "Partial, full or implant-supported dentures; full-arch implants"],
        ],
      },
      {
        kind: "p",
        text: "The dentist will examine your teeth, take digital X-rays or a CBCT scan when needed, and explain the options that fit your mouth, goals and budget.",
      },
    ],
  },
  {
    id: "imaging-title",
    title: "Planned With Advanced Imaging",
    blocks: [
      {
        kind: "p",
        text: "Amazing Smiles By Design uses Cone Beam CT (CBCT) scans, digital X-rays and the RayFace facial scanner to view teeth, bone, nerves and facial structures in detail. This helps with earlier detection of problems and more predictable treatment. [Advanced technology](/patient-information/advanced-technology/)",
      },
    ],
  },
  {
    id: "paying-restorative-title",
    title: "Paying for Restorative Care",
    blocks: [
      {
        kind: "ul",
        items: [
          "**Insurance:** your PPO insurance is accepted here. [Insurance & payment](/patient-information/insurance-payment-options/)",
          "**No insurance:** membership plan members get 20% off all other dental procedures, excluding dental implants and Invisalign. [Membership plans](/specials/)",
          "**Financing:** CareCredit and Cherry. [Financing options](/patient-information/financing-options/)",
        ],
      },
    ],
  },
];

export const restorativeHeroCard: ServiceExtras = {
  icon: "tooth",
  eyebrow: "Restorative dentistry",
  label: "Repair · Save · Replace",
  facts: [
    { icon: "shield", title: "Fillings to crowns", text: "Repairs matched to how much healthy tooth is left" },
    { icon: "heart", title: "Keep your natural tooth", text: "Non-surgical root canal therapy" },
    { icon: "plus", title: "Implants, bridges & dentures", text: "Options for one or many missing teeth" },
  ],
  related: [
    { label: "Meet Dr. Dudhat", href: "/about-us/dr-keyur-dudhat/" },
    { label: "Advanced technology", href: "/patient-information/advanced-technology/" },
  ],
};

export const restorativeFaqs = {
  title: "Restorative Dentistry FAQs",
  items: [
    {
      question: "What is restorative dentistry?",
      answer:
        "Restorative dentistry is the branch of dentistry that repairs damaged teeth and replaces missing teeth. It includes fillings, inlays and onlays, crowns, root canals, bridges, dental implants and dentures.",
    },
    {
      question: "Who is the restorative dentist at Amazing Smiles By Design?",
      answer:
        "Dr. Keyur Dudhat, DMD, provides restorative dentistry at Amazing Smiles By Design in Bensalem, PA. His focus is implant and cosmetic dentistry.",
    },
    {
      question: "What are my options for replacing a missing tooth?",
      answer:
        "The main options are a dental implant, a dental bridge or a partial denture. The dentist will recommend the best option after examining your teeth, gums and jawbone.",
    },
    {
      question: "Does insurance cover restorative dentistry?",
      answer:
        "Coverage depends on your dental plan. Your PPO insurance is accepted at Amazing Smiles By Design, and the office bills your insurance and tracks your claims. Payment is due at the time of service.",
    },
  ],
};

export const restorativeFinalCta = {
  title: { lead: "Book a Restorative Consultation", accent: "in Bensalem" },
  body: "Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020 · Call or text (215) 639-5331",
  links: [{ label: "Meet Dr. Keyur Dudhat", href: "/about-us/dr-keyur-dudhat/" }],
};

/** ItemList for the CollectionPage (3a), names as in the handoff */
export const restorativeServiceList = [
  { name: "Dental Fillings", path: "/restorative-dentistry/dental-fillings/" },
  { name: "Inlays & Onlays", path: "/restorative-dentistry/inlays-onlays/" },
  { name: "Dental Crowns", path: "/restorative-dentistry/dental-crowns/" },
  { name: "Non-Surgical Root Canal", path: "/restorative-dentistry/non-surgical-root-canal/" },
  { name: "Dental Implants", path: "/restorative-dentistry/dental-implants/" },
  { name: "Dental Bridges", path: "/restorative-dentistry/dental-bridges/" },
  { name: "Dentures", path: "/restorative-dentistry/dentures/" },
];
