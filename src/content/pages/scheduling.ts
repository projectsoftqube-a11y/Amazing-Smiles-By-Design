import { patientInfoCrumb } from "./patient-information";

/**
 * Scheduling copy, verbatim from
 * docs/seo-content/02 Patient Info/02 Conversion/Scheduling/02 Content.md (Final v1).
 */

export const schedulingMeta = {
  path: "/patient-information/scheduling/",
  title: "Book a Dentist Appointment in Bensalem | Amazing Smiles",
  description:
    "Book a dentist appointment in Bensalem, PA. Text or call (215) 639-5331 or request a time online. Our scheduling coordinator will confirm it.",
};

export const schedulingBreadcrumb = patientInfoCrumb("Scheduling", schedulingMeta.path);

export const schedulingHero = {
  title: { lead: "Book a Dentist Appointment", accent: "in Bensalem" },
  intro:
    "The first step toward a beautiful, healthy smile is to schedule an appointment. Text or call Amazing Smiles By Design at (215) 639-5331, or complete the appointment request form below. Our scheduling coordinator will contact you to confirm your appointment.",
  cta: { label: "Request Online", href: "#appointment-form" },
};

export const schedulingForm = {
  title: "Request an Appointment Online",
  note: "If you are an existing patient, please don't use this form to send private health information.",
};

export const schedulingHours = { title: "Office Hours" };

export const schedulingPain = {
  title: "In Pain? Tell Us When You Book",
  body: "We will schedule your appointment as promptly as possible. If you have pain or an emergency situation, every attempt will be made to see you that day.",
  link: { label: "Emergency scheduling", href: "/patient-information/emergency-scheduling/" },
};

export const schedulingOnTime = {
  title: "Staying on Schedule",
  body: "We try our best to stay on schedule to minimize your waiting. Because Dr. Dudhat provides many types of dental services, some procedures may take longer than planned, and emergency cases can also cause delays. We appreciate your understanding and patience.",
};

export const schedulingFaqs = {
  title: "Scheduling FAQs",
  items: [
    {
      question: "How do I book a dental appointment in Bensalem?",
      answer:
        "Text or call Amazing Smiles By Design at (215) 639-5331, or complete the appointment request form on this page. Our scheduling coordinator will contact you to confirm your appointment.",
    },
    {
      question: "Which days and times can I book?",
      answer:
        "The office is open Monday 8 am to 6 pm, Tuesday 8 am to 5 pm, Wednesday 8 am to 6 pm and Thursday 8 am to 2 pm. You can request a morning or afternoon appointment.",
    },
    {
      question: "Can I be seen the same day if I'm in pain?",
      answer:
        "If you have pain or an emergency situation, every attempt will be made to see you that day. Call or text (215) 639-5331 as soon as possible.",
    },
    {
      question: "Will someone confirm my appointment request?",
      answer: "Yes. Our scheduling coordinator will contact you to confirm your appointment.",
    },
  ],
};

export const schedulingFinalCta = {
  title: { lead: "Amazing Smiles", accent: "By Design" },
  body: "3101 Bristol Road, Suite 1, Bensalem, PA 19020 · (215) 639-5331",
  links: [
    { label: "Directions", href: "/contact-us/" },
    { label: "New patient information", href: "/patient-information/new-patients/" },
  ],
};
