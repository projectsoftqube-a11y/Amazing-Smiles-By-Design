import { appointmentHref } from "@/content/navigation";
import { patientInfoCrumb } from "./patient-information";

/**
 * Patient Education copy, verbatim from
 * docs/seo-content/02 Patient Info/03 Resource/Patient Education/02 Content.md (Final v1).
 * The "Latest Articles" blog feed stays hidden until /blog/ has posts (Developer Handoff).
 */

export const educationMeta = {
  path: "/patient-information/patient-education/",
  title: "Patient Education & Dental Health Tips | Amazing Smiles",
  description:
    "Dental health tips and guides from Amazing Smiles By Design in Bensalem, PA: brushing and flossing, gum health, children's teeth and treatment options.",
};

export const educationBreadcrumb = patientInfoCrumb("Patient Education", educationMeta.path);

export const educationHero = {
  title: { lead: "Patient", accent: "Education" },
  intro:
    "Good dental health starts at home. These dental health tips and guides from Amazing Smiles By Design in Bensalem, PA explain common dental topics so you can look after your teeth and gums and understand your treatment options.",
  cta: { label: "Request an Appointment", href: appointmentHref },
};

type GuideLink = { label: string; href: string };

/**
 * One topic group per H2. A `links` entry is one list item: a single guide, or a
 * run of guides shown on one line as in the content file ("Dental implants, crowns,
 * bridges & dentures").
 */
export const educationTopics: { id: string; title: string; icon: string; items: GuideLink[][] }[] = [
  {
    id: "everyday-care-title",
    title: "Everyday Care",
    icon: "sparkle",
    items: [
      [{ label: "Oral hygiene tips: brushing, flossing & daily habits", href: "/general-dentistry/oral-hygiene/" }],
      [{ label: "Dental checkups, cleanings & X-rays", href: "/general-dentistry/dental-checkups-x-rays/" }],
      [{ label: "Dental sealants", href: "/general-dentistry/dental-sealants/" }],
    ],
  },
  {
    id: "gum-health-title",
    title: "Gum Health",
    icon: "shield",
    items: [
      [{ label: "Deep cleaning (scaling & root planing)", href: "/general-dentistry/scaling-and-root-planing/" }],
      [{ label: "Periodontal maintenance", href: "/general-dentistry/periodontal-maintenance/" }],
      [{ label: "Arestin gum treatment", href: "/general-dentistry/arestin/" }],
    ],
  },
  {
    id: "childrens-teeth-title",
    title: "Children's Teeth",
    icon: "family",
    items: [[{ label: "Children's dentistry", href: "/general-dentistry/child-dentistry/" }]],
  },
  {
    id: "problems-title",
    title: "Problems & Emergencies",
    icon: "alert",
    items: [
      [{ label: "Emergency dentistry", href: "/general-dentistry/emergency-dentistry/" }],
      [{ label: "Tooth extraction", href: "/general-dentistry/tooth-extraction/" }],
      [{ label: "Oral cancer screening", href: "/general-dentistry/oral-cancer-screening/" }],
    ],
  },
  {
    id: "treatment-title",
    title: "Treatment Options",
    icon: "tooth",
    items: [
      [
        { label: "Dental implants", href: "/restorative-dentistry/dental-implants/" },
        { label: "crowns", href: "/restorative-dentistry/dental-crowns/" },
        { label: "bridges", href: "/restorative-dentistry/dental-bridges/" },
        { label: "dentures", href: "/restorative-dentistry/dentures/" },
      ],
      [
        { label: "Root canal treatment", href: "/restorative-dentistry/non-surgical-root-canal/" },
        { label: "fillings", href: "/restorative-dentistry/dental-fillings/" },
      ],
      [
        { label: "Porcelain veneers", href: "/cosmetic-dentistry/porcelain-veneers/" },
        { label: "teeth whitening", href: "/cosmetic-dentistry/teeth-whitening/" },
        { label: "clear aligners", href: "/cosmetic-dentistry/clear-aligners/" },
        { label: "night guards", href: "/cosmetic-dentistry/night-guards/" },
      ],
    ],
  },
  {
    id: "paying-care-title",
    title: "Paying for Care",
    icon: "wallet",
    items: [
      [{ label: "Insurance & payment options", href: "/patient-information/insurance-payment-options/" }],
      [{ label: "Financing options", href: "/patient-information/financing-options/" }],
      [{ label: "Membership plans", href: "/specials/" }],
    ],
  },
];

export const educationLatest = {
  title: "Latest Articles",
  link: { label: "Visit our blog", href: "/blog/" },
};

export const educationFinalCta = {
  title: { lead: "Have a Question About", accent: "Your Teeth?" },
  body: "Call or text (215) 639-5331, or request an appointment online. Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020.",
};
