import { appointmentHref } from "@/content/navigation";

/**
 * About Us page copy, verbatim from
 * docs/seo-content/01 Core/02 About/About Us/02 Content.md (Final v1, 2 Oct 2026).
 * Heading levels and order follow that file and 03 Developer Handoff.md exactly:
 * one H1, then the H2s in the order below.
 *
 * Client rule (2 Oct 2026): titles, names and labels use "&" instead of "and";
 * paragraphs and meta tags keep the content file's wording.
 */

export const aboutMeta = {
  path: "/about-us/",
  title: "About Us | Amazing Smiles By Design, Bensalem PA",
  description:
    "About Amazing Smiles By Design in Bensalem, PA: Dr. Keyur Dudhat, our family-style approach to care and the technology we use. Call (215) 639-5331.",
};

export const aboutHero = {
  /** H1, split so the last phrase can carry the italic accent */
  title: { lead: "About Amazing Smiles By Design", accent: "in Bensalem" },
  intro:
    "Amazing Smiles By Design is a dental practice at 3101 Bristol Road, Suite 1, in Bensalem, Pennsylvania. Dr. Keyur Dudhat, DMD, provides general, restorative and cosmetic dentistry for the whole family, with a special focus on implant and cosmetic dentistry. Our goal is simple: gentle, personalized care that helps you feel confident and proud of your smile.",
  secondaryCta: { label: "Request an Appointment", href: appointmentHref },
};

export const aboutApproach = {
  title: "Our Approach to Care",
  intro:
    "At Amazing Smiles By Design in Bensalem, we treat you like family. Compassionate care and personal attention are at the heart of everything we do.",
  points: [
    {
      icon: "heart",
      lead: "Personalized care.",
      text: "Dr. Dudhat is committed to providing personalized care in a supportive environment, where you can feel comfortable and confident in your care.",
    },
    {
      icon: "family",
      lead: "Relaxed, stress-free visits.",
      text: "Our team takes pride in building lasting relationships and making sure every visit is relaxed and stress-free.",
    },
    {
      icon: "headphones",
      lead: "Comfort when you're nervous.",
      text: "You're welcome to bring headphones and music to listen to during treatment, and you can ask us about dental sedation options.",
    },
    {
      icon: "smile",
      lead: "Healthy, confident smiles.",
      text: "Dr. Dudhat is passionate about helping patients achieve healthy, confident smiles, from routine checkups to dental implants and veneers.",
    },
  ],
} as const;

export const aboutDoctor = {
  title: "Meet Dr. Keyur Dudhat, DMD",
  paragraphs: [
    "Dr. Keyur Dudhat was born and raised in Lansdale, Pennsylvania. He completed his undergraduate studies at Penn State University before earning his Doctor of Dental Medicine degree from Temple University.",
    "He provides comprehensive dental care with a special focus on implant and cosmetic dentistry. To stay at the forefront of modern dentistry, he regularly pursues advanced training in procedures such as dental implants and veneers.",
  ],
  /** Alt text specified in 03 Developer Handoff.md */
  portraitAlt: "Dr. Keyur Dudhat, DMD, dentist at Amazing Smiles By Design in Bensalem, PA",
  link: { label: "Read Dr. Dudhat's full bio", href: "/about-us/dr-keyur-dudhat/" },
};

export const aboutTeam = {
  title: "Our Bensalem Dental Team",
  body: "Our Bensalem dental team works alongside Dr. Dudhat to care for you at every visit. Here's how one patient described their visits:",
  /** Plain-text excerpt only: no Review markup (03 Developer Handoff.md) */
  quote: {
    text: "The dentist and staff are friendly, polite, and professional.",
    name: "Louis F.",
    date: "December 2025",
  },
  link: { label: "Read patient reviews", href: "/about-us/patient-reviews/" },
};

export const aboutTechnology = {
  title: "Technology We Use",
  intro:
    "Modern imaging systems allow dental professionals to see the structures of the mouth with incredible accuracy, which supports earlier detection of problems and more predictable outcomes. At our dental practice in Bensalem, PA, we use:",
  items: [
    { term: "Cone beam CT (CBCT) scans", detail: "3D images of your teeth, jaw bone and nerves." },
    { term: "Digital X-rays", detail: "clear images with reduced radiation exposure." },
    { term: "RayFace facial scanner", detail: "a 3D scan of your facial structures." },
  ],
  link: { label: "Learn more about our technology", href: "/patient-information/advanced-technology/" },
};

export const aboutCommunity = {
  title: "Giving Back to Our Community",
  body: "Dr. Dudhat is committed to serving the community. He volunteers with organizations like Missions of Mercy in Pennsylvania, providing dental care to underserved populations.",
};

export const aboutVisit = {
  title: "Visit Our Office in Bensalem",
  areasLine:
    "We proudly serve patients from Bensalem, Feasterville, Fairless Hills, Trevose, Hulmeville, Langhorne and Parkland.",
  newPatients:
    "Visiting us for the first time? See our new patient information below. We accept PPO dental insurance, and patients without insurance can join one of our membership plans.",
  cta: { label: "Request an Appointment", href: appointmentHref },
  links: [
    { label: "New patient information", href: "/patient-information/new-patients/", icon: "family" },
    { label: "Directions & contact details", href: "/contact-us/", icon: "map" },
    { label: "Membership plans & specials", href: "/specials/", icon: "tag" },
  ],
} as const;

/** Visible breadcrumb; matches the BreadcrumbList schema */
export const aboutBreadcrumb = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us/" },
];
