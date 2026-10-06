# Dentist Near Newtown, PA: Developer Handoff

**URL:** `/dentist-newtown-pa/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dentist Near Newtown, PA | Amazing Smiles By Design</title>
<meta name="description" content="Newtown, PA patients: veneers, whitening, bonding and family dentistry about 19 minutes away in Bensalem via PA-413. Call or text (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/dentist-newtown-pa/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist Near Newtown, PA | Amazing Smiles By Design">
<meta property="og:description" content="Newtown, PA patients: veneers, whitening, bonding and family dentistry about 19 minutes away in Bensalem via PA-413. Call or text (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/dentist-newtown-pa/">
```

## 2. Page build rules

- **One H1:** "Your Dentist Near Newtown, PA". Breadcrumb: Home › Areas We Serve › Newtown, PA.
- **Always "Newtown, PA" / "Newtown, Bucks County"** (other Newtowns exist). Owns 'dentist 18940'.
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-newtown-pa/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/dentist-newtown-pa/",
      "name": "Dentist Near Newtown, PA | Amazing Smiles By Design",
      "description": "Newtown, PA patients: veneers, whitening, bonding and family dentistry about 19 minutes away in Bensalem via PA-413. Call or text (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-newtown-pa/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/dentist-newtown-pa/#breadcrumb",
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
          "name": "Newtown, PA",
          "item": "https://www.amazingsmilesbydesign.com/dentist-newtown-pa/"
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
          "name": "Newtown, PA",
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-newtown-pa/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-newtown-pa/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is Amazing Smiles By Design from Newtown, PA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "About 8.2 miles, typically a 19-minute drive via PA-413 South, according to Google Maps."
          }
        },
        {
          "@type": "Question",
          "name": "Which cosmetic treatments do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amazing Smiles By Design offers porcelain veneers, professional teeth whitening, dental bonding and Invisalign clear aligners, plus custom night guards."
          }
        },
        {
          "@type": "Question",
          "name": "Is bonding or veneers better for a chipped tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bonding can often fix a small chip in one visit and is often more cost-effective. Porcelain veneers are custom-made in a lab, resist stains and can last well over a decade with proper care. The dentist will help you compare them."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
