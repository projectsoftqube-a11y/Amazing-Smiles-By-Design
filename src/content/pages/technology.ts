import { appointmentHref } from "@/content/navigation";
import { patientInfoCrumb } from "./patient-information";

/**
 * Advanced Technology copy, verbatim from
 * docs/seo-content/02 Patient Info/01 Info/Advanced Technology/02 Content.md (Final v1).
 * Photos: no stock image is labelled as this office's equipment (Developer Handoff).
 */

export const technologyMeta = {
  path: "/patient-information/advanced-technology/",
  title: "CBCT Scans & Advanced Dental Technology | Bensalem, PA",
  description:
    "Amazing Smiles By Design in Bensalem, PA uses CBCT 3D scans, digital X-rays and the RayFace facial scanner for more accurate diagnosis and planning.",
};

export const technologyBreadcrumb = patientInfoCrumb("Advanced Technology", technologyMeta.path);

export const technologyHero = {
  title: { lead: "Advanced Dental Technology", accent: "in Bensalem, PA" },
  intro:
    "At Amazing Smiles By Design, advanced diagnostic tools help us provide a higher level of care. We use cone beam CT (CBCT) scans, digital X-rays and the RayFace facial scanner, which let our dental team view teeth, bone, nerves and facial structures in remarkable detail. These technologies improve diagnostic accuracy and treatment planning.",
  cta: { label: "Request an Appointment", href: appointmentHref },
  /** Hero card: the three systems, each linking to its section */
  systems: [
    { name: "Cone beam CT (CBCT)", detail: "3D images of teeth, jaw bone & nerves", icon: "scan", href: "#cbct-title" },
    { name: "Digital X-rays", detail: "Clear images, reduced radiation", icon: "xray", href: "#xray-title" },
    { name: "RayFace facial scanner", detail: "A 3D scan of facial structures", icon: "face", href: "#rayface-title" },
  ],
};

export const cbct = {
  title: "CBCT 3D Dental Imaging",
  what: {
    title: "What is a CBCT scan?",
    body: "A CBCT (cone beam computed tomography) scan is an advanced 3D imaging technology that captures highly detailed images of the teeth, jawbone, nerves and surrounding structures. Traditional dental X-rays produce flat, two-dimensional images. CBCT creates a complete 3D view of the mouth and facial anatomy, so structures can be examined from multiple angles.",
  },
  how: {
    title: "How a CBCT scan works",
    body: "The CBCT machine rotates around your head and captures hundreds of images in just a few seconds. Software then turns these images into a high-resolution 3D model. Because it captures the whole area in one rotation, it lets the dentist evaluate:",
    areas: [
      "Tooth roots and surrounding bone",
      "Jawbone density and structure",
      "Nerve pathways",
      "Sinus anatomy",
      "Impacted or unerupted teeth",
      "Temporomandibular joint (TMJ) structures",
    ],
  },
  helps: {
    title: "How CBCT helps patients",
    accuracy: {
      label: "More accurate diagnoses:",
      text: "problems that may not appear on traditional X-rays, such as hidden infections, bone abnormalities and impacted teeth, can be detected.",
    },
    planning: {
      label: "Better treatment planning:",
      implants: { label: "dental implants", href: "/restorative-dentistry/dental-implants/" },
      rootCanal: { label: "root canal therapy", href: "/restorative-dentistry/non-surgical-root-canal/" },
      rest: "oral surgery and orthodontic treatment, treatment can be planned precisely before it begins, so implants are placed accurately, nerves are avoided and surrounding structures are protected.",
    },
    safety: { label: "Increased safety:", text: "identifying nerves and sinuses helps reduce risks." },
  },
};

export const digitalXrays = {
  title: "Digital Dental X-Rays",
  body: "Compared with traditional film X-rays, digital X-rays offer improved clarity while significantly reducing radiation exposure. The images appear instantly on a computer screen, so the dentist can review them with you in real time. They help identify:",
  finds: [
    "Tooth decay between teeth",
    "Bone loss from gum disease",
    "Infections at the root of teeth",
    "Developing dental problems that may not yet be visible",
  ],
  after: "Digital images can also be stored and compared over time to track changes in your oral health.",
};

export const rayface = {
  title: "RayFace Facial Scanner",
  body: "The RayFace scanner captures detailed 3D images of your face in seconds. It lets the dentist analyze how your teeth, lips, jaw and facial features work together when designing treatment.",
  benefits: [
    {
      label: "More natural smile design:",
      text: "treatment plans that aim for natural-looking, balanced smiles.",
      icon: "smile",
    },
    {
      label: "Treatment visualization:",
      text: "you may be able to preview potential results of certain treatments, such as cosmetic dentistry or orthodontic care, before treatment begins.",
      icon: "face",
    },
    {
      label: "Greater precision:",
      text: "combined with CBCT imaging and digital dental records, it creates a comprehensive digital model of your oral and facial structures.",
      icon: "scan",
    },
  ],
  link: { label: "Cosmetic dentistry", href: "/cosmetic-dentistry/" },
};

export const technologyFaqs = {
  title: "Dental Technology FAQs",
  items: [
    {
      question: "What is a CBCT scan at the dentist?",
      answer:
        "A CBCT (cone beam computed tomography) scan is a 3D dental imaging technology that captures detailed images of the teeth, jawbone, nerves and surrounding structures, giving a complete 3D view that flat X-rays can't provide.",
    },
    {
      question: "Does Amazing Smiles By Design have a CBCT scanner?",
      answer:
        "Yes. Amazing Smiles By Design in Bensalem, PA uses cone beam CT (CBCT) scans, along with digital X-rays and the RayFace facial scanner.",
    },
    {
      question: "How are digital X-rays different from film X-rays?",
      answer:
        "Digital X-rays offer improved clarity while significantly reducing radiation exposure, and the images appear instantly on a computer screen so the dentist can review them with you right away.",
    },
    {
      question: "What is the RayFace facial scanner used for?",
      answer:
        "The RayFace scanner captures detailed 3D images of your face so the dentist can analyze how your teeth, lips, jaw and facial features work together when designing treatment.",
    },
  ],
};

export const technologyFinalCta = {
  title: { lead: "See What Modern Imaging Can Do", accent: "for Your Care" },
  body: "Call or text (215) 639-5331. Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020.",
};
