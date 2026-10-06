# Dentist Near Langhorne, PA: Developer Handoff

**URL:** `/dentist-langhorne-pa/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dentist Near Langhorne, PA | Amazing Smiles By Design</title>
<meta name="description" content="Langhorne patients: family, cosmetic, implant and emergency dentistry about 10 minutes away in Bensalem. New patients welcome. Call (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/dentist-langhorne-pa/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist Near Langhorne, PA | Amazing Smiles By Design">
<meta property="og:description" content="Langhorne patients: family, cosmetic, implant and emergency dentistry about 10 minutes away in Bensalem. New patients welcome. Call (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/dentist-langhorne-pa/">
```

## 2. Page build rules

- **One H1:** "Your Dentist Near Langhorne, PA". Breadcrumb: Home › Areas We Serve › Langhorne, PA.
- **Langhorne Manor** is a section here, not its own page.
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-langhorne-pa/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/dentist-langhorne-pa/",
      "name": "Dentist Near Langhorne, PA | Amazing Smiles By Design",
      "description": "Langhorne patients: family, cosmetic, implant and emergency dentistry about 10 minutes away in Bensalem. New patients welcome. Call (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-langhorne-pa/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/dentist-langhorne-pa/#breadcrumb",
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
          "name": "Langhorne, PA",
          "item": "https://www.amazingsmilesbydesign.com/dentist-langhorne-pa/"
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-langhorne-pa/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-langhorne-pa/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is Amazing Smiles By Design from Langhorne, PA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The office at 3101 Bristol Road in Bensalem is about 4.6 miles from Langhorne, typically a 10-minute drive via South Bellevue Avenue, depending on traffic."
          }
        },
        {
          "@type": "Question",
          "name": "Do you accept new patients from Langhorne?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Amazing Smiles By Design welcomes new patients from Langhorne, Langhorne Manor and the rest of the 19047 area. Call or text (215) 639-5331 to book."
          }
        },
        {
          "@type": "Question",
          "name": "Do you see children from Langhorne?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The practice provides children's dentistry, including exams, cleanings, fluoride treatments and sealants. A child's first regular visit should take place just after their first birthday."
          }
        },
        {
          "@type": "Question",
          "name": "Which towns near Langhorne are closest to the office?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hulmeville is about 5 minutes away, Penndel about 7 minutes and Parkland about 8 minutes, according to Google Maps. Langhorne itself is about 10 minutes away."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
