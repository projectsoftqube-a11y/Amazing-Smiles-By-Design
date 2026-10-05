import { patientInfoCrumb } from "./patient-information";

/**
 * Emergency Scheduling copy, verbatim from
 * docs/seo-content/02 Patient Info/02 Conversion/Emergency Scheduling/02 Content.md (Final v1).
 * This page is about booking; "emergency dentist bensalem" belongs to the
 * /general-dentistry/emergency-dentistry/ page (Developer Handoff).
 */

export const emergencyMeta = {
  path: "/patient-information/emergency-scheduling/",
  title: "Emergency Dental Appointment in Bensalem | Amazing Smiles",
  description:
    "Need an emergency dental appointment in Bensalem, PA? Call or text (215) 639-5331. Every attempt is made to see you that day. $59 exam for new patients.",
};

export const emergencyBreadcrumb = patientInfoCrumb("Emergency Scheduling", emergencyMeta.path);

export const emergencyHero = {
  title: { lead: "Emergency Dental Appointments", accent: "in Bensalem" },
  intro:
    "In pain? Call or text Amazing Smiles By Design at (215) 639-5331. If you have pain or an emergency situation, every attempt will be made to see you that day.",
  cta: { label: "Request an Emergency Visit Online", href: "#appointment-form" },
  /** Safety line: above the fold on phones (Developer Handoff) */
  safety:
    "If you have severe facial swelling, trouble breathing or swallowing, or bleeding that won't stop, call 911 or go to the nearest emergency room.",
};

export const emergencySteps = {
  title: "How to Get an Emergency Appointment",
  steps: [
    { title: "Call or text (215) 639-5331.", icon: "phone" },
    {
      title: "Tell us what's happening:",
      rest: " pain, swelling, a broken tooth, an infection or anything else that worries you.",
      icon: "message",
    },
    { title: "Every attempt will be made to see you that day.", icon: "calendar" },
  ],
  after:
    'You can also use the appointment request form below and choose "Emergency Visit". Our scheduling coordinator will contact you to confirm your appointment.',
};

export const emergencyOffer = {
  title: "$59 Emergency Visit Special for New Patients",
  body: "New patients can have an emergency visit for a one-time fee of $59, which includes the necessary exam and X-rays.",
  link: { label: "All specials & membership plans", href: "/specials/" },
};

export const emergencyHours = { title: "Emergency Office Hours" };

export const emergencyForm = {
  title: "Request an Emergency Visit Online",
  note: "Please don't use this form to send private health information.",
};

export const emergencyLearn = {
  title: "Learn About Emergency Dental Care",
  before: "For common dental emergencies and how we treat them, including toothaches, broken teeth and infections, see our",
  link: { label: "emergency dentistry", href: "/general-dentistry/emergency-dentistry/" },
  after: "page.",
};

export const emergencyFaqs = {
  title: "Emergency Appointment FAQs",
  items: [
    {
      question: "Can I get a same-day emergency dental appointment?",
      answer:
        "If you have pain or an emergency situation, every attempt will be made to see you that day. Call or text (215) 639-5331 as soon as possible.",
    },
    {
      question: "How much is an emergency visit for a new patient?",
      answer:
        "New patients can have an emergency visit for a one-time fee of $59, which includes the necessary exam and X-rays.",
    },
    {
      question: "What counts as a dental emergency?",
      answer:
        "Pain, swelling, a broken tooth or an infection are common reasons to book an emergency visit. If you're not sure, call or text us and describe what's happening.",
    },
    {
      question: "What should I do if the office is closed?",
      answer:
        "If you have severe facial swelling, trouble breathing or swallowing, or bleeding that won't stop, call 911 or go to the nearest emergency room. For other problems, call or text (215) 639-5331 during office hours.",
    },
  ],
};

export const emergencyFinalCta = {
  title: { lead: "Call or Text Now:", accent: "(215) 639-5331" },
  body: "Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020.",
  links: [{ label: "Directions", href: "/contact-us/" }],
};
