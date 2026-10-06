# Dentures: Developer Handoff

**URL:** `/restorative-dentistry/dentures/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dentures in Bensalem, PA | Full, Partial & Implant Dentures</title>
<meta name="description" content="Full, partial, immediate and implant-supported dentures in Bensalem, PA, plus denture relines and exams. Call or text (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/restorative-dentistry/dentures/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentures in Bensalem, PA | Full, Partial & Implant Dentures">
<meta property="og:description" content="Full, partial, immediate and implant-supported dentures in Bensalem, PA, plus denture relines and exams. Call or text (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/restorative-dentistry/dentures/">
```

## 2. Page build rules

- **One H1:** "Dentures in Bensalem, PA". Breadcrumb: Home › Restorative Dentistry › Dentures.
- **"Same-day dentures":** the page describes immediate dentures (placed right after extractions), which is what the current site offers. Don't add a separate "same-day dentures" promise or timeframe.
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dentures/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dentures/",
      "name": "Dentures in Bensalem, PA | Full, Partial & Implant Dentures",
      "description": "Full, partial, immediate and implant-supported dentures in Bensalem, PA, plus denture relines and exams. Call or text (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dentures/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dentures/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dentures/#breadcrumb",
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
          "name": "Dentures",
          "item": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dentures/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dentures/#procedure",
      "name": "Dentures",
      "description": "Dentures are custom-made removable or implant-supported replacements for missing teeth and the surrounding gum tissue."
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dentures/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dentures/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of dentures do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amazing Smiles By Design in Bensalem, PA offers full dentures, partial dentures, immediate dentures and implant-supported dentures, along with denture relines, soft liners and annual denture exams."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get dentures the same day my teeth are removed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Immediate dentures are made in advance from impressions taken before your extractions and are placed right after your teeth are removed, so you don't have to go without teeth while you heal."
          }
        },
        {
          "@type": "Question",
          "name": "How often do dentures need to be relined?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Relines are typically recommended every one to two years to maintain the best fit."
          }
        },
        {
          "@type": "Question",
          "name": "What are implant-supported dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Implant-supported dentures attach to dental implants placed in the jawbone. They move much less than traditional dentures when you chew and speak."
          }
        },
        {
          "@type": "Question",
          "name": "How do I clean my dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brush them with a soft denture brush and a denture cleaning cream, rinse with cool or lukewarm water, and keep them moist when you aren't wearing them. Avoid hot water, which can warp dentures."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
