import { appointmentHref } from "@/content/navigation";
import type { ServiceExtras, ServiceSection } from "@/content/service-page";

/**
 * Cosmetic Dentistry hub copy, verbatim from
 * docs/seo-content/05 Cosmetic Dentistry/00 Hub/Cosmetic Dentistry Hub/02 Content.md (Final v1).
 * Headings and link labels use "&" (client rule); paragraphs keep "and".
 */

export const cosmeticMeta = {
  path: "/cosmetic-dentistry/",
  title: "Cosmetic Dentist Bensalem, PA | Veneers, Whitening & More",
  description:
    "Cosmetic dentist in Bensalem, PA: porcelain veneers, teeth whitening, dental bonding and Invisalign clear aligners with Dr. Keyur Dudhat. (215) 639-5331.",
};

export const cosmeticBreadcrumb = [
  { name: "Home", path: "/" },
  { name: "Cosmetic Dentistry", path: "/cosmetic-dentistry/" },
];

/** Home › Cosmetic Dentistry › {name} */
export const cosmeticCrumb = (name: string, path: string) => [...cosmeticBreadcrumb, { name, path }];

export const cosmeticHero = {
  title: { lead: "Cosmetic Dentistry", accent: "in Bensalem, PA" },
  intro:
    "Cosmetic dentistry improves the color, shape, size and alignment of your teeth to create a smile you feel confident showing. At Amazing Smiles By Design, your cosmetic dentist in Bensalem, Dr. Keyur Dudhat, offers porcelain veneers, teeth whitening, dental bonding, Invisalign clear aligners and custom night guards at 3101 Bristol Road, Suite 1, Bensalem, PA 19020.",
  cta: { label: "Book a Cosmetic Consultation", href: appointmentHref },
};

/** The six H2 sections, in content order (the treatments list links to all 5 child pages) */
export const cosmeticSections: ServiceSection[] = [
  {
    id: "science-and-artistry-title",
    title: "Science & Artistry, Planned Around You",
    blocks: [
      {
        kind: "p",
        text: "Cosmetic dentistry is a focus of Dr. Dudhat, who has advanced training in veneers. The practice combines science and artistry to redesign smiles. Even a subtle change in your smile can help you project self-confidence.",
      },
    ],
  },
  {
    id: "our-cosmetic-dental-treatments-title",
    title: "Our Cosmetic Dental Treatments",
    blocks: [
      {
        kind: "ul",
        items: [
          "[Porcelain veneers](/cosmetic-dentistry/porcelain-veneers/): ultra-thin custom porcelain shells bonded to the front of your teeth to improve their color, shape, size and overall look.",
          "[Teeth whitening](/cosmetic-dentistry/teeth-whitening/): professional whitening to lift stains from coffee, tea, wine, tobacco and aging.",
          "[Dental bonding](/cosmetic-dentistry/dental-bonding/): tooth-colored composite resin to repair chips, close small gaps and reshape teeth, often in a single visit.",
          "[Invisalign clear aligners](/cosmetic-dentistry/clear-aligners/): clear, removable aligners that straighten teeth without metal braces.",
          "[Custom night guards](/cosmetic-dentistry/night-guards/): protect your teeth, and your cosmetic work, from grinding and clenching while you sleep.",
        ],
      },
    ],
  },
  {
    id: "smile-makeover-title",
    title: "Smile Makeover: Combining Treatments",
    blocks: [
      {
        kind: "p",
        text: "A smile makeover combines two or more cosmetic treatments to correct several concerns at once. For example, many patients choose porcelain veneers as part of a complete smile makeover, and some patients enhance a newly straightened smile with professional teeth whitening after Invisalign. The dentist will look at your teeth, bite and facial features and recommend the combination that fits your goals.",
      },
      {
        kind: "table",
        head: ["Concern", "Treatments to discuss"],
        rows: [
          ["Stained or dull teeth", "Teeth whitening; veneers or bonding for stains that don't respond to whitening"],
          ["Chips, cracks or worn edges", "Dental bonding or porcelain veneers"],
          ["Small gaps", "Dental bonding, porcelain veneers or Invisalign"],
          ["Crooked or crowded teeth", "Invisalign clear aligners"],
          ["Uneven or misshapen teeth", "Porcelain veneers or dental bonding"],
          ["Grinding or clenching", "Custom night guard"],
        ],
      },
    ],
  },
  {
    id: "advanced-imaging-technology-title",
    title: "Advanced Imaging Technology",
    blocks: [
      {
        kind: "p",
        text: "Amazing Smiles By Design uses digital X-rays, Cone Beam CT (CBCT) scans and the RayFace facial scanner to view teeth, bone and facial structures in detail. [Advanced technology](/patient-information/advanced-technology/)",
      },
    ],
  },
  {
    id: "before-and-after-title",
    title: "Before & After",
    blocks: [{ kind: "p", text: "See examples in our [smile gallery](/smile-gallery/)." }],
  },
  {
    id: "cost-insurance-and-financing-title",
    title: "Cost, Insurance & Financing",
    blocks: [
      {
        kind: "p",
        text: "The cost of cosmetic dentistry depends on the treatments you choose and how many teeth are involved. You'll receive a personalized treatment plan at your consultation.",
      },
      {
        kind: "ul",
        items: [
          "**Insurance:** coverage depends on your plan and whether the treatment is cosmetic. Many dental plans don't cover purely cosmetic treatment, while treatment that also repairs damage may be partly covered. Your PPO insurance is accepted here. [Insurance and payment](/patient-information/insurance-payment-options/)",
          "**Financing:** CareCredit and Cherry. [Financing options](/patient-information/financing-options/)",
          "**Membership plans:** members get 20% off other dental procedures, excluding dental implants and Invisalign. [Membership plans](/specials/)",
        ],
      },
    ],
  },
];

export const cosmeticHeroCard: ServiceExtras = {
  icon: "sparkle",
  eyebrow: "Cosmetic dentistry",
  label: "Science & artistry",
  facts: [
    { icon: "sparkle", title: "Veneers, whitening & bonding", text: "Improve the color, shape and size of your teeth" },
    { icon: "smile", title: "Invisalign clear aligners", text: "Straighten teeth without metal braces" },
    { icon: "shield", title: "Custom night guards", text: "Protect your teeth and your cosmetic work" },
  ],
  related: [
    { label: "Meet Dr. Dudhat", href: "/about-us/dr-keyur-dudhat/" },
    { label: "Smile gallery", href: "/smile-gallery/" },
  ],
};

export const cosmeticFaqs = {
  title: "Cosmetic Dentistry FAQs",
  items: [
    {
      question: "What is cosmetic dentistry?",
      answer:
        "Cosmetic dentistry is dental treatment that improves the appearance of your teeth, including their color, shape, size and alignment. Common treatments include porcelain veneers, teeth whitening, dental bonding and clear aligners.",
    },
    {
      question: "What cosmetic treatments does Amazing Smiles By Design offer?",
      answer:
        "Amazing Smiles By Design in Bensalem, PA offers porcelain veneers, teeth whitening, dental bonding, Invisalign clear aligners and custom night guards.",
    },
    {
      question: "How much does cosmetic dentistry cost?",
      answer:
        "The cost depends on the treatments you choose and how many teeth are involved. Amazing Smiles By Design provides a personalized treatment plan at your consultation and offers financing through CareCredit and Cherry.",
    },
    {
      question: "Is cosmetic dentistry covered by insurance?",
      answer:
        "Coverage depends on your dental plan and whether the treatment is cosmetic. Many dental plans don't cover purely cosmetic treatment, while treatment that also repairs damage may be partly covered. Financing is available through CareCredit and Cherry.",
    },
    {
      question: "What is a smile makeover?",
      answer:
        "A smile makeover combines two or more cosmetic treatments, such as veneers, whitening, bonding or clear aligners, to correct several concerns at once.",
    },
  ],
};

export const cosmeticFinalCta = {
  title: { lead: "Book a Cosmetic Consultation", accent: "in Bensalem" },
  body: "Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020 · Call or text (215) 639-5331",
  button: { label: "Request a Consultation", href: appointmentHref },
  links: [{ label: "Meet Dr. Keyur Dudhat", href: "/about-us/dr-keyur-dudhat/" }],
};

/** ItemList for the CollectionPage (3a), names as in the handoff */
export const cosmeticServiceList = [
  { name: "Porcelain Veneers", path: "/cosmetic-dentistry/porcelain-veneers/" },
  { name: "Teeth Whitening", path: "/cosmetic-dentistry/teeth-whitening/" },
  { name: "Dental Bonding", path: "/cosmetic-dentistry/dental-bonding/" },
  { name: "Clear Aligners", path: "/cosmetic-dentistry/clear-aligners/" },
  { name: "Night Guards", path: "/cosmetic-dentistry/night-guards/" },
];
