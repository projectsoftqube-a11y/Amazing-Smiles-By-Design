# Dental Implants, Bucks County: Developer Handoff

**URL:** `/dental-implants-bucks-county/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dental Implants in Bucks County, PA | Amazing Smiles</title>
<meta name="description" content="Dental implants in Bucks County at our Bensalem office: single-tooth, full-arch and implant-supported dentures, planned with 3D imaging. (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/dental-implants-bucks-county/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Implants in Bucks County, PA | Amazing Smiles">
<meta property="og:description" content="Dental implants in Bucks County at our Bensalem office: single-tooth, full-arch and implant-supported dentures, planned with 3D imaging. (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/dental-implants-bucks-county/">
```

## 2. Page build rules

- **One H1:** "Dental Implants in Bucks County, PA". Option and drive-time tables as real HTML `<table>`s.
- **No implant prices.** The 20% member discount excludes implants.
- **Sedation:** only "Ask us about dental sedation options".
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
      "@id": "https://www.amazingsmilesbydesign.com/dental-implants-bucks-county/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/dental-implants-bucks-county/",
      "name": "Dental Implants in Bucks County, PA | Amazing Smiles",
      "description": "Dental implants in Bucks County at our Bensalem office: single-tooth, full-arch and implant-supported dentures, planned with 3D imaging. (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/dental-implants-bucks-county/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/dental-implants-bucks-county/#breadcrumb",
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
          "name": "Bucks County",
          "item": "https://www.amazingsmilesbydesign.com/dental-implants-bucks-county/"
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
      "@id": "https://www.amazingsmilesbydesign.com/dental-implants-bucks-county/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/dental-implants-bucks-county/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I get dental implants in Bucks County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amazing Smiles By Design provides dental implants at 3101 Bristol Road, Suite 1, Bensalem, in Lower Bucks County. Dr. Keyur Dudhat focuses on implant and cosmetic dentistry, and implant planning uses detailed imaging, with a CBCT scan when needed."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer full-arch implants and implant-supported dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. For patients missing most or all of their teeth, full-arch restorations and implant-supported dentures can be supported by a few strategically placed implants."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the dental implant process take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There are four stages: consultation and imaging, implant placement, several months of healing while the implant fuses with the bone, and attaching the final restoration."
          }
        },
        {
          "@type": "Question",
          "name": "How do I pay for dental implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many patients combine insurance and financing: PPO plans are accepted (implant benefits vary by plan), and CareCredit or Cherry can spread the cost. Membership discounts don't apply to implants."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
