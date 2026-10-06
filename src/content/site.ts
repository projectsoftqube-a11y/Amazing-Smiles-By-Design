/**
 * Business facts. The single source for NAP, hours, offers and contact links.
 * Header, footer, pages and JSON-LD all read from here, so a change here updates
 * every place it appears. Values match the SEO team's Home content (Final v1, 2 Oct 2026)
 * and must stay identical to the Google Business Profile.
 */

export const SITE_URL = "https://www.amazingsmilesbydesign.com";

export const practice = {
  name: "Amazing Smiles By Design",
  dentist: {
    name: "Keyur Dudhat",
    displayName: "Dr. Keyur Dudhat",
    degree: "DMD",
    degreeName: "Doctor of Dental Medicine",
    school: "Temple University",
    undergrad: "Penn State University",
    hometown: "Lansdale, Pennsylvania",
    bioPath: "/about-us/dr-keyur-dudhat/",
  },
  address: {
    street: "3101 Bristol Road, Suite 1",
    city: "Bensalem",
    region: "PA",
    regionName: "Pennsylvania",
    postalCode: "19020",
    country: "US",
  },
  phone: {
    display: "(215) 639-5331",
    e164: "+12156395331",
    schema: "+1-215-639-5331",
  },
  fax: {
    display: "(215) 639-1921",
    schema: "+1-215-639-1921",
  },
  email: "info@amazingsmilesbydesign.com",
  googlePlaceId: "ChIJzZkTohhNwYkRwJ2tUx9cZ98",
} as const;

/** "Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020, (215) 639-5331" */
export const napLine = `${practice.name}, ${practice.address.street}, ${practice.address.city}, ${practice.address.region} ${practice.address.postalCode}, ${practice.phone.display}`;

export const contactLinks = {
  call: `tel:${practice.phone.e164}`,
  text: `sms:${practice.phone.e164}`,
  email: `mailto:${practice.email}`,
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=3101+Bristol+Road+Suite+1+Bensalem+PA+19020",
  map: `https://www.google.com/maps/place/?q=place_id:${practice.googlePlaceId}`,
  /** Keyless embed (no API key or billing); the Location section lazy-loads it. */
  mapEmbed:
    "https://maps.google.com/maps?q=Amazing+Smiles+By+Design,+3101+Bristol+Road+Suite+1,+Bensalem,+PA+19020&z=15&output=embed",
} as const;

/** Google Maps directions to the office starting from a town ("Langhorne, PA") */
export const directionsFrom = (origin: string) => `${contactLinks.directions}&origin=${encodeURIComponent(origin)}`;

export type DayHours = {
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  /** 24h "HH:MM", or null when closed */
  opens: string | null;
  closes: string | null;
};

export const hours: DayHours[] = [
  { day: "Monday", opens: "08:00", closes: "18:00" },
  { day: "Tuesday", opens: "08:00", closes: "17:00" },
  { day: "Wednesday", opens: "08:00", closes: "18:00" },
  { day: "Thursday", opens: "08:00", closes: "14:00" },
  { day: "Friday", opens: null, closes: null },
  { day: "Saturday", opens: null, closes: null },
  { day: "Sunday", opens: null, closes: null },
];

/** Rows as shown on the page: Friday to Sunday share one "Closed" row. */
export const hoursTable: { label: string; value: string; days: DayHours["day"][] }[] = [
  { label: "Monday", value: "8:00 am – 6:00 pm", days: ["Monday"] },
  { label: "Tuesday", value: "8:00 am – 5:00 pm", days: ["Tuesday"] },
  { label: "Wednesday", value: "8:00 am – 6:00 pm", days: ["Wednesday"] },
  { label: "Thursday", value: "8:00 am – 2:00 pm", days: ["Thursday"] },
  { label: "Friday – Sunday", value: "Closed", days: ["Friday", "Saturday", "Sunday"] },
];

export const timeZone = "America/New_York";

export type MembershipPlan = {
  name: string;
  audience: string;
  price: number;
  /** Shown after the price */
  term: string;
  includes: string[];
  /** Used for the Offer description in JSON-LD */
  schemaDescription: string;
};

export const membershipPlans: MembershipPlan[] = [
  {
    name: "Regular Membership Plan",
    audience: "Patients with no insurance",
    price: 269,
    term: "per year",
    includes: ["2 professional cleanings", "2 checkup exams", "Routine X-rays", "Emergency exam"],
    schemaDescription:
      "Annual fee for patients with no insurance. Includes 2 professional cleanings, 2 checkup exams, routine X-rays and an emergency exam.",
  },
  {
    name: "Perio Maintenance Plan",
    audience: "Patients with no insurance",
    price: 450,
    term: "per year",
    includes: [
      "4 periodontal maintenance visits",
      "2 checkup exams & screenings",
      "Routine X-rays",
      "Emergency exam",
    ],
    schemaDescription:
      "Annual fee for patients with no insurance. Includes 4 periodontal maintenance visits, 2 checkup exams and screenings, routine X-rays and an emergency exam.",
  },
  {
    name: "Child Membership Plan",
    audience: "Ages 13 and younger, no insurance",
    price: 212,
    term: "per year",
    includes: [
      "2 professional cleanings",
      "2 checkup exams",
      "2 fluoride treatments",
      "Routine X-rays",
      "Emergency exam",
    ],
    schemaDescription:
      "Annual fee for children ages 13 and younger with no insurance. Includes 2 professional cleanings, 2 checkup exams, 2 fluoride treatments, routine X-rays and an emergency exam.",
  },
];

export const emergencySpecial = {
  name: "Emergency Visit Special",
  audience: "New patients",
  price: 59,
  term: "one-time fee",
  includes: "Includes the necessary exam and X-rays.",
  schemaDescription: "One-time fee for new patients. Includes the necessary exam and X-rays.",
} as const;

export const insuranceCarriers = [
  "Aetna",
  "Anthem",
  "Cigna",
  "Delta Dental",
  "Humana",
  "MetLife",
  "UnitedHealthcare",
] as const;

export const financingPartners = ["CareCredit", "Cherry"] as const;
