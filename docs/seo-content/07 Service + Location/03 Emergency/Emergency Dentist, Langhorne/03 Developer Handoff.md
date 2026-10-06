# Emergency Dentist, Langhorne: Developer Handoff

**URL:** `/emergency-dentist-langhorne-pa/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Emergency Dentist Near Langhorne, PA | Amazing Smiles</title>
<meta name="description" content="Toothache or swelling in Langhorne? Same-day visits whenever possible, about 10 minutes away in Bensalem. Call or text (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/emergency-dentist-langhorne-pa/">
<meta property="og:type" content="website">
<meta property="og:title" content="Emergency Dentist Near Langhorne, PA | Amazing Smiles">
<meta property="og:description" content="Toothache or swelling in Langhorne? Same-day visits whenever possible, about 10 minutes away in Bensalem. Call or text (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/emergency-dentist-langhorne-pa/">
```

## 2. Page build rules

- **One H1:** "Emergency Dentist Near Langhorne, PA". Call/text button and 911 line above the fold.
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
      "@id": "https://www.amazingsmilesbydesign.com/emergency-dentist-langhorne-pa/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/emergency-dentist-langhorne-pa/",
      "name": "Emergency Dentist Near Langhorne, PA | Amazing Smiles",
      "description": "Toothache or swelling in Langhorne? Same-day visits whenever possible, about 10 minutes away in Bensalem. Call or text (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/emergency-dentist-langhorne-pa/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/emergency-dentist-langhorne-pa/#breadcrumb",
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
          "name": "Langhorne, PA",
          "item": "https://www.amazingsmilesbydesign.com/emergency-dentist-langhorne-pa/"
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
          "@type": "Place",
          "name": "Langhorne, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
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
      "@id": "https://www.amazingsmilesbydesign.com/emergency-dentist-langhorne-pa/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/emergency-dentist-langhorne-pa/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How fast can I see a dentist near Langhorne?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Text or call (215) 639-5331. Amazing Smiles By Design, about 10 minutes from Langhorne, offers same-day emergency appointments whenever possible during office hours."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do for a toothache before my appointment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rinse with warm water, floss gently to remove trapped food, use a cold compress for swelling, and don't put aspirin directly on the gums. Then call or text the office."
          }
        },
        {
          "@type": "Question",
          "name": "When should I go to the ER instead?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Go to the nearest emergency room or call 911 if you have severe facial swelling, trouble breathing or swallowing, or bleeding that won't stop."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
