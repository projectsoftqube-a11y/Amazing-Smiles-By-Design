# Dental Implants, Langhorne: Developer Handoff

**URL:** `/dental-implants-langhorne-pa/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dental Implants Near Langhorne, PA | Amazing Smiles</title>
<meta name="description" content="Missing a tooth? Compare dental implants, bridges and dentures with an implant-focused dentist about 10 minutes from Langhorne. (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/dental-implants-langhorne-pa/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Implants Near Langhorne, PA | Amazing Smiles">
<meta property="og:description" content="Missing a tooth? Compare dental implants, bridges and dentures with an implant-focused dentist about 10 minutes from Langhorne. (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/dental-implants-langhorne-pa/">
```

## 2. Page build rules

- **One H1:** "Dental Implants Near Langhorne, PA". Implant/bridge/denture comparison as a real HTML `<table>`.
- **Unique page:** this page must not reuse paragraphs from the main service page or the town page; it links to them for detail.
- **Drive times** are Google Maps estimates (5 Oct 2026); keep the 'changes with traffic' note.
- **No AggregateRating/Review schema** and no 'serving since' or patient-count claims.
- **Always:** server-render all text; crawlable `<a href>` links; phone `tel:+12156395331`, text `sms:+12156395331`; NAP identical to the homepage and footer.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

Same `#dentist` `@id` as the homepage; `areaServed` names this page's area.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.amazingsmilesbydesign.com/dental-implants-langhorne-pa/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/dental-implants-langhorne-pa/",
      "name": "Dental Implants Near Langhorne, PA | Amazing Smiles",
      "description": "Missing a tooth? Compare dental implants, bridges and dentures with an implant-focused dentist about 10 minutes from Langhorne. (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/dental-implants-langhorne-pa/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/dental-implants-langhorne-pa/#breadcrumb",
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
          "name": "Dental Implants",
          "item": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-implants/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Langhorne, PA",
          "item": "https://www.amazingsmilesbydesign.com/dental-implants-langhorne-pa/"
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
      "@id": "https://www.amazingsmilesbydesign.com/dental-implants-langhorne-pa/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/dental-implants-langhorne-pa/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is the implant office from Langhorne?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amazing Smiles By Design is about 4.6 miles from Langhorne, typically a 10-minute drive, according to Google Maps."
          }
        },
        {
          "@type": "Question",
          "name": "Is an implant better than a bridge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both replace missing teeth. An implant replaces the tooth root and doesn't change the neighboring teeth, while a bridge is anchored to the teeth beside the gap. The dentist will recommend the best option after examining your teeth, gums and jawbone."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to replace a missing tooth right away?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There's no fixed deadline, but neighboring teeth can shift into the gap and the jawbone can weaken over time, so it's worth discussing your options soon."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
