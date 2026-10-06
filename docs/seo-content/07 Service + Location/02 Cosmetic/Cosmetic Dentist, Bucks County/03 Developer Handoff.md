# Cosmetic Dentist, Bucks County: Developer Handoff

**URL:** `/cosmetic-dentist-bucks-county/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Cosmetic Dentist in Bucks County, PA | Amazing Smiles</title>
<meta name="description" content="Cosmetic dentist in Bucks County: porcelain veneers, whitening, bonding and Invisalign with Dr. Keyur Dudhat in Bensalem. Call (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/cosmetic-dentist-bucks-county/">
<meta property="og:type" content="website">
<meta property="og:title" content="Cosmetic Dentist in Bucks County, PA | Amazing Smiles">
<meta property="og:description" content="Cosmetic dentist in Bucks County: porcelain veneers, whitening, bonding and Invisalign with Dr. Keyur Dudhat in Bensalem. Call (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/cosmetic-dentist-bucks-county/">
```

## 2. Page build rules

- **One H1:** "Cosmetic Dentist in Bucks County, PA". Options table as a real HTML `<table>`.
- **Before/after images:** real patients with consent only.
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
      "@type": "WebPage",
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentist-bucks-county/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentist-bucks-county/",
      "name": "Cosmetic Dentist in Bucks County, PA | Amazing Smiles",
      "description": "Cosmetic dentist in Bucks County: porcelain veneers, whitening, bonding and Invisalign with Dr. Keyur Dudhat in Bensalem. Call (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentist-bucks-county/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentist-bucks-county/#breadcrumb",
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
          "name": "Cosmetic Dentistry",
          "item": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Bucks County",
          "item": "https://www.amazingsmilesbydesign.com/cosmetic-dentist-bucks-county/"
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
          "@type": "AdministrativeArea",
          "name": "Bucks County, Pennsylvania"
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentist-bucks-county/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentist-bucks-county/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is there a cosmetic dentist in Bucks County with veneer training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Keyur Dudhat of Amazing Smiles By Design in Bensalem, Bucks County, focuses on implant and cosmetic dentistry and regularly pursues advanced training in veneers."
          }
        },
        {
          "@type": "Question",
          "name": "What cosmetic treatments are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amazing Smiles By Design offers porcelain veneers, professional teeth whitening, dental bonding and Invisalign clear aligners, plus custom night guards."
          }
        },
        {
          "@type": "Question",
          "name": "What happens at a cosmetic consultation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You share what you'd like to change, the dentist examines your teeth, bite and facial structure, and you receive a personalized plan with your options, timing and cost."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
