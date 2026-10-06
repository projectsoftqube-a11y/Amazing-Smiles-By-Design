# Dentist Near Morrisville, PA: Developer Handoff

**URL:** `/dentist-morrisville-pa/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dentist Near Morrisville, PA | Amazing Smiles By Design</title>
<meta name="description" content="Morrisville patients: family dentistry, membership plans and emergency care about 18 minutes away in Bensalem via US-1. Call (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/dentist-morrisville-pa/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist Near Morrisville, PA | Amazing Smiles By Design">
<meta property="og:description" content="Morrisville patients: family dentistry, membership plans and emergency care about 18 minutes away in Bensalem via US-1. Call (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/dentist-morrisville-pa/">
```

## 2. Page build rules

- **One H1:** "Your Dentist Near Morrisville, PA". Breadcrumb: Home › Areas We Serve › Morrisville, PA.
- **Don't target ZIP 19067**; it belongs to the Yardley page.
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-morrisville-pa/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/dentist-morrisville-pa/",
      "name": "Dentist Near Morrisville, PA | Amazing Smiles By Design",
      "description": "Morrisville patients: family dentistry, membership plans and emergency care about 18 minutes away in Bensalem via US-1. Call (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-morrisville-pa/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/dentist-morrisville-pa/#breadcrumb",
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
          "name": "Morrisville, PA",
          "item": "https://www.amazingsmilesbydesign.com/dentist-morrisville-pa/"
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
          "name": "Morrisville, PA",
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-morrisville-pa/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-morrisville-pa/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is Amazing Smiles By Design from Morrisville, PA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "About 12.4 miles, typically an 18-minute drive via US-1 South, according to Google Maps."
          }
        },
        {
          "@type": "Question",
          "name": "What does the Regular membership plan include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Regular plan costs $269 a year and includes 2 cleanings, 2 exams, routine X-rays and an emergency exam, plus 20% off other procedures excluding implants and Invisalign."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get emergency dental care from Morrisville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Text or call (215) 639-5331. Our team will help determine how quickly you should be seen and arrange a same-day appointment whenever possible."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
