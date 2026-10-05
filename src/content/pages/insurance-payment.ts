import { appointmentHref } from "@/content/navigation";
import { patientInfoCrumb } from "./patient-information";

/**
 * Insurance & Payment Options copy, verbatim from
 * docs/seo-content/02 Patient Info/01 Info/Insurance & Payment/02 Content.md (Final v1).
 */

export const insuranceMeta = {
  path: "/patient-information/insurance-payment-options/",
  title: "Dental Insurance & PPO Plans Accepted | Bensalem Dentist",
  description:
    "Your PPO insurance is accepted at Amazing Smiles By Design in Bensalem, PA. See carriers we work with, how we bill your insurance and payment policies.",
};

export const insuranceBreadcrumb = patientInfoCrumb("Insurance & Payment", insuranceMeta.path);

export const insuranceHero = {
  /** H1 "Dental Insurance and Payment Options", with "&" (client rule for titles) */
  title: { lead: "Dental Insurance &", accent: "Payment Options" },
  intro:
    "Your PPO insurance is accepted at Amazing Smiles By Design in Bensalem, PA. We are in-network with a variety of insurance plans, and we're happy to help you navigate your dental insurance. To confirm your plan before your visit, call (215) 639-5331.",
  cta: { label: "Request an Appointment", href: appointmentHref },
};

export const insurancePlans = {
  title: "Dental Insurance Plans We Work With",
  lead: "We work with a long list of dental insurance carriers and plans, including:",
  featured: [
    "Aetna (including Aetna Medicare)",
    "Anthem",
    "Cigna",
    "Delta Dental",
    "The Guardian Life Insurance Company",
    "Humana",
    "Kaiser Permanente",
    "MetLife",
    "Principal",
    "United Concordia",
    "UnitedHealthcare (including UnitedHealthcare Medicare)",
  ],
  fullListLabel: "See the full list of insurance plans we work with",
  missing: "Don't see your plan? Call (215) 639-5331 and ask.",
};

/**
 * Every carrier and plan on the current site's insurance page (fetched 5 Oct 2026),
 * names exactly as written there (Developer Handoff: keep the text in the HTML so
 * patients can find their plan with Ctrl+F). Only two Blue Cross Blue Shield entries
 * are listed, so never claim "Blue Cross Blue Shield" in general.
 */
export const insuranceCarriers = [
  "Administrative Services Only (ASO)",
  "Aegis Administrative Services, Inc*",
  "Aetna Commercial",
  "Aetna DHM Maximum Care – Continental Life Insurance Company*",
  "Aetna Medicare",
  "Alacrity LLC – Docs Health",
  "Alignment",
  "Altwood – Medicare Only",
  "AlwaysCare/StarMount/Unum*",
  "AmeriBen Solutions*",
  "American Public Life Insurance Company*",
  "Anthem",
  "Apex Dental – American Financial Security Life Insurance",
  "Beam Dental (Excludes Careington Providers in WA)",
  "Best Health Plans",
  "Blackhawk – Array Health",
  "Blue Cross Blue Shield of Michigan",
  "Blue Shield of CA",
  "Boon Administrative Services, Inc",
  "Bright Benefits – National Guardian Life Insurance Company*",
  "CareFirst",
  "Century Healthcare*",
  "CHUBB",
  "Cigna – Zelis*",
  "Cigna DHV/Cigna Flex – Loyal American Insurance Company*",
  "Citizens Security Life*",
  "Colonial Life*",
  "Companion Life",
  "connection",
  "Corporate Benefit Services*",
  "Cypress – DenteMax Plus",
  "Delta Dental",
  "Delta Health Systems",
  "Dental Care Plus Group – DenteMax Plus",
  "Dent Max",
  "DentaQuest",
  "DentaQuest – Atlantic Dental, Inc*",
  "DenteMax – Lease Network*",
  "DenteMax Plus",
  "DNOA – Blue Cross Blue Shield: Texas, Illinois, New Mexico, Oklahoma, Montana and Kansas City",
  "DNOA – Dearborn National",
  "DNOA – LineCo",
  "DocsHealth (Reservists)",
  "dominion",
  "Electrical Components International",
  "Emblem Health/GHI",
  "Encore Dental/Stonebridge Life",
  "Enterprise Life Insurance",
  "Equitable Financial Life Insurance Company of America",
  "FBG Holding, Inc.",
  "Fidelio Dental Insurance*",
  "First Continental Life",
  "Frank Vaccaro",
  "Free Market Administrators",
  "Freedom Life",
  "GEHA",
  "GEHA Solution – Lease Network",
  "Geha",
  "Global Smile – American Financial Security Life Insurance",
  "Group Administrators*",
  "Harrington/Colonial Life*",
  "Health Resources/Dental Health Options",
  "Healthgram*",
  "HealthNet of California and Oregon",
  "Healthplex*",
  "Healthplan Services Inc.",
  "Healthscope Benefits, Inc*",
  "Healthy Choice Plan Administrators Corporation",
  "HRI",
  "Humana",
  "Humana (Nationwide) Medicare will only access Care PPO",
  "Humana (Zelis)",
  "Humana Insurance Company and Arcadian Health Plan, Inc.",
  "Imperial*",
  "Kaiser Permanente",
  "Key Benefit Administrators",
  "LEHB",
  "LifeShield*",
  "Lincoln Financial",
  "Local 786 Building Material Welfare Fund",
  "Management Benefit Fund (ASO)",
  "Manhattan Life*",
  "Medical Mutual",
  "MedMutual Protect*",
  "Merchants Benefit Administrators",
  "MetLife",
  "Mid-West National Life Insurance Company of Tennessee (Health Markets)",
  "Morgan White – Standard Life/Am First*",
  "Multiflex Dental – MBA",
  "Mutual of Omaha®",
  "My WellSpent",
  "National Foundation Life",
  "National General Accident and Health",
  "Nationwide Insurance®",
  "NetCare Life & Health Insurance Company*",
  "New Era Life (NEL) – Philadelphia American",
  "Nippon Life®",
  "Pacific Life",
  "Peoples Benefit Life Insurance Company",
  "Pinnacle Peak Administrators – DWS Holdings",
  "Preferred Insurance Specialist",
  "PrimeCare Benefits Group*",
  "Principal",
  "Printing Specialties/Northwest",
  "Prudential*",
  "Renaissance",
  "Reserve National Insurance Company",
  "Roofers Union Welfare Trust Fund",
  "Self Insured Services Co.",
  "SISCO",
  "SkyGen*",
  "Sparkle Care – American Financial Security Life Insurance",
  "Staff Benefits Management & Administrators*",
  "Strategic Limited Partners",
  "Suffolk County Employee Benefit Plan",
  "Superior Dental Care*",
  "SureBridge (Health Markets)",
  "Teamsters",
  "The Guardian Life Insurance Company",
  "Trans America*",
  "TransDental Dental Plan*",
  "TransSmile Dental Plan*",
  "Tuckpointers Local 52",
  "UHC Optum Dental",
  "UMR*",
  "Unimerica Dental*",
  "United Concordia – UCCI",
  "United Group Programs, Inc",
  "United HealthCare Commercial",
  "United HealthCare Medicare",
  "Unitas",
] as const;

export const insuranceBilling = {
  title: "How Insurance Billing Works",
  points: [
    { label: "We bill your insurance for you.", text: "As a courtesy, we bill your insurance company and track your claim.", icon: "receipt" },
    { label: "Payment is due at the time of service.", text: null, icon: "card" },
    {
      label: "Claims usually take four to six weeks.",
      text: "Most insurance companies should respond to the claim within four to six weeks. Any remaining cost is your responsibility.",
      icon: "clock",
    },
    {
      label: "You're responsible for the fees charged by our office,",
      text: "no matter what your insurance coverage may be.",
      icon: "info",
    },
  ],
};

export const insuranceNoInsurance = {
  title: "No Insurance? No Problem",
  body: "Patients without insurance can join an in-office membership plan: $269 a year for the Regular plan, $450 a year for periodontal maintenance and $212 a year for children 13 and younger. Members get 20% off all other dental procedures, excluding dental implants and Invisalign.",
  link: { label: "Membership plans & specials", href: "/specials/" },
};

export const insuranceFinancing = {
  title: "Financing Options",
  body: "You can spread the cost of treatment over time with CareCredit or Cherry.",
  link: { label: "Financing options", href: "/patient-information/financing-options/" },
};

export const insuranceFaqs = {
  title: "Insurance & Payment FAQs",
  items: [
    {
      question: "Do you accept PPO dental insurance?",
      answer:
        "Yes. Your PPO insurance is accepted at Amazing Smiles By Design, and we are in-network with a variety of insurance plans. Call (215) 639-5331 to confirm your plan before your visit.",
    },
    {
      question: "Which dental insurance companies do you work with?",
      answer:
        "We work with many carriers, including Aetna, Anthem, Cigna, Delta Dental, Guardian, Humana, Kaiser Permanente, MetLife, Principal, United Concordia and UnitedHealthcare.",
    },
    {
      question: "Will you bill my insurance company?",
      answer:
        "Yes. As a courtesy, we bill your insurance company and track your claim. Most insurance companies respond within four to six weeks.",
    },
    {
      question: "When is payment due?",
      answer:
        "Payment is due at the time of service. Any cost remaining after your insurance company responds to the claim is your responsibility.",
    },
    {
      question: "Does dental insurance cover implants or crowns?",
      answer:
        "Coverage for treatments such as dental implants and crowns depends on your specific plan. Call (215) 639-5331 with your plan details, and our team will help you navigate your benefits.",
    },
    {
      question: "What if I don't have dental insurance?",
      answer:
        "You can join one of our in-office membership plans, or spread the cost of treatment with CareCredit or Cherry financing.",
    },
  ],
};

export const insuranceFinalCta = {
  title: { lead: "Questions About", accent: "Your Coverage?" },
  body: "Call (215) 639-5331. Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020.",
};
