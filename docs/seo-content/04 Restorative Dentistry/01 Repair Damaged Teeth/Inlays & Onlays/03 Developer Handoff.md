# Inlays & Onlays: Developer Handoff

**URL:** `/restorative-dentistry/inlays-onlays/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Inlays & Onlays in Bensalem, PA | Amazing Smiles By Design</title>
<meta name="description" content="Custom inlays and onlays in Bensalem, PA repair teeth too damaged for a filling but not needing a full crown. Inlay vs onlay vs crown explained.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/restorative-dentistry/inlays-onlays/">
<meta property="og:type" content="website">
<meta property="og:title" content="Inlays & Onlays in Bensalem, PA | Amazing Smiles By Design">
<meta property="og:description" content="Custom inlays and onlays in Bensalem, PA repair teeth too damaged for a filling but not needing a full crown. Inlay vs onlay vs crown explained.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/restorative-dentistry/inlays-onlays/">
```

## 2. Page build rules

- **One H1:** "Inlays & Onlays in Bensalem". Breadcrumb: Home › Restorative Dentistry › Inlays & Onlays.
- **Inlay vs onlay vs crown table** as a real HTML `<table>`.
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/inlays-onlays/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/inlays-onlays/",
      "name": "Inlays & Onlays in Bensalem, PA | Amazing Smiles By Design",
      "description": "Custom inlays and onlays in Bensalem, PA repair teeth too damaged for a filling but not needing a full crown. Inlay vs onlay vs crown explained.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/inlays-onlays/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/inlays-onlays/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/inlays-onlays/#breadcrumb",
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
          "name": "Inlays & Onlays",
          "item": "https://www.amazingsmilesbydesign.com/restorative-dentistry/inlays-onlays/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/inlays-onlays/#procedure",
      "name": "Inlays and onlays",
      "description": "Inlays and onlays are custom restorations made in a dental laboratory to repair damage on the chewing surface of a tooth."
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/inlays-onlays/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/inlays-onlays/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between an inlay and an onlay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An inlay fits within the grooves of the chewing surface, inside the cusp tips. An onlay covers a larger area, including one or more cusps, while still preserving more natural tooth than a full crown."
          }
        },
        {
          "@type": "Question",
          "name": "Is an onlay better than a crown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When the remaining tooth structure is strong enough, an onlay can restore the tooth while preserving more natural tooth than a crown. If the tooth needs full coverage, the dentist may recommend a crown instead."
          }
        },
        {
          "@type": "Question",
          "name": "How long do inlays and onlays last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Inlays and onlays can last 10 to 30 years with proper dental care."
          }
        },
        {
          "@type": "Question",
          "name": "How many visits does an inlay or onlay take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually two: one to prepare the tooth and take an impression or digital scan, and one to bond the custom restoration."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
