# Dentist Near Hulmeville, PA: Developer Handoff

**URL:** `/dentist-hulmeville-pa/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dentist Near Hulmeville, PA | Amazing Smiles By Design</title>
<meta name="description" content="Hulmeville families: a dentist about 5 minutes away via Hulmeville Road in Bensalem. Cleanings, children's dentistry and more. (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/dentist-hulmeville-pa/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist Near Hulmeville, PA | Amazing Smiles By Design">
<meta property="og:description" content="Hulmeville families: a dentist about 5 minutes away via Hulmeville Road in Bensalem. Cleanings, children's dentistry and more. (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/dentist-hulmeville-pa/">
```

## 2. Page build rules

- **One H1:** "Your Dentist Near Hulmeville, PA". Breadcrumb: Home › Areas We Serve › Hulmeville, PA.
- **Drive times and distances** come from Google Maps (checked 5 Oct 2026). Keep the "Google Maps estimate / changes with traffic" note.
- **Embed a Google Map** of the office (3101 Bristol Rd) below the directions section; no fake 'service area' polygons.
- **Link only to pages that are live.** Service + location pages (e.g. `/dental-implants-langhorne-pa/`) and other town pages are being built in later batches; if a target isn't live at launch, unlink the text until it is.
- **Unique page:** don't copy blocks between town pages. Each town keeps its own route, local section and FAQs.
- **No reviews schema** (no AggregateRating/Review). Don't add 'serving since' or patient-count claims.
- **Always:** server-render all text; crawlable `<a href>` links; phone `tel:+12156395331`, text `sms:+12156395331`; NAP identical to the homepage and footer.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

Same `#dentist` `@id` as the homepage; `areaServed` names this page's area only (the hub lists all).

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.amazingsmilesbydesign.com/dentist-hulmeville-pa/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/dentist-hulmeville-pa/",
      "name": "Dentist Near Hulmeville, PA | Amazing Smiles By Design",
      "description": "Hulmeville families: a dentist about 5 minutes away via Hulmeville Road in Bensalem. Cleanings, children's dentistry and more. (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-hulmeville-pa/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/dentist-hulmeville-pa/#breadcrumb",
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
          "name": "Areas We Serve",
          "item": "https://www.amazingsmilesbydesign.com/areas-we-serve/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Hulmeville, PA",
          "item": "https://www.amazingsmilesbydesign.com/dentist-hulmeville-pa/"
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
          "name": "Hulmeville, PA",
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-hulmeville-pa/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-hulmeville-pa/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is Amazing Smiles By Design from Hulmeville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "About 2.0 miles, typically a 5-minute drive via Hulmeville Road (PA-513) and Bristol Road, according to Google Maps."
          }
        },
        {
          "@type": "Question",
          "name": "Do you see children from Hulmeville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Amazing Smiles By Design provides children's dentistry, and a child's first regular visit should take place just after their first birthday."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a dental plan for Hulmeville families without insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Child plan is $212 a year (13 and younger) and the Regular plan is $269 a year. Both include cleanings, exams, routine X-rays and an emergency exam."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
