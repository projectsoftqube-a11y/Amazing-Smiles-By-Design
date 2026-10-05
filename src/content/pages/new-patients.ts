import { patientInfoCrumb } from "./patient-information";

/**
 * New Patients copy, verbatim from
 * docs/seo-content/02 Patient Info/01 Info/New Patients/02 Content.md (Final v1).
 */

export const newPatientsMeta = {
  path: "/patient-information/new-patients/",
  title: "Dentist Accepting New Patients in Bensalem, PA",
  description:
    "Amazing Smiles By Design is welcoming new patients in Bensalem, PA. See what happens at your first visit, our new patient specials and how to book.",
};

export const newPatientsBreadcrumb = patientInfoCrumb("New Patients", newPatientsMeta.path);

export const newPatientsHero = {
  title: { lead: "Dentist Accepting New Patients", accent: "in Bensalem, PA" },
  intro:
    "Thank you for considering Amazing Smiles By Design. We are a dental practice at 3101 Bristol Road, Suite 1, Bensalem, PA 19020, and our goal is for your first visit to be one of comfort and acknowledgement of your personal dental needs.",
  cta: { label: "Request Your First Appointment", href: "#appointment-form" },
};

export const firstVisit = {
  title: "What Happens at Your First Visit",
  lead: "At your first visit, we will take the time needed to:",
  steps: [
    { title: "Diagnose your immediate dental concerns.", icon: "search" },
    { title: "Review your past medical and dental history.", icon: "clipboard" },
    { title: "Complete a thorough, comprehensive dental evaluation", rest: " with your cooperation.", icon: "scan" },
    { title: "Create a treatment plan", rest: " that provides for your optimal dental health.", icon: "check" },
  ],
  includes: "A new patient exam and cleaning visit includes an exam, X-rays and a cleaning if applicable.",
  why: "Why do we take this time? Because the foundation of a long-term relationship is established at your first visit to our practice.",
};

export const newPatientOffers = {
  title: "New Patient Specials & Payment Options",
  items: [
    {
      label: "$59 Emergency Visit Special",
      text: "For new patients only. Includes the necessary exam and X-rays.",
      link: { label: "Emergency scheduling", href: "/patient-information/emergency-scheduling/" },
      icon: "alert",
      featured: true,
    },
    {
      label: "No insurance? No problem!",
      text: "In-office membership plans: $269 a year for the Regular plan and $212 a year for children 13 and younger.",
      link: { label: "Membership plans & specials", href: "/specials/" },
      icon: "tag",
    },
    {
      label: "Insurance",
      text: "Your PPO insurance is accepted here.",
      link: { label: "Insurance & payment options", href: "/patient-information/insurance-payment-options/" },
      icon: "shield",
    },
    {
      label: "Financing",
      text: "CareCredit and Cherry.",
      link: { label: "Financing options", href: "/patient-information/financing-options/" },
      icon: "wallet",
    },
  ],
};

export const newPatientsForm = {
  title: "Request Your First Appointment",
  body: "Complete the form below and we will contact you, or feel free to text or call us at (215) 639-5331. Our scheduling coordinator will contact you to confirm your appointment.",
  note: "Please don't use this form to send private health information.",
};

export const newPatientsFaqs = {
  title: "New Patient FAQs",
  items: [
    {
      question: "Is Amazing Smiles By Design accepting new patients?",
      answer:
        "Yes. Amazing Smiles By Design in Bensalem, PA is welcoming new patients. Call or text (215) 639-5331, or request an appointment online.",
    },
    {
      question: "What happens at a new patient dental visit?",
      answer:
        "We diagnose your immediate dental concerns, review your past medical and dental history, complete a thorough, comprehensive dental evaluation and create a treatment plan for your optimal dental health.",
    },
    {
      question: "Does the first visit include a cleaning?",
      answer: "A new patient exam and cleaning visit includes an exam, X-rays and a cleaning if applicable.",
    },
    {
      question: "Do you have specials for new patients?",
      answer:
        "Yes. New patients can get an emergency exam, including the necessary X-rays, for a one-time fee of $59. Patients without insurance can also join one of our membership plans.",
    },
    {
      question: "Which days can I book?",
      answer:
        "The office is open Monday 8 am to 6 pm, Tuesday 8 am to 5 pm, Wednesday 8 am to 6 pm and Thursday 8 am to 2 pm, with morning and afternoon appointments.",
    },
  ],
};

export const newPatientsFinalCta = {
  title: { lead: "We Look Forward to", accent: "Meeting You" },
  links: [
    { label: "Meet Dr. Dudhat", href: "/about-us/dr-keyur-dudhat/" },
    { label: "Directions", href: "/contact-us/" },
  ],
};
