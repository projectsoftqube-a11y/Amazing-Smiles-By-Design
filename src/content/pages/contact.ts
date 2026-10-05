import { appointmentHref } from "@/content/navigation";

/**
 * Contact Us page copy, verbatim from
 * docs/seo-content/01 Core/06 Contact/Contact Us/02 Content.md (Final v1).
 * NAP, phone, fax and hours render from site.ts so they match the homepage, footer
 * and Google Business Profile character for character (Developer Handoff).
 * Client rule: headings use "&"; paragraphs and metas keep "and".
 */

export const contactMeta = {
  path: "/contact-us/",
  title: "Contact Our Dental Office in Bensalem | Amazing Smiles",
  description:
    "Contact Amazing Smiles By Design at 3101 Bristol Road, Suite 1, Bensalem, PA 19020. Call or text (215) 639-5331. Office hours, map and directions.",
};

export const contactBreadcrumb = [
  { name: "Home", path: "/" },
  { name: "Contact Us", path: "/contact-us/" },
];

export const contactHero = {
  /** H1 "Contact Our Dental Office in Bensalem" */
  title: { lead: "Contact Our Dental Office", accent: "in Bensalem" },
  intro:
    "Amazing Smiles By Design is a dental office at 3101 Bristol Road, Suite 1, Bensalem, PA 19020. There are many ways to reach us. Please choose the one that's most convenient for you.",
  cta: { label: "Request an Appointment", href: appointmentHref },
};

export const contactReach = {
  title: "How to Reach Us",
  appointmentsLink: { label: "Request an appointment online", href: appointmentHref },
  emergencyLink: { label: "emergency scheduling", href: "/patient-information/emergency-scheduling/" },
};

export const contactHours = { title: "Office Hours" };

export const contactFind = {
  title: "Find Our Office on Bristol Road",
  body: "Our dental office is at 3101 Bristol Road, Suite 1, in Bensalem. If this is your first visit, use the map below to get directions, including the travel time and distance from your starting address.",
  /** "[Button] Get Directions" in the content file (the starting-address box was removed at the client's request) */
  directionsLabel: "Get Directions",
};

export const contactAreas = {
  title: "Serving Bensalem & Nearby Communities",
  /** The content file's sentence; the towns are linked as chips beneath it */
  sentence:
    "We proudly serve patients from Bensalem, Feasterville, Fairless Hills, Trevose, Hulmeville, Langhorne and Parkland.",
  link: { label: "All areas we serve", href: "/areas-we-serve/" },
};

export const contactFaqs = {
  title: "Contact FAQs",
  items: [
    {
      question: "What is the address of Amazing Smiles By Design?",
      answer: "Amazing Smiles By Design is at 3101 Bristol Road, Suite 1, Bensalem, PA 19020.",
    },
    {
      question: "What is the phone number for Amazing Smiles By Design?",
      answer: "The phone number is (215) 639-5331. You can call or text. The fax number is (215) 639-1921.",
    },
    {
      question: "What are your office hours?",
      answer:
        "We are open Monday 8 am to 6 pm, Tuesday 8 am to 5 pm, Wednesday 8 am to 6 pm and Thursday 8 am to 2 pm.",
    },
    {
      question: "Are you open on Fridays or weekends?",
      answer: "No. The office is closed Friday, Saturday and Sunday.",
    },
    {
      question: "How do I book an appointment?",
      answer: "Call or text (215) 639-5331, or request an appointment online through our scheduling page.",
    },
    {
      question: "What should I do if I have a dental emergency?",
      answer:
        "Call or text (215) 639-5331 and tell us what happened. New patients can have an emergency exam, including any necessary X-rays, for a one-time fee of $59.",
    },
  ],
};

export const contactFinalCta = {
  title: { lead: "We Look Forward", accent: "to Seeing You" },
};
