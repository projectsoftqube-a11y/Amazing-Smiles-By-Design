import { appointmentHref } from "@/content/navigation";

/**
 * Dr. Keyur Dudhat bio page copy, verbatim from
 * docs/seo-content/01 Core/03 Doctor Bio/Dr. Keyur Dudhat/02 Content.md (Final v1).
 * Headings keep the content file's levels and order. Client rule (2 Oct 2026):
 * headings and labels use "&" instead of "and"; paragraphs and metas keep "and".
 */

export const doctorMeta = {
  path: "/about-us/dr-keyur-dudhat/",
  title: "Dr. Keyur Dudhat, DMD | Amazing Smiles By Design",
  description:
    "Meet Dr. Keyur Dudhat, DMD, of Amazing Smiles By Design in Bensalem, PA: a Temple University graduate focused on implant and cosmetic dentistry.",
};

export const doctorBreadcrumb = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us/" },
  { name: "Dr. Keyur Dudhat", path: "/about-us/dr-keyur-dudhat/" },
];

export const doctorHero = {
  /** H1 "Dr. Keyur Dudhat, DMD", split so "DMD" carries the italic accent */
  title: { lead: "Dr. Keyur Dudhat,", accent: "DMD" },
  /** Styled paragraph under the H1, not a heading (Developer Handoff) */
  subtitle: "Dentist at Amazing Smiles By Design, Bensalem, Pennsylvania",
  intro:
    "Dr. Keyur Dudhat, DMD, is a dentist at Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020. He earned his Doctor of Dental Medicine degree from Temple University and provides comprehensive dental care with a special focus on implant and cosmetic dentistry.",
  primaryCta: { label: "Book With Dr. Dudhat", href: appointmentHref },
  /** Alt text from 03 Developer Handoff.md */
  portraitAlt: "Dr. Keyur Dudhat, DMD, dentist at Amazing Smiles By Design in Bensalem, PA",
};

export const doctorGlance = {
  title: "Dr. Dudhat at a Glance",
  facts: [
    { label: "Degree", value: "Doctor of Dental Medicine (DMD), Temple University", icon: "cap" },
    { label: "Undergraduate", value: "Penn State University", icon: "book" },
    { label: "Hometown", value: "Born and raised in Lansdale, Pennsylvania", icon: "pin" },
    {
      label: "Clinical focus",
      value: "Comprehensive dental care, with a special focus on implant and cosmetic dentistry",
      icon: "tooth",
    },
    { label: "Ongoing training", value: "Advanced training in procedures such as dental implants and veneers", icon: "sparkle" },
    { label: "Community service", value: "Volunteers with organizations like Missions of Mercy in Pennsylvania", icon: "heart" },
    { label: "Practice", value: "Amazing Smiles By Design, Bensalem, PA", icon: "smile" },
  ],
} as const;

export const doctorEducation = {
  title: "Education & Background",
  body: "Keyur Dudhat was born and raised in Lansdale, Pennsylvania. He completed his undergraduate studies at Penn State University before earning his Doctor of Dental Medicine degree from Temple University. Today he cares for patients at Amazing Smiles By Design in Bensalem.",
  /** Decorative timeline summarising the paragraph above */
  steps: [
    { label: "Born & raised", value: "Lansdale, Pennsylvania", icon: "pin" },
    { label: "Undergraduate", value: "Penn State University", icon: "book" },
    { label: "Doctor of Dental Medicine", value: "Temple University", icon: "cap" },
    { label: "Today", value: "Amazing Smiles By Design, Bensalem", icon: "smile" },
  ],
} as const;

export const doctorFocus = {
  title: "Clinical Focus: Implant & Cosmetic Dentistry",
  intro:
    "Dr. Dudhat is passionate about helping patients achieve healthy, confident smiles. He provides comprehensive dental care with a special focus on two areas:",
  implants: {
    name: "Dental implants",
    text: "a foundation for replacement teeth that look, feel and function like natural teeth.",
    link: { label: "Learn about dental implants", href: "/restorative-dentistry/dental-implants/" },
  },
  cosmetic: {
    name: "Cosmetic dentistry",
    /** "improving the look of your smile with treatments such as {veneers}, {whitening} and {bonding}." */
    lead: "improving the look of your smile with treatments such as",
    treatments: [
      { label: "porcelain veneers", href: "/cosmetic-dentistry/porcelain-veneers/" },
      { label: "teeth whitening", href: "/cosmetic-dentistry/teeth-whitening/" },
      { label: "dental bonding", href: "/cosmetic-dentistry/dental-bonding/" },
    ],
    link: { label: "All cosmetic dentistry", href: "/cosmetic-dentistry/" },
  },
  /** "He also provides everyday {general and family dentistry} and {restorative care} such as crowns, fillings and root canals." */
  also: {
    before: "He also provides everyday",
    general: { label: "general and family dentistry", href: "/general-dentistry/" },
    middle: "and",
    restorative: { label: "restorative care", href: "/restorative-dentistry/" },
    after: "such as crowns, fillings and root canals.",
  },
};

export const doctorTraining = {
  title: "Committed to Ongoing Training",
  paragraphs: [
    "Dedicated to staying at the forefront of modern dentistry, Dr. Dudhat regularly pursues advanced training in procedures such as dental implants and veneers.",
    "His care is supported by the diagnostic technology in our office: cone beam CT (CBCT) scans, digital X-rays and the RayFace facial scanner, which let the dental team view teeth, bone, nerves and facial structures in remarkable detail.",
  ],
  link: { label: "About our technology", href: "/patient-information/advanced-technology/" },
  /** Decorative tiles for the three systems named in the second paragraph */
  systems: [
    { name: "Cone beam CT (CBCT)", detail: "3D images of teeth, jaw bone and nerves", icon: "scan" },
    { name: "Digital X-rays", detail: "Clear images, reduced radiation", icon: "xray" },
    { name: "RayFace facial scanner", detail: "A 3D scan of facial structures", icon: "face" },
  ],
} as const;

export const doctorGivingBack = {
  title: "Giving Back",
  body: "Dr. Dudhat is committed to serving the community. He volunteers with organizations like Missions of Mercy in Pennsylvania, providing dental care to underserved populations.",
};

export const doctorOutside = {
  title: "Outside the Office",
  body: "In his free time, Dr. Dudhat enjoys traveling, hiking, scuba diving and golfing.",
  /** Decorative chips summarising the sentence above */
  hobbies: ["Traveling", "Hiking", "Scuba diving", "Golfing"],
};

export const doctorFaqs = {
  title: "Questions About Dr. Dudhat",
  items: [
    {
      question: "Where does Dr. Keyur Dudhat practice?",
      answer:
        "Dr. Keyur Dudhat practices at Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020. You can call or text the office at (215) 639-5331.",
    },
    {
      question: "Where did Dr. Dudhat go to dental school?",
      answer:
        "Dr. Dudhat earned his Doctor of Dental Medicine (DMD) degree from Temple University. He completed his undergraduate studies at Penn State University.",
    },
    {
      question: "What does Dr. Dudhat focus on?",
      answer:
        "Dr. Dudhat provides comprehensive dental care with a special focus on implant and cosmetic dentistry, and he regularly pursues advanced training in procedures such as dental implants and veneers.",
    },
    {
      question: "How do I book an appointment with Dr. Dudhat?",
      answer:
        "Call or text (215) 639-5331, or request an appointment online. The office is open Monday 8 am to 6 pm, Tuesday 8 am to 5 pm, Wednesday 8 am to 6 pm and Thursday 8 am to 2 pm.",
    },
  ],
};

export const doctorFinalCta = {
  title: { lead: "Book a Visit With Dr. Dudhat", accent: "in Bensalem" },
  body: "Whether you're due for a checkup or considering implants or veneers, call or text (215) 639-5331, or request an appointment online.",
  cta: { label: "Request an Appointment", href: appointmentHref },
  /** Client request (5 Oct 2026): shown as a second button; "Back to About Us" removed */
  secondary: { label: "New patient information", href: "/patient-information/new-patients/" },
};
