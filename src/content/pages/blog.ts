import { appointmentHref } from "@/content/navigation";

/**
 * Blog hub copy, verbatim from docs/seo-content/08 Blog/00 Blog Hub/Blog hub/02 Content.md (Final v1).
 * Headings and link labels use "&" (client rule); paragraphs keep "and".
 * Handoff: noindex, follow (and out of sitemap.xml) until the first 3 posts are published;
 * the post feed stays hidden until the first post exists.
 */

export const blogMeta = {
  path: "/blog/",
  title: "Dental Tips & Patient Guides | Amazing Smiles By Design Blog",
  description:
    "Patient guides from Amazing Smiles By Design in Bensalem, PA, coming soon. Learn about prevention, gum health, implants, cosmetic care and costs.",
  noindex: true,
};

export const blogBreadcrumb = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog/" },
];

export const blogHero = {
  title: { lead: "Dental Tips &", accent: "Patient Guides" },
  intro:
    "Patient guides from Amazing Smiles By Design in Bensalem, PA are coming soon. In the meantime, learn about our treatments below, or book a visit if you have a question.",
  cta: { label: "Request an Appointment", href: appointmentHref },
};

export type BlogPost = {
  title: string;
  /** ISO date, shown as the dated byline */
  date: string;
  category: string;
  /** One or two lines */
  excerpt: string;
  href: string;
};

/** Newest first. The feed shows the 9 most recent and stays hidden while this is empty. */
export const blogPosts: BlogPost[] = [];

export type BlogTopic = { id: string; title: string; text: string; links: { label: string; href: string }[] };

export const blogTopics = {
  id: "browse-by-topic-title",
  title: "Browse by Topic",
  items: [
    {
      id: "prevention-and-everyday-care-title",
      title: "Prevention & Everyday Care",
      text: "Learn about cleanings, checkups, brushing and flossing, and caring for children's teeth.",
      links: [
        { label: "Dental checkups", href: "/general-dentistry/dental-checkups-x-rays/" },
        { label: "Oral hygiene", href: "/general-dentistry/oral-hygiene/" },
        { label: "Children's dentistry", href: "/general-dentistry/child-dentistry/" },
      ],
    },
    {
      id: "gum-health-title",
      title: "Gum Health",
      text: "Learn about the signs of gum disease, deep cleanings and keeping gums healthy.",
      links: [
        { label: "Deep cleaning", href: "/general-dentistry/scaling-and-root-planing/" },
        { label: "Periodontal maintenance", href: "/general-dentistry/periodontal-maintenance/" },
      ],
    },
    {
      id: "repairing-and-replacing-teeth-title",
      title: "Repairing & Replacing Teeth",
      text: "Learn about fillings, crowns, root canals, implants, bridges and dentures.",
      links: [
        { label: "Restorative dentistry", href: "/restorative-dentistry/" },
        { label: "Dental implants", href: "/restorative-dentistry/dental-implants/" },
      ],
    },
    {
      id: "cosmetic-dentistry-title",
      title: "Cosmetic Dentistry",
      text: "Learn about veneers, whitening, bonding and Invisalign.",
      links: [{ label: "Cosmetic dentistry", href: "/cosmetic-dentistry/" }],
    },
    {
      id: "dental-emergencies-title",
      title: "Dental Emergencies",
      text: "Learn what counts as a dental emergency and how to get seen.",
      links: [{ label: "Emergency dentistry", href: "/general-dentistry/emergency-dentistry/" }],
    },
    {
      id: "costs-insurance-and-plans-title",
      title: "Costs, Insurance & Plans",
      text: "Learn about PPO insurance, membership plans and financing.",
      links: [
        { label: "Insurance and payment", href: "/patient-information/insurance-payment-options/" },
        { label: "Membership plans", href: "/specials/" },
        { label: "Financing", href: "/patient-information/financing-options/" },
      ],
    },
  ] satisfies BlogTopic[],
};

export const blogResources = {
  id: "more-patient-resources-title",
  title: "More Patient Resources",
  links: [
    { label: "Patient education", href: "/patient-information/patient-education/" },
    { label: "New patients", href: "/patient-information/new-patients/" },
  ],
};

export const blogFinalCta = {
  title: { lead: "Have a Question", accent: "We Haven't Answered?" },
  body: "Call or text (215) 639-5331. Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020.",
  button: { label: "Request an Appointment", href: appointmentHref },
};
