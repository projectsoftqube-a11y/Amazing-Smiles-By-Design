# Periodontal Maintenance: Developer Handoff

**URL:** `/general-dentistry/periodontal-maintenance/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Periodontal Maintenance in Bensalem, PA | Amazing Smiles</title>
<meta name="description" content="Periodontal maintenance in Bensalem, PA keeps gum disease under control after a deep cleaning. Usually every 3–4 months. Perio plan $450 a year.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/general-dentistry/periodontal-maintenance/">
<meta property="og:type" content="website">
<meta property="og:title" content="Periodontal Maintenance in Bensalem, PA | Amazing Smiles">
<meta property="og:description" content="Periodontal maintenance in Bensalem, PA keeps gum disease under control after a deep cleaning. Usually every 3–4 months. Perio plan $450 a year.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/general-dentistry/periodontal-maintenance/">
```

## 2. Page build rules

- **One H1:** "Periodontal Maintenance in Bensalem". Breadcrumb: Home › General Dentistry › Periodontal Maintenance.
- **Grafting and pocket reduction** are listed only as treatments that may be needed, with a referral line. Don't present them as in-house services.
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/periodontal-maintenance/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/general-dentistry/periodontal-maintenance/",
      "name": "Periodontal Maintenance in Bensalem, PA | Amazing Smiles",
      "description": "Periodontal maintenance in Bensalem, PA keeps gum disease under control after a deep cleaning. Usually every 3–4 months. Perio plan $450 a year.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/periodontal-maintenance/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/periodontal-maintenance/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/periodontal-maintenance/#breadcrumb",
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
          "name": "General Dentistry",
          "item": "https://www.amazingsmilesbydesign.com/general-dentistry/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Periodontal Maintenance",
          "item": "https://www.amazingsmilesbydesign.com/general-dentistry/periodontal-maintenance/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/periodontal-maintenance/#procedure",
      "name": "Periodontal maintenance",
      "description": "Periodontal maintenance is ongoing professional gum care for patients who have been treated for gum disease."
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/periodontal-maintenance/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/periodontal-maintenance/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is periodontal maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Periodontal maintenance is a professional cleaning for patients who have been treated for gum disease. It focuses on the areas where gum disease developed, removing plaque and bacteria from around the gum pockets and monitoring the health of the gums and bone."
          }
        },
        {
          "@type": "Question",
          "name": "How often do I need periodontal maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many patients benefit from periodontal maintenance every three to four months, although the schedule may vary depending on individual needs."
          }
        },
        {
          "@type": "Question",
          "name": "How is periodontal maintenance different from a regular cleaning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Periodontal maintenance is similar to a routine cleaning but focuses more closely on the gum pockets where gum disease previously developed, to keep the infection from returning."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a periodontal maintenance plan for patients without insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Perio Maintenance Plan at Amazing Smiles By Design costs $450 a year and includes 4 periodontal maintenance visits, 2 checkup exams and screenings, routine X-rays and an emergency exam."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
