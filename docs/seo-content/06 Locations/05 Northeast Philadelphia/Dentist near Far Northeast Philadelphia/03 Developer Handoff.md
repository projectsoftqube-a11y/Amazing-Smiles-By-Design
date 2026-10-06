# Dentist Near Far Northeast Philadelphia: Developer Handoff

**URL:** `/dentist-far-northeast-philadelphia/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dentist Near Far Northeast Philadelphia | Amazing Smiles</title>
<meta name="description" content="Parkwood and Byberry patients: a family dentist about 11 minutes away in neighboring Bensalem. Same-day emergency visits whenever possible. (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/dentist-far-northeast-philadelphia/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist Near Far Northeast Philadelphia | Amazing Smiles">
<meta property="og:description" content="Parkwood and Byberry patients: a family dentist about 11 minutes away in neighboring Bensalem. Same-day emergency visits whenever possible. (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/dentist-far-northeast-philadelphia/">
```

## 2. Page build rules

- **One H1:** "Your Dentist Near Far Northeast Philadelphia". Breadcrumb: Home › Areas We Serve › Far Northeast Philadelphia.
- **Owns 'dentist 19154' and Parkwood terms**; the regional NE Philly page doesn't target them.
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-far-northeast-philadelphia/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/dentist-far-northeast-philadelphia/",
      "name": "Dentist Near Far Northeast Philadelphia | Amazing Smiles",
      "description": "Parkwood and Byberry patients: a family dentist about 11 minutes away in neighboring Bensalem. Same-day emergency visits whenever possible. (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-far-northeast-philadelphia/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/dentist-far-northeast-philadelphia/#breadcrumb",
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
          "name": "Far Northeast (Parkwood / Byberry), PA",
          "item": "https://www.amazingsmilesbydesign.com/dentist-far-northeast-philadelphia/"
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
          "name": "Far Northeast Philadelphia",
          "containedInPlace": {
            "@type": "City",
            "name": "Philadelphia",
            "containedInPlace": {
              "@type": "State",
              "name": "Pennsylvania"
            }
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-far-northeast-philadelphia/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-far-northeast-philadelphia/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is Amazing Smiles By Design from Parkwood?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "About 4.5 miles, typically an 11-minute drive via Richlieu Road, according to Google Maps. It's one of the closest Philadelphia neighborhoods to the office."
          }
        },
        {
          "@type": "Question",
          "name": "Do you see Philadelphia patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Amazing Smiles By Design is in neighboring Bensalem and welcomes new patients from the Far Northeast and across Philadelphia."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get an emergency appointment from the Far Northeast?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Text or call (215) 639-5331. Our team offers same-day emergency appointments whenever possible, and new patients can have an emergency exam with the necessary X-rays for $59."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
