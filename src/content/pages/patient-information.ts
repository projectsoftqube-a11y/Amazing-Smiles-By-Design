import { appointmentHref } from "@/content/navigation";

/**
 * Patient Information hub copy, verbatim from
 * docs/seo-content/02 Patient Info/00 Hub/Patient Information Hub/02 Content.md (Final v1).
 * Titles and link labels use "&" (client rule); paragraphs keep the content file's wording.
 */

export const hubMeta = {
  path: "/patient-information/",
  title: "Patient Information | Bensalem Dental | Amazing Smiles",
  description:
    "Everything you need before visiting Amazing Smiles By Design in Bensalem, PA: new patients, scheduling, insurance, financing and our technology.",
};

export const hubBreadcrumb = [
  { name: "Home", path: "/" },
  { name: "Patient Information", path: "/patient-information/" },
];

/** Breadcrumb for a child page: Home › Patient Information › {name} */
export const patientInfoCrumb = (name: string, path: string) => [...hubBreadcrumb, { name, path }];

export const hubHero = {
  /** H1 "Patient Information" */
  title: { lead: "Patient", accent: "Information" },
  intro:
    "Amazing Smiles By Design is a Bensalem dental practice at 3101 Bristol Road, Suite 1, Bensalem, PA 19020. This section covers everything you need to know before your visit, from booking your first appointment to insurance, payment and the technology we use.",
  cta: { label: "Request an Appointment", href: appointmentHref },
};

export type HubLink = { label: string; text: string; href: string; icon: string };

/** The three H2 groups of link cards, in content order */
export const hubGroups: { id: string; title: string; eyebrow: string; links: HubLink[] }[] = [
  {
    id: "visiting-title",
    title: "Visiting Us",
    eyebrow: "Plan your visit",
    links: [
      {
        label: "New patients",
        text: "What happens at your first visit and how to get started.",
        href: "/patient-information/new-patients/",
        icon: "family",
      },
      {
        label: "Scheduling",
        text: "Request an appointment online, or call or text us.",
        href: "/patient-information/scheduling/",
        icon: "calendar",
      },
      {
        label: "Emergency scheduling",
        text: "In pain? If you have pain or an emergency situation, every attempt will be made to see you that day.",
        href: "/patient-information/emergency-scheduling/",
        icon: "alert",
      },
      {
        label: "Why choose us",
        text: "What makes our practice different.",
        href: "/patient-information/why-choose-us/",
        icon: "heart",
      },
    ],
  },
  {
    id: "paying-title",
    title: "Paying for Your Care",
    eyebrow: "Insurance & payment",
    links: [
      {
        label: "Insurance & payment options",
        text: "Your PPO insurance is accepted here, and we work with many dental insurance carriers.",
        href: "/patient-information/insurance-payment-options/",
        icon: "shield",
      },
      {
        label: "Financing options",
        text: "Spread the cost of treatment over time with CareCredit or Cherry.",
        href: "/patient-information/financing-options/",
        icon: "wallet",
      },
      {
        label: "Membership plans & specials",
        text: "No insurance? No problem! In-office Regular, Perio Maintenance and Child plans.",
        href: "/specials/",
        icon: "tag",
      },
    ],
  },
  {
    id: "technology-resources-title",
    title: "Our Technology & Resources",
    eyebrow: "Technology & guides",
    links: [
      {
        label: "Advanced technology",
        text: "CBCT 3D imaging, digital X-rays and the RayFace facial scanner.",
        href: "/patient-information/advanced-technology/",
        icon: "scan",
      },
      {
        label: "Patient education",
        text: "Guides to help you look after your teeth and gums.",
        href: "/patient-information/patient-education/",
        icon: "book",
      },
    ],
  },
];

export const hubDetails = {
  title: "Bensalem Dental Office Details",
  hours:
    "Monday 8 am – 6 pm, Tuesday 8 am – 5 pm, Wednesday 8 am – 6 pm, Thursday 8 am – 2 pm. Closed Friday to Sunday.",
  payment: "Payment is due at the time of service. We bill your insurance company and track your claim.",
  link: { label: "Directions & contact details", href: "/contact-us/" },
};
