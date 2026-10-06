# Dentist Near Northeast Philadelphia: Developer Handoff

**URL:** `/dentist-northeast-philadelphia/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dentist Near Northeast Philadelphia | Amazing Smiles</title>
<meta name="description" content="A dentist in neighboring Bensalem, 11 to 26 minutes from Northeast Philadelphia neighborhoods. Family, implant and emergency care.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/dentist-northeast-philadelphia/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist Near Northeast Philadelphia | Amazing Smiles">
<meta property="og:description" content="A dentist in neighboring Bensalem, 11 to 26 minutes from Northeast Philadelphia neighborhoods. Family, implant and emergency care.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/dentist-northeast-philadelphia/">
```

## 2. Page build rules

- **One H1:** "Your Dentist Near Northeast Philadelphia". Breadcrumb: Home › Areas We Serve › Northeast Philadelphia.
- **Regional page:** the neighborhood table links the 6 neighborhood pages. This page doesn't target neighborhood or ZIP terms.
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-northeast-philadelphia/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/dentist-northeast-philadelphia/",
      "name": "Dentist Near Northeast Philadelphia | Amazing Smiles",
      "description": "A dentist in neighboring Bensalem, 11 to 26 minutes from Northeast Philadelphia neighborhoods. Family, implant and emergency care.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-northeast-philadelphia/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/dentist-northeast-philadelphia/#breadcrumb",
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
          "name": "Northeast Philadelphia",
          "item": "https://www.amazingsmilesbydesign.com/dentist-northeast-philadelphia/"
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
          "name": "Northeast Philadelphia",
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-northeast-philadelphia/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-northeast-philadelphia/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is Amazing Smiles By Design from Northeast Philadelphia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bensalem, where the practice is located, borders Northeast Philadelphia. According to Google Maps, the office is about 11 minutes from the Far Northeast (Parkwood/Byberry), 14 minutes from Somerton and up to about 26 minutes from Fox Chase, depending on traffic."
          }
        },
        {
          "@type": "Question",
          "name": "Do you accept Philadelphia patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Amazing Smiles By Design welcomes new patients from Northeast Philadelphia and across the city. Call or text (215) 639-5331."
          }
        },
        {
          "@type": "Question",
          "name": "Do you accept my PPO insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your PPO insurance is accepted at Amazing Smiles By Design. Patients without insurance can choose a membership plan or finance treatment through CareCredit or Cherry."
          }
        },
        {
          "@type": "Question",
          "name": "Which Northeast Philadelphia neighborhood is closest to your office?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Of the neighborhoods listed on this page, the Far Northeast (Parkwood/Byberry) is closest, about 4.5 miles or 11 minutes away via Richlieu Road, according to Google Maps. Somerton is about 14 minutes away."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
