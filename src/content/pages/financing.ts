import { appointmentHref } from "@/content/navigation";
import { patientInfoCrumb } from "./patient-information";

/**
 * Financing Options copy, verbatim from
 * docs/seo-content/02 Patient Info/01 Info/Financing Options/02 Content.md (Final v1).
 * No apply links until the practice supplies its provider-specific URLs, and no rate
 * or term claims beyond this copy (Developer Handoff).
 */

export const financingMeta = {
  path: "/patient-information/financing-options/",
  title: "Dental Financing & Payment Plans in Bensalem, PA",
  description:
    "Spread the cost of dental care with CareCredit or Cherry at Amazing Smiles By Design in Bensalem, PA. Our team can help you explore your options.",
};

export const financingBreadcrumb = patientInfoCrumb("Financing Options", financingMeta.path);

export const financingHero = {
  title: { lead: "Dental Financing", accent: "in Bensalem, PA" },
  intro:
    "At Amazing Smiles By Design, we believe financial concerns should never prevent someone from receiving necessary dental treatment. We work with two healthcare financing providers, CareCredit and Cherry, so you can break treatment costs into monthly payments instead of paying the entire balance at once.",
  callLabel: "Ask About Financing:",
  cta: { label: "Request an Appointment", href: appointmentHref },
};

/** "Our Financing Partners": a real HTML table (Developer Handoff) */
export const financingCompare = {
  title: "Our Financing Partners",
  columns: ["CareCredit", "Cherry"],
  rows: [
    {
      label: "What it is",
      values: [
        "A healthcare financing program designed for medical and dental expenses",
        "A payment platform with simple monthly payment plans",
      ],
    },
    { label: "Payment plans", values: ["Flexible payment plans for dental procedures", "Flexible monthly payment options"] },
    {
      label: "Promotions",
      values: ["Special promotional financing options for qualified applicants", "Transparent payment plans with clear terms"],
    },
    {
      label: "Application",
      values: ["Simple online application, quick credit decisions", "Quick and simple application, fast approval decisions"],
    },
    { label: "Other", values: ["Can be used for additional healthcare services", "Ability to start treatment immediately"] },
  ],
};

export const financingPartners = [
  {
    id: "carecredit-title",
    title: "CareCredit Financing",
    body: "CareCredit is a healthcare financing program designed specifically for medical and dental expenses. It lets you pay for treatment through convenient monthly payments, making it easier to fit dental care into your budget. Many patients find it helpful when planning larger treatments such as cosmetic dentistry, dental implants, orthodontics or full smile restorations.",
    tags: ["Cosmetic dentistry", "Dental implants", "Orthodontics", "Full smile restorations"],
  },
  {
    id: "cherry-title",
    title: "Cherry Financing",
    body: "Cherry is a payment platform designed to make dental care accessible with simple monthly payment plans. Its streamlined application lets many patients receive approval quickly without complicated paperwork.",
    tags: ["Simple monthly payments", "Streamlined application", "Quick approval"],
  },
];

export const financingWhy = {
  title: "Why Patients Use Payment Plans",
  lead: "With a dental payment plan, you may be able to:",
  points: [
    { text: "Begin treatment right away", icon: "bolt" },
    { text: "Spread the cost of care over time", icon: "calendar" },
    { text: "Manage your monthly budget more easily", icon: "wallet" },
    { text: "Avoid postponing necessary dental procedures", icon: "check" },
  ],
  after:
    "Delaying dental care can often lead to more complex problems later, so financing can help you address dental issues earlier.",
};

export const financingHelp = {
  title: "We'll Help You Understand Your Options",
  body: "Our team works closely with patients to help them understand their financial options before treatment begins. We will review your treatment plan, discuss your insurance benefits if applicable, and help you explore the financing option that may work best for you. If you'd like help applying for a payment plan, our team is happy to assist.",
  otherTitle: "Other ways to save:",
  other: [
    {
      label: "Insurance",
      text: "Your PPO insurance is accepted here.",
      href: "/patient-information/insurance-payment-options/",
      icon: "shield",
    },
    {
      label: "Membership plans",
      text: "For patients without insurance, with 20% off all other dental procedures, excluding dental implants and Invisalign.",
      href: "/specials/",
      icon: "tag",
    },
  ],
};

export const financingFaqs = {
  title: "Dental Financing FAQs",
  items: [
    {
      question: "Do you offer dental payment plans?",
      answer:
        "Yes. Amazing Smiles By Design works with CareCredit and Cherry, which let you pay for dental treatment in monthly payments instead of all at once.",
    },
    {
      question: "Which financing companies do you work with?",
      answer: "We work with two healthcare financing providers: CareCredit and Cherry.",
    },
    {
      question: "Can you help me apply for financing?",
      answer:
        "Yes. If you'd like help applying for a payment plan, our team is happy to assist. During your visit, we can review the available financing options with you.",
    },
    {
      question: "Can I use financing for dental implants or cosmetic dentistry?",
      answer:
        "Many patients use CareCredit when planning larger treatments such as cosmetic dentistry, dental implants, orthodontics or full smile restorations.",
    },
  ],
};

export const financingFinalCta = {
  title: { lead: "Questions About", accent: "Financing?" },
  body: "Call (215) 639-5331. Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020.",
};
