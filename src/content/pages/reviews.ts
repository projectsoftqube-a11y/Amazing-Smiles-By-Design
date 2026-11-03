import { appointmentHref } from "@/content/navigation";

/**
 * Patient Reviews page copy, verbatim from
 * docs/seo-content/01 Core/04 Proof/Patient Reviews/02 Content.md (Final v1), except the
 * reviews themselves (see patientReviews). No Review schema (Developer Handoff).
 */

type PatientReview = {
  /** Verbatim from Google, spelling included. Never reword, shorten or tidy a review. */
  quote: string;
  /** The reviewer's name exactly as Google shows it */
  name: string;
  /** Google's own relative date, as shown on 3 Nov 2026 */
  date: string;
  /** The review's star rating on Google; the card shows stars only when this is set */
  rating?: number;
};

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

/**
 * Real Google reviews from the practice's Google listing (contactLinks.map), copied from the
 * listing by the team on 3 Nov 2026, like the Hampton site. Left out: reviews Google cuts off
 * with "… More" (only whole reviews are shown), and reviews naming Colleen/Coleen or Jenish
 * (client edits, 16 Oct 2026) or a dentist the site doesn't list ("Dr. Patel", "Dr. Jessen",
 * "Dr Andrew Steinkeler"). The first review is the Patient Reviews page's featured card; the
 * homepage shows the first six.
 */
export const patientReviews: PatientReview[] = [
  {
    quote:
      "Had such a great experience with Dr. Dudhat! He was very honest and forthcoming and had great bedside manner which is all very important to me. The staff in the office is lovely as well!",
    name: "Alexis Kirsch",
    date: "5 months ago",
  },
  {
    quote:
      "Smiles all around. Friendly staff, professional caring hygienist and doctor, and a beautiful, clean office.",
    name: "Susan Harder",
    date: "a month ago",
  },
  {
    quote:
      "This is the best dentist office I’ve ever been to! Everyone is so nice and welcoming, they do a painless cleaning and thorough checkup and the office is immaculate! Highly recommend!",
    name: "Melanie M",
    date: "5 months ago",
  },
  {
    quote:
      "Just got my teeth cleaned. Super friendly staff, quick and gentle cleaning. my teeth look really nice now (: No pain. Nice office too. Would go back!",
    name: "Maruf Hossain",
    date: "6 months ago",
  },
  {
    quote:
      "Great experience here. Everyone is really friendly and the office is super clean. They make you feel comfortable and take good care of you. Definitely recommend!",
    name: "Anjali Davara",
    date: "7 months ago",
  },
  {
    quote:
      "I had an absolutely good experience at this dental office. The staff were incredibly welcoming, the environment was comfortable and modern, and everything about the visit was just top-notch. Highly recommend.",
    name: "Renee Vento",
    date: "8 months ago",
  },
  {
    quote:
      "Husband, daughter, and myself have all had pleasant experiences here. Always able to get an emergency appt (if needed). Very patient with my 10yo. Everyone in the office is super friendly and always welcoming.",
    name: "Emily Bernstein",
    date: "a year ago",
  },
  {
    quote: "We absolutely come there for the hygienist, Erin! She always goes above and beyond.",
    name: "Kristy Loteckie",
    date: "2 months ago",
  },
];

/* "What Patients Mention Most" was removed at the client's request (16 Oct 2026): it counted
   only the reviews on this page, and the practice has many more. */

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
