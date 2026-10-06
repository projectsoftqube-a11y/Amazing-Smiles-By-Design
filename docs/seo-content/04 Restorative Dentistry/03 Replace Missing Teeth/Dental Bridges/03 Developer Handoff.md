# Dental Bridges: Developer Handoff

**URL:** `/restorative-dentistry/dental-bridges/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dental Bridges in Bensalem, PA | Replace Missing Teeth</title>
<meta name="description" content="A custom dental bridge fills the gap from one or more missing teeth. Types, the process and bridge vs implant, at Amazing Smiles By Design in Bensalem, PA.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-bridges/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Bridges in Bensalem, PA | Replace Missing Teeth">
<meta property="og:description" content="A custom dental bridge fills the gap from one or more missing teeth. Types, the process and bridge vs implant, at Amazing Smiles By Design in Bensalem, PA.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-bridges/">
```

## 2. Page build rules

- **One H1:** "Dental Bridges in Bensalem". Breadcrumb: Home › Restorative Dentistry › Dental Bridges.
- **Always:** server-render all text; crawlable `<a href>` links; phone `tel:+12156395331`, text `sms:+12156395331`; NAP identical to the homepage and footer.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

Same `#dentist` `@id` as the homepage. The MedicalProcedure description is copied word for word from the page.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-bridges/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-bridges/",
      "name": "Dental Bridges in Bensalem, PA | Replace Missing Teeth",
      "description": "A custom dental bridge fills the gap from one or more missing teeth. Types, the process and bridge vs implant, at Amazing Smiles By Design in Bensalem, PA.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-bridges/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-bridges/#procedure"
        },
        {
          "@id": "https://www.amazingsmilesbydesign.com/#dentist"
        }
      ],
      "provider": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-bridges/#breadcrumb",
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
          "name": "Restorative Dentistry",
          "item": "https://www.amazingsmilesbydesign.com/restorative-dentistry/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Bridges",
          "item": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-bridges/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-bridges/#procedure",
      "name": "Dental bridges",
      "description": "A dental bridge replaces one or more missing teeth with an artificial tooth, called a pontic, that is held in place by the healthy teeth next to the gap, called abutment teeth."
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
      }
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-bridges/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-bridges/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a dental bridge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A dental bridge is a fixed restoration that replaces one or more missing teeth with an artificial tooth (pontic) anchored to the healthy teeth next to the gap."
          }
        },
        {
          "@type": "Question",
          "name": "How long do dental bridges last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With good oral care and routine dental visits, a dental bridge can remain a reliable tooth replacement for many years."
          }
        },
        {
          "@type": "Question",
          "name": "How many visits does a bridge take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A dental bridge usually takes two to three visits to prepare the supporting teeth, place a temporary bridge if needed and bond the final bridge."
          }
        },
        {
          "@type": "Question",
          "name": "Is a bridge or an implant better?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both replace missing teeth. A bridge is anchored to neighboring teeth, while an implant replaces the root and doesn't affect the teeth beside it. The dentist will recommend the best option after examining your teeth, gums and jawbone."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
