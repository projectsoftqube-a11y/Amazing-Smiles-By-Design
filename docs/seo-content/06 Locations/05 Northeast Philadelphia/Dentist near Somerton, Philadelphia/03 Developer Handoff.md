# Dentist Near Somerton, Philadelphia: Developer Handoff

**URL:** `/dentist-somerton-philadelphia/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dentist Near Somerton, Philadelphia | Amazing Smiles</title>
<meta name="description" content="Somerton patients: Invisalign, veneers, whitening and family dentistry about 14 minutes away in neighboring Bensalem. Call or text (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/dentist-somerton-philadelphia/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist Near Somerton, Philadelphia | Amazing Smiles">
<meta property="og:description" content="Somerton patients: Invisalign, veneers, whitening and family dentistry about 14 minutes away in neighboring Bensalem. Call or text (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/dentist-somerton-philadelphia/">
```

## 2. Page build rules

- **One H1:** "Your Dentist Near Somerton, Philadelphia". Breadcrumb: Home › Areas We Serve › Somerton.
- **Owns 'dentist 19116'.**
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-somerton-philadelphia/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/dentist-somerton-philadelphia/",
      "name": "Dentist Near Somerton, Philadelphia | Amazing Smiles",
      "description": "Somerton patients: Invisalign, veneers, whitening and family dentistry about 14 minutes away in neighboring Bensalem. Call or text (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-somerton-philadelphia/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/dentist-somerton-philadelphia/#breadcrumb",
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
          "name": "Somerton, PA",
          "item": "https://www.amazingsmilesbydesign.com/dentist-somerton-philadelphia/"
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
          "name": "Somerton",
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-somerton-philadelphia/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-somerton-philadelphia/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is Amazing Smiles By Design from Somerton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "About 5.4 miles, typically a 14-minute drive via Trevose Road, according to Google Maps."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer Invisalign near Somerton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Amazing Smiles By Design in neighboring Bensalem provides Invisalign clear aligners for adults and teens. For many patients, treatment takes about 9 to 15 months."
          }
        },
        {
          "@type": "Question",
          "name": "Can I finance veneers or Invisalign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Financing is available through CareCredit and Cherry."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
