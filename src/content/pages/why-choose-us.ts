import { appointmentHref } from "@/content/navigation";
import { patientInfoCrumb } from "./patient-information";

/**
 * Why Choose Us copy, verbatim from
 * docs/seo-content/02 Patient Info/01 Info/Why Choose Us/02 Content.md (Final v1).
 * No photo: the handoff allows only a real office or team photo, or none.
 */

export const whyMeta = {
  path: "/patient-information/why-choose-us/",
  title: "Why Choose Us | Amazing Smiles By Design, Bensalem PA",
  description:
    "Gentle, personalized dental care in Bensalem, PA: clear pricing before treatment, help for dental anxiety, and comprehensive care in one location.",
};

export const whyBreadcrumb = patientInfoCrumb("Why Choose Us", whyMeta.path);

export const whyHero = {
  title: { lead: "Why Patients Choose", accent: "Amazing Smiles By Design" },
  intro:
    "When it comes to picking a dentist, we know you have options. At Amazing Smiles By Design in Bensalem, PA, personalized, gentle, comprehensive patient care is our number one priority. Here are a few things that make our practice different.",
  cta: { label: "Request an Appointment", href: appointmentHref },
};

/** The six reasons, each an H2 in the content file; `short` labels the hero's jump links */
export const whyCare = {
  id: "care-title",
  short: "Care & commitment",
  title: "Care & Commitment",
  body: "From the front office to the exam room, our team takes your oral health seriously. We use modern equipment designed with safety and efficiency in mind, in comfortable, soothing surroundings. From the person who checks you in to Dr. Keyur Dudhat, our team is devoted to your safety, comfort and satisfaction.",
  link: { label: "Meet Dr. Dudhat", href: "/about-us/dr-keyur-dudhat/" },
};

export const whyHonesty = {
  id: "honesty-title",
  short: "Honesty & affordability",
  title: "Honesty & Affordability",
  body: "The cost of care can be confusing, so we make every effort to explain and simplify it for you and your family. Our staff provides each patient with transparent pricing before any treatment, so you can make an informed decision.",
  points: [
    {
      label: "Insurance:",
      text: "we are in-network with a variety of insurance plans, and we're happy to help you navigate your dental insurance.",
      link: { label: "Insurance & payment", href: "/patient-information/insurance-payment-options/" },
      icon: "shield",
    },
    {
      label: "Financing:",
      text: "dental financing through CareCredit and Cherry.",
      link: { label: "Financing options", href: "/patient-information/financing-options/" },
      icon: "wallet",
    },
    {
      label: "No insurance:",
      text: "in-office membership plans, including a Child plan.",
      link: { label: "Membership plans", href: "/specials/" },
      icon: "tag",
    },
  ],
};

export const whyAccess = {
  id: "access-title",
  short: "Easy access",
  title: "Easy Access to Care & Information",
  body: "We know your time is valuable. That's why we offer dental appointment reminders and a quick turnaround on calls and appointment requests. The office is open until 6 pm on Mondays and Wednesdays. We're happy to answer your questions in the office, over the phone or by text.",
  chips: [
    { label: "Appointment reminders", icon: "bell" },
    { label: "Open until 6 pm Mon & Wed", icon: "clock" },
    { label: "Call or text", icon: "message" },
  ],
};

export const whyComprehensive = {
  id: "comprehensive-title",
  short: "Care in one location",
  title: "Comprehensive Dental Care in One Location",
  body: "From checkups and children's dentistry to crowns, implants, veneers and clear aligners, we handle many aspects of your care in one place. If we must refer you to another dental professional, we send you to carefully vetted colleagues who apply the same professional principles in their office that we do in ours.",
  chips: ["Checkups", "Children's dentistry", "Crowns", "Implants", "Veneers", "Clear aligners"],
};

export const whyComfort = {
  id: "comfort-title",
  short: "Comfort for anxiety",
  title: "Comfort for Patients With Dental Anxiety",
  body: "Many patients experience dental anxiety, and we understand. We do everything we can to make your visit as stress-free as possible. By explaining clearly what you can expect during your treatment, we can often ease dental fear. You're welcome to bring headphones and music to listen to during treatment, and you can ask us about dental sedation options.",
};

export const whyPersonal = {
  id: "personal-title",
  short: "Personalized service",
  title: "Personalized Service",
  body: "At our practice, you aren't just a patient. We take an interest in you and your oral health needs, and we think you'll find a friend in your dental professional.",
};

export const whyReasons = [whyCare, whyHonesty, whyAccess, whyComprehensive, whyComfort, whyPersonal];

export const whyFaqs = {
  title: "Choosing a Dentist: Common Questions",
  items: [
    {
      question: "How do I choose the best dentist in Bensalem for me?",
      answer:
        "Look for a dentist who explains your options and costs clearly, accepts your insurance or offers alternatives, makes you feel comfortable, and offers the care your family needs. At Amazing Smiles By Design, our staff provides transparent pricing before any treatment, and we offer general, restorative and cosmetic dentistry in one location.",
    },
    {
      question: "Do you help patients who are nervous about the dentist?",
      answer:
        "Yes. We explain clearly what you can expect during your treatment, which often eases dental fear. You're welcome to bring headphones and music, and you can ask us about dental sedation options.",
    },
    {
      question: "Will I know the cost before treatment?",
      answer:
        "Yes. Our staff provides each patient with transparent pricing before any treatment, so you can make an informed decision.",
    },
    {
      question: "What if I need a specialist?",
      answer:
        "If we must refer you to another dental professional, we send you to carefully vetted colleagues who apply the same professional principles that we do.",
    },
  ],
};

export const whyFinalCta = {
  title: { lead: "Give Us a Call or Text", accent: "Today" },
  body: "Call or text (215) 639-5331, or request an appointment online. Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020.",
};
