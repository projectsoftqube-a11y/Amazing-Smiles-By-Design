# Dentist Near Holmesburg, Philadelphia: Developer Handoff

**URL:** `/dentist-holmesburg-philadelphia/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dentist Near Holmesburg, Philadelphia | Amazing Smiles</title>
<meta name="description" content="Holmesburg patients: root canals, crowns, extractions and urgent dental care about 19 minutes up I-95 in Bensalem. Call or text (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/dentist-holmesburg-philadelphia/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist Near Holmesburg, Philadelphia | Amazing Smiles">
<meta property="og:description" content="Holmesburg patients: root canals, crowns, extractions and urgent dental care about 19 minutes up I-95 in Bensalem. Call or text (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/dentist-holmesburg-philadelphia/">
```

## 2. Page build rules

- **One H1:** "Your Dentist Near Holmesburg, Philadelphia". Breadcrumb: Home › Areas We Serve › Holmesburg.
- **Owns 'dentist 19136'.** Keep the 911 safety line.
- **The four-step 'Tooth pain' list** as a real `<ol>`.
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-holmesburg-philadelphia/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/dentist-holmesburg-philadelphia/",
      "name": "Dentist Near Holmesburg, Philadelphia | Amazing Smiles",
      "description": "Holmesburg patients: root canals, crowns, extractions and urgent dental care about 19 minutes up I-95 in Bensalem. Call or text (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-holmesburg-philadelphia/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/dentist-holmesburg-philadelphia/#breadcrumb",
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
          "name": "Holmesburg, PA",
          "item": "https://www.amazingsmilesbydesign.com/dentist-holmesburg-philadelphia/"
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
          "name": "Holmesburg",
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
      "@id": "https://www.amazingsmilesbydesign.com/dentist-holmesburg-philadelphia/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/dentist-holmesburg-philadelphia/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is Amazing Smiles By Design from Holmesburg?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "About 9.7 miles, typically a 19-minute drive via I-95 North, according to Google Maps."
          }
        },
        {
          "@type": "Question",
          "name": "Can I save a tooth instead of having it pulled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Often, yes. A non-surgical root canal removes infection from inside the tooth so you can keep it, and a crown often protects it afterward. If a tooth can't be saved, the dentist will discuss extraction and replacement options."
          }
        },
        {
          "@type": "Question",
          "name": "What does a new patient emergency visit cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "New patients can use the $59 Emergency Visit Special, which includes the necessary exam and X-rays."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
