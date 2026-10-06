# Emergency Dentist, Bucks County: Developer Handoff

**URL:** `/emergency-dentist-bucks-county/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Emergency Dentist in Bucks County, PA | Amazing Smiles</title>
<meta name="description" content="Emergency dentist in Bucks County: same-day visits whenever possible, Mon–Thu, in Bensalem. $59 new-patient emergency exam. Call or text (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/emergency-dentist-bucks-county/">
<meta property="og:type" content="website">
<meta property="og:title" content="Emergency Dentist in Bucks County, PA | Amazing Smiles">
<meta property="og:description" content="Emergency dentist in Bucks County: same-day visits whenever possible, Mon–Thu, in Bensalem. $59 new-patient emergency exam. Call or text (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/emergency-dentist-bucks-county/">
```

## 2. Page build rules

- **One H1:** "Emergency Dentist in Bucks County, PA". Put the call/text button and the 911 line above the fold.
- **Never claim 24-hour or weekend care.** The hours table must match the practice hours.
- **First-aid tips are general guidance**; keep the "general first-aid steps" framing.
- **Unique page:** this page must not reuse paragraphs from the main service page or the town page; it links to them for detail.
- **Drive times** are Google Maps estimates (5 Oct 2026); keep the 'changes with traffic' note.
- **No AggregateRating/Review schema** and no 'serving since' or patient-count claims.
- **Always:** server-render all text; crawlable `<a href>` links; phone `tel:+12156395331`, text `sms:+12156395331`; NAP identical to the homepage and footer.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

Same `#dentist` `@id` as the homepage; `areaServed` names this page's area.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.amazingsmilesbydesign.com/emergency-dentist-bucks-county/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/emergency-dentist-bucks-county/",
      "name": "Emergency Dentist in Bucks County, PA | Amazing Smiles",
      "description": "Emergency dentist in Bucks County: same-day visits whenever possible, Mon–Thu, in Bensalem. $59 new-patient emergency exam. Call or text (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/emergency-dentist-bucks-county/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/emergency-dentist-bucks-county/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.amazingsmilesbydesign.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Emergency Dentistry",
          "item": "https://www.amazingsmilesbydesign.com/general-dentistry/emergency-dentistry/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Bucks County",
          "item": "https://www.amazingsmilesbydesign.com/emergency-dentist-bucks-county/"
        }
      ]
    },
    {
      "@type": "Dentist",
      "@id": "https://www.amazingsmilesbydesign.com/#dentist",
      "name": "Amazing Smiles By Design",
      "url": "https://www.amazingsmilesbydesign.com/",
      "telephone": "+1-215-639-5331",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3101 Bristol Road, Suite 1",
        "addressLocality": "Bensalem",
        "addressRegion": "PA",
        "postalCode": "19020",
        "addressCountry": "US"
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Bucks County, Pennsylvania"
        }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Wednesday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Tuesday",
          "opens": "08:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Thursday",
          "opens": "08:00",
          "closes": "14:00"
        }
      ]
    }
  ]
}
```

### 3b. FAQPage (optional)

No Google rich result since May 2026. Harmless, and keeps the Q&A machine-readable.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.amazingsmilesbydesign.com/emergency-dentist-bucks-county/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/emergency-dentist-bucks-county/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is there an emergency dentist in Bucks County that sees patients the same day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amazing Smiles By Design in Bensalem, Bucks County, books same-day emergency visits whenever possible, Monday to Thursday (see the hours table above)."
          }
        },
        {
          "@type": "Question",
          "name": "Are you open on weekends for emergencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The office is closed Friday to Sunday. For severe facial swelling, trouble breathing or swallowing, or bleeding that won't stop, call 911 or go to the nearest emergency room."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do with a knocked-out tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pick it up by the crown, not the root, rinse it gently with water if it's dirty, keep it moist (ideally in milk) and get care within about an hour. Call or text (215) 639-5331 during office hours, or go to the nearest emergency room if we're closed."
          }
        },
        {
          "@type": "Question",
          "name": "How much is an emergency visit for a new patient?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "New patients can use the $59 Emergency Visit Special, which includes the necessary exam and X-rays."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
