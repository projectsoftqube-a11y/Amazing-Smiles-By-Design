import { appointmentHref } from "@/content/navigation";

/**
 * Patient Reviews page copy, verbatim from
 * docs/seo-content/01 Core/04 Proof/Patient Reviews/02 Content.md (Final v1).
 * Reviews are word for word, including spelling ("Xrays", "appt"). Each review is
 * shown once, in full; no star ratings and no Review schema (Developer Handoff).
 */

export const reviewsMeta = {
  path: "/about-us/patient-reviews/",
  title: "Patient Reviews | Amazing Smiles By Design, Bensalem PA",
  description:
    "Read what patients say about Amazing Smiles By Design in Bensalem, PA: friendly staff, comfortable visits, caring hygienists and help in an emergency.",
};

export const reviewsBreadcrumb = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us/" },
  { name: "Patient Reviews", path: "/about-us/patient-reviews/" },
];

export const reviewsHero = {
  /** H1 "Amazing Smiles By Design Reviews" */
  title: { lead: "Amazing Smiles By Design", accent: "Reviews" },
  intro:
    "Here's what patients say about their visits to Amazing Smiles By Design, the dental practice of Dr. Keyur Dudhat at 3101 Bristol Road, Suite 1, in Bensalem, PA. Every review below is shared in the patient's own words.",
  cta: { label: "Request an Appointment", href: appointmentHref },
};

export const patientReviews = [
  {
    quote:
      "Husband, daughter, and myself have all had pleasant experiences here. Always able to get an emergency appt (if needed). Very patient with my 10 year old. Everyone in the office is super friendly and always welcoming.",
    name: "Emily B.",
    date: "November 2025",
  },
  {
    quote:
      "I had an absolutely good experience at this dental office. The staff were incredibly welcoming, the environment was comfortable and modern, and everything about the visit was just top-notch. Highly recommend.",
    name: "Renee V.",
    date: "February 2026",
  },
  {
    quote:
      "All of my visits to Amazing Smiles by Design have been great! Erin is quick, efficient, careful and friendly as a hygienist. Dr. Jenish is thorough, kind and friendly. Colleen, at the front desk is also always friendly and upbeat.",
    name: "John C.",
    date: "January 2026",
  },
  {
    quote:
      "I just recently had some visits to Amazing Smiles. They took Xrays and cleaned my teeth. I returned to get an impression for a nightguard and then to actually get the nightguard. The dentist and staff are friendly, polite, and professional.",
    name: "Louis F.",
    date: "December 2025",
  },
  {
    quote:
      "I had a filling and a root canal at Amazing Smiles by Design and the experience was amazing-completely pain-free! The dentist was gentle, professional, and made me feel comfortable throughout the entire process.",
    name: "Anton A.",
    date: "August 2025",
  },
  {
    quote:
      "I had an amazing experience at the dental office! The dental hygienist was fantastic—professional, thorough, and incredibly caring. They made sure I felt comfortable throughout the entire appointment!",
    name: "L G",
    date: "March 2025",
  },
];

/**
 * "What Patients Mention Most". Keep the counts in sync with `patientReviews`
 * (Developer Handoff): re-count if reviews are added or removed.
 */
export const reviewsThemes = {
  title: "What Patients Mention Most",
  intro: "Across the six reviews on this page, patients most often mention:",
  total: 6,
  items: [
    { label: "Friendly, welcoming staff", count: 4, icon: "smile" },
    { label: "Feeling comfortable during their visit", count: 3, icon: "heart" },
    { label: "Thorough, caring hygienists", count: 2, icon: "tooth" },
    { label: "Care for the whole family, including help with an emergency appointment", count: 1, icon: "family" },
  ],
} as const;

export const reviewsListTitle = "What Our Patients Say";

export const reviewsShare = {
  title: "Share Your Experience",
  /** "...or call or text {phone}." */
  before: "Visited us recently? We'd love to hear how it went. Tell our team at your next appointment, or call or text",
};

export const reviewsNext = {
  title: "Read the Reviews, Then Meet Us",
  intro: "If you're comparing Bensalem dentist reviews before booking, you can also:",
  links: [
    { label: "Meet Dr. Keyur Dudhat", href: "/about-us/dr-keyur-dudhat/", icon: "cap" },
    { label: "See before-and-after results in our smile gallery", href: "/smile-gallery/", icon: "sparkle" },
    { label: "Find out what to expect as a new patient", href: "/patient-information/new-patients/", icon: "family" },
    { label: "Check insurance and membership plans", href: "/patient-information/insurance-payment-options/", icon: "shield" },
  ],
} as const;

export const reviewsFinalCta = {
  title: { lead: "Book Your Visit", accent: "in Bensalem" },
  body: "Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020. Call or text (215) 639-5331, or request an appointment online.",
  cta: { label: "Request an Appointment", href: appointmentHref },
};
