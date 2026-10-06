# Dental Fillings: Developer Handoff

**URL:** `/restorative-dentistry/dental-fillings/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Tooth-Colored Fillings in Bensalem, PA | Amazing Smiles</title>
<meta name="description" content="Tooth-colored composite fillings in Bensalem, PA repair cavities and small chips and blend with your teeth. Signs you need one and what to expect.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-fillings/">
<meta property="og:type" content="website">
<meta property="og:title" content="Tooth-Colored Fillings in Bensalem, PA | Amazing Smiles">
<meta property="og:description" content="Tooth-colored composite fillings in Bensalem, PA repair cavities and small chips and blend with your teeth. Signs you need one and what to expect.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-fillings/">
```

## 2. Page build rules

- **One H1:** "Tooth-Colored Dental Fillings in Bensalem". Breadcrumb: Home › Restorative Dentistry › Dental Fillings.
- **Don't say the practice removes or replaces amalgam fillings for health reasons.** The page states the ADA position that both materials are safe.
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-fillings/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-fillings/",
      "name": "Tooth-Colored Fillings in Bensalem, PA | Amazing Smiles",
      "description": "Tooth-colored composite fillings in Bensalem, PA repair cavities and small chips and blend with your teeth. Signs you need one and what to expect.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-fillings/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-fillings/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-fillings/#breadcrumb",
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
          "name": "Dental Fillings",
          "item": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-fillings/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-fillings/#procedure",
      "name": "Tooth-colored composite fillings",
      "description": "A dental filling removes the decayed or damaged part of a tooth and replaces it with a strong material that seals the area and restores the tooth's shape."
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-fillings/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-fillings/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does getting a filling hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Placing a filling is a routine treatment that is typically quick and comfortable. The dentist removes the decay, then rebuilds the tooth with composite resin hardened by a curing light."
          }
        },
        {
          "@type": "Question",
          "name": "What are tooth-colored fillings made of?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tooth-colored (composite resin) fillings are made from acrylic resin and finely ground glass particles. They bond directly to the tooth and can be color-matched to your surrounding teeth."
          }
        },
        {
          "@type": "Question",
          "name": "Are composite fillings safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "According to the American Dental Association, both amalgam and composite fillings are considered safe and effective for restoring teeth."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if I need a filling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Signs include sensitivity to hot, cold or sweet foods, pain when biting, a rough or chipped area, or dark spots on a tooth. Many cavities have no symptoms and are found at a routine exam or on digital X-rays."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
