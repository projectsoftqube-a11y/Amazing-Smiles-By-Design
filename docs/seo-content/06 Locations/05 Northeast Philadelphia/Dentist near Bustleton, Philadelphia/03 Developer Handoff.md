# Dentist Near Bustleton, Philadelphia: Developer Handoff

**URL:** `/dentist-bustleton-philadelphia/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dentist Near Bustleton, Philadelphia | Amazing Smiles</title>
<meta name="description" content="Bustleton families: children's and family dentistry about 23 minutes up Roosevelt Boulevard in Bensalem. Child plan $212 a year. (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/dentist-bustleton-philadelphia/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist Near Bustleton, Philadelphia | Amazing Smiles">
<meta property="og:description" content="Bustleton families: children's and family dentistry about 23 minutes up Roosevelt Boulevard in Bensalem. Child plan $212 a year. (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/dentist-bustleton-philadelphia/">
```

## 2. Page build rules

- **One H1:** "Your Dentist Near Bustleton, Philadelphia". Breadcrumb: Home › Areas We Serve › Bustleton.
- **Owns 'dentist 19115'.**
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-bustleton-philadelphia/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/dentist-bustleton-philadelphia/",
      "name": "Dentist Near Bustleton, Philadelphia | Amazing Smiles",
      "description": "Bustleton families: children's and family dentistry about 23 minutes up Roosevelt Boulevard in Bensalem. Child plan $212 a year. (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-bustleton-philadelphia/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/dentist-bustleton-philadelphia/#breadcrumb",
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
          "name": "Bustleton, PA",
          "item": "https://www.amazingsmilesbydesign.com/dentist-bustleton-philadelphia/"
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
          "name": "Bustleton",
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-bustleton-philadelphia/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-bustleton-philadelphia/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is Amazing Smiles By Design from Bustleton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "About 9.1 miles, typically a 23-minute drive via Roosevelt Boulevard (US-1 North), according to Google Maps."
          }
        },
        {
          "@type": "Question",
          "name": "When should my child first see a dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A child's first regular dental visit should take place just after their first birthday. The first visit is usually short, and a parent may sit in the dental chair with the child."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a dental plan for kids without insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Child Membership Plan is $212 a year for children 13 and younger and includes 2 cleanings, 2 exams, 2 fluoride treatments, routine X-rays and an emergency exam."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
