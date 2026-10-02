/**
 * Home page copy. Source: docs/seo-content/01 Core/01 Home/Home/02 Content.md (Final v1, 2 Oct 2026).
 * Text is verbatim; only structure was added. Keep it in sync with the JSON-LD
 * (src/lib/schema.ts reads the FAQs and offers from here and from site.ts).
 */

import { appointmentHref, emergencyHref } from "../navigation";

export const homeMeta = {
  path: "/",
  title: "Bensalem Dentist | Amazing Smiles By Design",
  description:
    "Bensalem dentist Dr. Keyur Dudhat offers family, implant and cosmetic care. PPO insurance accepted, plus membership plans. Call (215) 639-5331.",
  ogDescription: "Family, implant and cosmetic dentistry with Dr. Keyur Dudhat in Bensalem, PA.",
};

export const homeHero = {
  /** H1, split so the last phrase can carry the italic accent */
  title: { lead: "Bensalem Dentist for Family, Implant and", accent: "Cosmetic Care" },
  intro:
    "Amazing Smiles By Design is a dental practice at 3101 Bristol Road, Suite 1, in Bensalem, Pennsylvania 19020. Dr. Keyur Dudhat, DMD, provides general, restorative and cosmetic dentistry for the whole family, with a special focus on dental implants and cosmetic care. We accept PPO dental insurance, are in-network with a variety of insurance plans, and offer membership plans for patients without insurance.",
  secondaryCta: { label: "Request an Appointment", href: appointmentHref },
  newPatientLink: { label: "New patient? Here's what to expect", href: "/patient-information/new-patients/" },
  facts: [
    { icon: "pin", text: "3101 Bristol Road, Suite 1, Bensalem, PA 19020" },
    { icon: "clock", text: "Open Monday to Thursday" },
    { icon: "shield", text: "PPO insurance accepted" },
    { icon: "tag", text: "No insurance? Membership plans for adults ($269/yr) and children ($212/yr)" },
    { icon: "alert", text: "$59 emergency exam for new patients" },
  ],
} as const;

export const homeCare = {
  title: "Gentle, Personal Dental Care in Bensalem, PA",
  paragraphs: [
    "At Amazing Smiles By Design, we treat you like family. Dr. Dudhat is committed to personalized care in a supportive environment, and our team takes pride in building lasting relationships and keeping every visit relaxed and stress-free. If dental visits make you nervous, tell us. You're welcome to bring headphones and music, and you can ask us about dental sedation options.",
    "Whether you need a routine cleaning, a crown, veneers or whitening, your care is planned around your needs and goals.",
  ],
  cta: { label: "Meet Dr. Dudhat", href: "/about-us/dr-keyur-dudhat/" },
};

export const homeServices = {
  title: "Dental Services at Our Bensalem Office",
  intro:
    "As a family and cosmetic dentist in Bensalem, we look after everything from children's first checkups to dental implants. Choose a service to learn more.",
};

export const homeDoctor = {
  title: "Meet Dr. Keyur Dudhat, DMD",
  paragraphs: [
    "Dr. Keyur Dudhat is a dentist in Bensalem, PA. He earned his Doctor of Dental Medicine degree from Temple University, after completing his undergraduate studies at Penn State University. He was born and raised in Lansdale, Pennsylvania.",
    "Dr. Dudhat provides comprehensive dental care with a special focus on implant and cosmetic dentistry, and he regularly pursues advanced training in procedures such as dental implants and veneers. He also volunteers with organizations like Missions of Mercy in Pennsylvania, providing dental care to underserved communities. Outside the office, he enjoys traveling, hiking, scuba diving and golf.",
  ],
  /** At-a-glance facts, each taken from the bio above */
  facts: [
    { label: "Degree", value: "Doctor of Dental Medicine (DMD), Temple University" },
    { label: "Undergraduate", value: "Penn State University" },
    { label: "Special focus", value: "Dental implants and cosmetic dentistry" },
    { label: "Community", value: "Volunteers with Missions of Mercy in Pennsylvania" },
    { label: "Hometown", value: "Lansdale, Pennsylvania" },
  ],
  link: { label: "Read Dr. Dudhat's full bio", href: "/about-us/dr-keyur-dudhat/" },
};

export const homeTechnology = {
  title: "Technology for Clear, Accurate Diagnosis",
  intro:
    "Our office uses modern imaging that lets our team see your teeth, bone, nerves and facial structures in detail, to help with diagnosis and treatment planning:",
  items: [
    { term: "Cone beam CT (CBCT)", detail: "3D images of your teeth, jaw bone and nerves." },
    { term: "Digital X-rays", detail: "clear images with reduced radiation exposure." },
    { term: "RayFace facial scanner", detail: "a 3D scan of your facial structures." },
  ],
  link: { label: "Learn about our technology", href: "/patient-information/advanced-technology/" },
};

export const homeCoverage = {
  title: "Insurance, Membership Plans and Financing",
  insurance: {
    title: "Dental insurance",
    body: "Your PPO insurance is accepted here. We are in-network with a variety of insurance plans and work with carriers including Aetna, Anthem, Cigna, Delta Dental, Humana, MetLife and UnitedHealthcare. Coverage depends on your plan, so call us to confirm your plan before your visit. We bill your insurance company and track your claim. Payment for your share is due at the time of service.",
    link: { label: "Insurance and payment details", href: "/patient-information/insurance-payment-options/" },
  },
  membership: {
    title: "No insurance? No problem.",
    intro: "Our in-office membership plans cover your preventive care for one annual fee:",
    cta: { label: "See all specials", href: "/specials/" },
  },
  financing: {
    title: "Financing",
    body: "You can spread the cost of treatment over time with CareCredit or Cherry, subject to approval.",
    link: { label: "Financing options", href: "/patient-information/financing-options/" },
  },
};

export const homeEmergency = {
  title: "Dental Emergency? Call Us First",
  body: {
    before: "If you have a toothache, a broken or knocked-out tooth, swelling or a lost filling or crown, call or text",
    after:
      "and tell us what happened so our team can help with next steps. New patients can have an emergency exam, including any necessary X-rays, for a one-time fee of $59.",
  },
  cta: { label: "Emergency appointment", href: emergencyHref },
  link: { label: "About emergency dentistry", href: "/general-dentistry/emergency-dentistry/" },
};

export const homeReviews = {
  title: "What Our Patients Say",
  reviews: [
    {
      quote:
        "I had an absolutely good experience at this dental office. The staff were incredibly welcoming, the environment was comfortable and modern, and everything about the visit was just top-notch. Highly recommend.",
      name: "Renee V.",
      date: "February 2026",
    },
    {
      quote:
        "I just recently had some visits to Amazing Smiles. They took Xrays and cleaned my teeth. I returned to get an impression for a nightguard and then to actually get the nightguard. The dentist and staff are friendly, polite, and professional.",
      name: "Louis F.",
      date: "December 2025",
    },
    {
      quote:
        "I had a filling and a root canal at Amazing Smiles by Design and the experience was amazing-completely pain-free! The dentist was gentle, professional, and made me feel comfortable throughout the entire process.",
      name: "Anton A.",
      date: "August 2025",
    },
  ],
  link: { label: "Read more patient reviews", href: "/about-us/patient-reviews/" },
};

export const homeGallery = {
  title: "See Real Patient Results",
  body: "Browse before-and-after photos from patients treated at our Bensalem office, from teeth whitening to porcelain veneers.",
  link: { label: "View the smile gallery", href: "/smile-gallery/" },
};

export const homeAreas = {
  title: "Serving Bensalem and Nearby Communities",
  intro:
    "Looking for a dentist in 19020 or nearby? Our office is on Bristol Road in Bensalem, and we proudly serve patients from:",
  /** `path: null` = listed without a link (Bensalem is this page) */
  towns: [
    { name: "Bensalem", path: null },
    { name: "Feasterville", path: "/dentist-feasterville-pa/" },
    { name: "Fairless Hills", path: "/dentist-fairless-hills-pa/" },
    { name: "Trevose", path: "/dentist-trevose-pa/" },
    { name: "Hulmeville", path: "/dentist-hulmeville-pa/" },
    { name: "Langhorne", path: "/dentist-langhorne-pa/" },
    { name: "Parkland", path: "/dentist-parkland-pa/" },
  ],
  link: { label: "All areas we serve", href: "/areas-we-serve/" },
};

export const homeLocation = {
  title: "Office Hours and Location",
};

export const homeFaqs = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "Where is Amazing Smiles By Design located?",
      answer:
        "Amazing Smiles By Design is at 3101 Bristol Road, Suite 1, Bensalem, PA 19020. The office welcomes patients from Bensalem and nearby communities, including Trevose, Feasterville, Langhorne, Fairless Hills and Hulmeville.",
    },
    {
      question: "Who is the dentist at Amazing Smiles By Design?",
      answer:
        "Dr. Keyur Dudhat, DMD, provides care at Amazing Smiles By Design. He earned his Doctor of Dental Medicine degree from Temple University and focuses on comprehensive care, with a special interest in dental implants and cosmetic dentistry.",
    },
    {
      question: "What dental services do you offer?",
      answer:
        "We offer general and family dentistry (checkups, cleanings, children's dentistry, gum treatment, extractions and emergency care), restorative dentistry (implants, crowns, bridges, fillings, root canals, inlays and onlays, dentures) and cosmetic dentistry (porcelain veneers, clear aligners, teeth whitening, bonding and night guards).",
    },
    {
      question: "Do you accept my dental insurance?",
      answer:
        "We accept PPO dental insurance and work with carriers including Aetna, Anthem, Cigna, Delta Dental, Humana, MetLife and UnitedHealthcare. Coverage depends on your specific plan, so call (215) 639-5331 to confirm your plan before your visit.",
    },
    {
      question: "What if I don't have dental insurance?",
      answer:
        "Patients without insurance can join an in-office membership plan: the Regular Membership Plan is $269 a year, the Perio Maintenance Plan is $450 a year, and the Child Membership Plan (ages 13 and younger) is $212 a year. We also offer financing through CareCredit and Cherry.",
    },
    {
      question: "Do you see children?",
      answer:
        "Yes. We provide children's dentistry, including checkups, cleanings, fluoride treatments and dental sealants. Families without insurance can use our Child Membership Plan for children 13 and younger.",
    },
    {
      question: "What should I do in a dental emergency?",
      answer:
        "Call or text (215) 639-5331 as soon as possible and describe what happened. New patients can have an emergency exam, including any necessary X-rays, for a one-time fee of $59.",
    },
    {
      question: "What are your office hours?",
      answer:
        "We are open Monday 8 am to 6 pm, Tuesday 8 am to 5 pm, Wednesday 8 am to 6 pm and Thursday 8 am to 2 pm. The office is closed Friday through Sunday.",
    },
    {
      question: "Do you offer financing for dental treatment?",
      answer:
        "Yes. We work with CareCredit and Cherry, which let you pay for treatment over time, subject to approval. Ask our team which option suits your treatment plan.",
    },
  ],
};

export const homeFinalCta = {
  title: { lead: "Book a Visit With Your", accent: "Bensalem Dentist" },
  body: "Call or text (215) 639-5331, or request an appointment online.",
};
