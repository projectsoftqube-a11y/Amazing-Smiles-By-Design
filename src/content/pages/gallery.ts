import { appointmentHref } from "@/content/navigation";

/**
 * Smile Gallery page copy, verbatim from
 * docs/seo-content/01 Core/04 Proof/Smile Gallery/02 Content.md (Final v1).
 * Client rule: headings use "&" ("Before & After"); paragraphs and metas keep "and".
 */

export const galleryMeta = {
  path: "/smile-gallery/",
  title: "Smile Makeover Before and After | Smile Gallery | Bensalem",
  description:
    "See before-and-after smile makeover photos from Amazing Smiles By Design in Bensalem, PA, and learn which treatments can help improve your smile.",
};

export const galleryBreadcrumb = [
  { name: "Home", path: "/" },
  { name: "Smile Gallery", path: "/smile-gallery/" },
];

export const galleryHero = {
  /** H1 "Smile Makeover Before & After Gallery" */
  title: { lead: "Smile Makeover", accent: "Before & After Gallery" },
  intro:
    "Discover what our dental treatments can do in the Amazing Smiles By Design Smile Gallery, showcasing real patient results from our Bensalem office. See the improvements in smiles, from stained and crooked teeth to bright, aligned grins, and how our care can make a difference for you.",
  cta: { label: "Request an Appointment", href: appointmentHref },
};

export const galleryPhotos = {
  title: "Before & After Photos",
  intro: "Slide each image to compare the smile before and after treatment.",
  /** Must sit directly under the photos (Developer Handoff) */
  disclaimer: "Individual results vary. Your treatment plan depends on your own teeth, health and goals.",
};

export const galleryTreatments = {
  title: "Treatments Behind a Smile Makeover",
  intro:
    "A smile makeover can combine one or more treatments. Cosmetic and restorative treatments we offer at our Bensalem office include:",
  items: [
    {
      name: "Teeth whitening",
      href: "/cosmetic-dentistry/teeth-whitening/",
      text: "having a beautiful smile may be easier than you think. Many people achieve the look they've been dreaming of with our simple whitening procedure.",
      icon: "sparkle",
    },
    {
      name: "Porcelain veneers",
      href: "/cosmetic-dentistry/porcelain-veneers/",
      text: "thin shells of ceramic that bond directly to the front surfaces of the teeth, an ideal choice for improving your smile.",
      icon: "smile",
    },
    {
      name: "Dental bonding",
      href: "/cosmetic-dentistry/dental-bonding/",
      text: "tooth-colored material used to repair chips and reshape teeth.",
      icon: "tooth",
    },
    {
      name: "Clear aligners",
      href: "/cosmetic-dentistry/clear-aligners/",
      text: "removable clear trays that gradually straighten teeth.",
      icon: "face",
    },
    {
      name: "Dental crowns",
      href: "/restorative-dentistry/dental-crowns/",
      text: "a cap that covers and restores a damaged tooth. Our goal is to provide dentistry that is undetectable.",
      icon: "shield",
    },
    {
      name: "Dental implants",
      href: "/restorative-dentistry/dental-implants/",
      text: "a foundation for replacement teeth that look, feel and function like natural teeth.",
      icon: "check",
    },
  ],
  link: { label: "All cosmetic dentistry", href: "/cosmetic-dentistry/" },
} as const;

export const galleryStart = {
  title: "Start Your Own Smile Makeover",
  paragraphs: [
    "Dr. Keyur Dudhat provides comprehensive dental care with a special focus on implant and cosmetic dentistry, and he regularly pursues advanced training in procedures such as dental implants and veneers. Our office uses digital imaging, including the RayFace facial scanner, which captures your facial structures in 3D.",
    "If you're budgeting for treatment, you can spread the cost over time with CareCredit or Cherry.",
  ],
  links: [
    { label: "Meet Dr. Dudhat", href: "/about-us/dr-keyur-dudhat/" },
    { label: "Financing options", href: "/patient-information/financing-options/" },
  ],
};

export const galleryFaqs = {
  title: "Smile Makeover FAQs",
  items: [
    {
      question: "What is a smile makeover?",
      answer:
        "A smile makeover is a plan to improve the appearance of your smile using one or more dental treatments, such as teeth whitening, porcelain veneers, dental bonding, clear aligners, crowns or implants.",
    },
    {
      question: "Which smile makeover treatments does Amazing Smiles By Design offer?",
      answer:
        "Amazing Smiles By Design in Bensalem offers teeth whitening, porcelain veneers, dental bonding, clear aligners, dental crowns and dental implants.",
    },
    {
      question: "How do I start a smile makeover in Bensalem?",
      answer:
        "Call or text (215) 639-5331 or request an appointment online to book a visit with Dr. Keyur Dudhat at 3101 Bristol Road, Suite 1, Bensalem, PA 19020.",
    },
  ],
};

export const galleryFinalCta = {
  title: { lead: "Ready for Your Own", accent: "Before & After?" },
};
