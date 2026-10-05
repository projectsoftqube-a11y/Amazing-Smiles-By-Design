import { appointmentHref } from "@/content/navigation";

/**
 * Specials & Membership Plans page copy, verbatim from
 * docs/seo-content/01 Core/05 Offers/Specials & Membership Plans/02 Content.md
 * (Final v1). Prices come from site.ts (membershipPlans, emergencySpecial) so the
 * page, this page's Offer schema and the homepage stay in sync (Developer Handoff).
 * No countdowns or "limited time" language: the plans are ongoing.
 */

export const specialsMeta = {
  path: "/specials/",
  title: "Affordable Dentist in Bensalem | Membership Plans & Specials",
  description:
    "No insurance? Our Bensalem membership plans cover cleanings, exams and X-rays from $212 a year, plus 20% off most other dental care. Call (215) 639-5331.",
};

export const specialsBreadcrumb = [
  { name: "Home", path: "/" },
  { name: "Specials & Membership Plans", path: "/specials/" },
];

export const specialsHero = {
  /** H1 "Affordable Dental Membership Plans in Bensalem" */
  title: { lead: "Affordable Dental Membership Plans", accent: "in Bensalem" },
  subtitle: "No insurance? No problem! We offer flexible membership plans for every budget.",
  intro:
    "Amazing Smiles By Design in Bensalem, PA offers in-office membership plans for patients without dental insurance. Plans cost $269 a year for the Regular plan, $450 a year for periodontal maintenance and $212 a year for children 13 and younger. Each plan covers preventive care such as checkup exams and routine X-rays, and members get a 20% discount on all other dental procedures, excluding dental implants and Invisalign. New patients can also get an emergency exam with the necessary X-rays for a one-time fee of $59.",
  cta: { label: "Request an Appointment", href: appointmentHref },
};

/** The member discount, as worded on the page */
export const memberDiscount = "20% off all other procedures (excluding implants and Invisalign)";

export const specialsCompare = {
  title: "Compare Our Membership Plans",
  /** Column order: Regular, Perio Maintenance, Child (names/prices from site.ts) */
  rows: [
    { label: "Who it's for", values: ["Patients with no insurance", "Patients with no insurance", "Children 13 and younger with no insurance"] },
    { label: "Annual fee", values: ["$269", "$450", "$212"] },
    { label: "Professional cleanings", values: ["2", "–", "2"] },
    { label: "Periodontal maintenance visits", values: ["–", "4", "–"] },
    { label: "Checkup exams", values: ["2", "2 (exams and screenings)", "2"] },
    { label: "Fluoride treatments", values: ["–", "–", "2"] },
    { label: "Routine X-rays", values: ["Included", "Included", "Included"] },
    { label: "Emergency exam", values: ["Included", "Included", "Included"] },
    { label: memberDiscount, values: ["Yes", "Yes", "Yes"] },
  ],
};

/**
 * The three plan sections (each an H2 in the content file). `planName` matches
 * site.ts membershipPlans so the price is read from the single source.
 */
export const specialsPlans = [
  {
    planName: "Regular Membership Plan",
    id: "regular-plan",
    audience: "For patients with no insurance",
    includes: ["2 professional cleanings", "2 checkup exams", "Routine X-rays", "Emergency exam"],
    note: null,
    icon: "smile",
  },
  {
    planName: "Perio Maintenance Plan",
    id: "perio-plan",
    audience: "For patients with no insurance",
    includes: ["4 periodontal maintenance visits", "2 checkup exams and screenings", "Routine X-rays", "Emergency exam"],
    note: {
      text: "Periodontal maintenance is ongoing gum care, usually after a deep cleaning.",
      link: { label: "Learn about periodontal maintenance", href: "/general-dentistry/periodontal-maintenance/" },
    },
    icon: "tooth",
  },
  {
    planName: "Child Membership Plan",
    id: "child-plan",
    audience: "For children 13 and younger with no insurance",
    includes: ["2 professional cleanings", "2 checkup exams", "2 fluoride treatments", "Routine X-rays", "Emergency exam"],
    note: {
      text: null,
      link: { label: "Learn about children's dentistry", href: "/general-dentistry/child-dentistry/" },
    },
    icon: "family",
  },
] as const;

export const specialsSave = {
  title: "Members Save 20% on Other Dental Care",
  /** "...such as {fillings}, {crowns} and {root canals} when you need it." */
  before:
    "As an added benefit, members get a 20% discount on all other dental procedures, excluding dental implants and Invisalign. That means savings on treatment such as",
  links: [
    { label: "fillings", href: "/restorative-dentistry/dental-fillings/" },
    { label: "crowns", href: "/restorative-dentistry/dental-crowns/" },
    { label: "root canals", href: "/restorative-dentistry/non-surgical-root-canal/" },
  ],
  after: "when you need it.",
};

export const specialsEmergency = {
  /** H2 "Emergency Visit Special: $59 One-Time Fee" (price from site.ts) */
  audience: "For new patients only",
  includes: ["Necessary X-rays", "Necessary exam"],
  /** "In pain or worried about a tooth? Call or text {phone}." */
  before: "In pain or worried about a tooth? Call or text",
  cta: { label: "Emergency Appointment", href: "/patient-information/emergency-scheduling/" },
};

export const specialsHow = {
  title: "How Our In-Office Membership Plan Works",
  paragraphs: [
    "Our in-office membership plan makes routine dental care simple, affordable and accessible for patients without traditional dental insurance. You pay one annual fee and receive the preventive services included in your plan throughout the year, which helps you keep up with regular care while managing costs.",
    "Our goal is to give you predictable pricing, valuable preventive care and meaningful savings on dental treatment when you need it.",
  ],
  /** "Questions about the plans? Call or text {phone}." */
  questions: "Questions about the plans? Call or text",
  /** Decorative steps summarising the paragraph above */
  steps: [
    { label: "Pay one annual fee", icon: "tag" },
    { label: "Get your preventive care all year", icon: "calendar" },
    { label: "Save 20% on other treatment", icon: "check" },
  ],
} as const;

export const specialsCoverage = {
  title: "Have Dental Insurance or Need Financing?",
  items: [
    {
      lead: "Insurance:",
      text: "your PPO insurance is accepted here, and we are in-network with a variety of insurance plans.",
      link: { label: "Insurance & payment options", href: "/patient-information/insurance-payment-options/" },
      icon: "shield",
    },
    {
      lead: "Financing:",
      text: "spread the cost of treatment over time with CareCredit or Cherry.",
      link: { label: "Financing options", href: "/patient-information/financing-options/" },
      icon: "tag",
    },
  ],
} as const;

export const specialsFaqs = {
  title: "Membership Plan FAQs",
  items: [
    {
      question: "How much does a dental membership plan cost at Amazing Smiles By Design?",
      answer:
        "The Regular Membership Plan is $269 a year, the Perio Maintenance Plan is $450 a year, and the Child Membership Plan (ages 13 and younger) is $212 a year. All three are for patients with no dental insurance.",
    },
    {
      question: "What does the Regular Membership Plan include?",
      answer:
        "The Regular Membership Plan includes 2 professional cleanings, 2 checkup exams, routine X-rays and an emergency exam for an annual fee of $269. Members also get 20% off all other dental procedures, excluding dental implants and Invisalign.",
    },
    {
      question: "Is a dental membership plan worth it?",
      answer:
        "If you don't have dental insurance, a membership plan covers your routine preventive care for one predictable annual fee and gives you 20% off most other procedures.",
    },
    {
      question: "Does the membership plan discount apply to dental implants or Invisalign?",
      answer: "No. The 20% member discount applies to all other dental procedures, excluding dental implants and Invisalign.",
    },
    {
      question: "Who can get the $59 emergency visit special?",
      answer: "The $59 Emergency Visit Special is for new patients only. The one-time fee includes the necessary exam and X-rays.",
    },
    {
      question: "Can I join a membership plan if I have dental insurance?",
      answer:
        "Our membership plans are for patients with no insurance. If you have insurance, your PPO insurance is accepted here. Call (215) 639-5331 to confirm your plan before your visit.",
    },
  ],
};

/** Offer descriptions from the Developer Handoff schema (include the member discount) */
export const specialsOfferDescriptions: Record<string, string> = {
  "Regular Membership Plan":
    "Annual fee for patients with no insurance. Includes 2 professional cleanings, 2 checkup exams, routine X-rays and an emergency exam. Members get 20% off all other dental procedures, excluding dental implants and Invisalign.",
  "Perio Maintenance Plan":
    "Annual fee for patients with no insurance. Includes 4 periodontal maintenance visits, 2 checkup exams and screenings, routine X-rays and an emergency exam. Members get 20% off all other dental procedures, excluding dental implants and Invisalign.",
  "Child Membership Plan":
    "Annual fee for children 13 and younger with no insurance. Includes 2 professional cleanings, 2 checkup exams, 2 fluoride treatments, routine X-rays and an emergency exam. Members get 20% off all other dental procedures, excluding dental implants and Invisalign.",
  "Emergency Visit Special": "One-time fee for new patients only. Includes the necessary exam and X-rays.",
};

export const specialsFinalCta = {
  title: { lead: "Visit Our", accent: "Bensalem Office" },
  body: "Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020. Call or text (215) 639-5331, or request an appointment online.",
};
