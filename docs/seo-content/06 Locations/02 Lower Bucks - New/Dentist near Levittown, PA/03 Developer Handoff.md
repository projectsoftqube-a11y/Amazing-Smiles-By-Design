# Dentist Near Levittown, PA: Developer Handoff

**URL:** `/dentist-levittown-pa/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dentist Near Levittown, PA | Amazing Smiles By Design</title>
<meta name="description" content="Levittown patients: family, implant, cosmetic and emergency dentistry about 16 minutes away in Bensalem. PPO accepted. Call or text (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/dentist-levittown-pa/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist Near Levittown, PA | Amazing Smiles By Design">
<meta property="og:description" content="Levittown patients: family, implant, cosmetic and emergency dentistry about 16 minutes away in Bensalem. PPO accepted. Call or text (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/dentist-levittown-pa/">
```

## 2. Page build rules

- **One H1:** "Your Dentist Near Levittown, PA". Breadcrumb: Home › Areas We Serve › Levittown, PA.
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-levittown-pa/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/dentist-levittown-pa/",
      "name": "Dentist Near Levittown, PA | Amazing Smiles By Design",
      "description": "Levittown patients: family, implant, cosmetic and emergency dentistry about 16 minutes away in Bensalem. PPO accepted. Call or text (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-levittown-pa/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/dentist-levittown-pa/#breadcrumb",
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
          "name": "Levittown, PA",
          "item": "https://www.amazingsmilesbydesign.com/dentist-levittown-pa/"
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
          "name": "Levittown, PA",
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-levittown-pa/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-levittown-pa/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is Amazing Smiles By Design from Levittown, PA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The office at 3101 Bristol Road in Bensalem is about 7.8 miles from Levittown, typically a 16-minute drive via Trenton Road, depending on traffic and where in Levittown you start."
          }
        },
        {
          "@type": "Question",
          "name": "Do you accept new patients from Levittown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Amazing Smiles By Design welcomes new patients from all parts of Levittown. Call or text (215) 639-5331 or request an appointment online."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a dental plan for Levittown families without insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Amazing Smiles By Design offers membership plans: $269 a year (Regular), $450 (Perio Maintenance) and $212 (Child, 13 and younger). Each includes cleanings or maintenance visits, exams, routine X-rays and an emergency exam."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer dental implants for Levittown patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dr. Keyur Dudhat provides dental implants at Amazing Smiles By Design in Bensalem, about 16 minutes from Levittown, with treatment planned using detailed imaging, including CBCT scans. Financing is available through CareCredit and Cherry."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
