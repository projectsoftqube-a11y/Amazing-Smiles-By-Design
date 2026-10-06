# Dentist Near Croydon, PA: Developer Handoff

**URL:** `/dentist-croydon-pa/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dentist Near Croydon, PA | Amazing Smiles By Design</title>
<meta name="description" content="Croydon patients: emergency, family and restorative dentistry about 13 minutes away in Bensalem. Same-day visits whenever possible. (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/dentist-croydon-pa/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist Near Croydon, PA | Amazing Smiles By Design">
<meta property="og:description" content="Croydon patients: emergency, family and restorative dentistry about 13 minutes away in Bensalem. Same-day visits whenever possible. (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/dentist-croydon-pa/">
```

## 2. Page build rules

- **One H1:** "Your Dentist Near Croydon, PA". Breadcrumb: Home › Areas We Serve › Croydon, PA.
- **Keep the 911 safety line** under the emergency section.
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-croydon-pa/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/dentist-croydon-pa/",
      "name": "Dentist Near Croydon, PA | Amazing Smiles By Design",
      "description": "Croydon patients: emergency, family and restorative dentistry about 13 minutes away in Bensalem. Same-day visits whenever possible. (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-croydon-pa/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/dentist-croydon-pa/#breadcrumb",
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
          "name": "Croydon, PA",
          "item": "https://www.amazingsmilesbydesign.com/dentist-croydon-pa/"
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
          "name": "Croydon, PA",
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-croydon-pa/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-croydon-pa/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is Amazing Smiles By Design from Croydon, PA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "About 5.8 miles, typically a 13-minute drive via US-13 and Galloway Road, according to Google Maps."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get emergency dental care from Croydon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Text or call (215) 639-5331. Our team will help determine how quickly you should be seen and arrange a same-day appointment whenever possible. New patients can have an emergency exam with the necessary X-rays for $59."
          }
        },
        {
          "@type": "Question",
          "name": "Do you do root canals and extractions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Amazing Smiles By Design provides non-surgical root canal treatment and tooth extractions, along with crowns, implants, bridges and dentures to restore or replace teeth."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
