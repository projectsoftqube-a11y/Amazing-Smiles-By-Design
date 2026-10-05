# Arestin: Developer Handoff

**URL:** `/general-dentistry/arestin/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Arestin Antibiotic Gum Treatment | Bensalem, PA</title>
<meta name="description" content="Arestin places a slow-release antibiotic directly into infected gum pockets after a deep cleaning. How it works and what to expect in Bensalem, PA.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/general-dentistry/arestin/">
<meta property="og:type" content="website">
<meta property="og:title" content="Arestin Antibiotic Gum Treatment | Bensalem, PA">
<meta property="og:description" content="Arestin places a slow-release antibiotic directly into infected gum pockets after a deep cleaning. How it works and what to expect in Bensalem, PA.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/general-dentistry/arestin/">
```

## 2. Page build rules

- **One H1:** "Arestin Antibiotic Gum Treatment in Bensalem". Breadcrumb: Home › General Dentistry › Arestin.
- **Arestin is a trademark of its manufacturer.** Don't use the product logo or product images unless the practice has supplied them.
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/arestin/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/general-dentistry/arestin/",
      "name": "Arestin Antibiotic Gum Treatment | Bensalem, PA",
      "description": "Arestin places a slow-release antibiotic directly into infected gum pockets after a deep cleaning. How it works and what to expect in Bensalem, PA.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/arestin/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/arestin/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/arestin/#breadcrumb",
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
          "name": "Arestin",
          "item": "https://www.amazingsmilesbydesign.com/general-dentistry/arestin/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/arestin/#procedure",
      "name": "Arestin (minocycline) antibiotic gum treatment",
      "description": "Arestin is a locally applied antibiotic used to treat the bacterial infection associated with gum (periodontal) disease."
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/arestin/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/arestin/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Arestin used for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Arestin is a locally applied antibiotic used to treat the bacterial infection associated with gum disease. It is placed directly into infected gum pockets, usually after a deep cleaning (scaling and root planing)."
          }
        },
        {
          "@type": "Question",
          "name": "What antibiotic is in Arestin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Arestin contains minocycline, delivered as tiny microspheres that release the antibiotic slowly inside the gum pocket."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer Arestin in Bensalem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. At Amazing Smiles By Design in Bensalem, PA, Arestin may be placed after scaling and root planing in gum pockets where bacteria remain."
          }
        },
        {
          "@type": "Question",
          "name": "Does Arestin placement hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Placement is quick and usually painless, and it doesn't require additional anesthesia. It typically happens after your deep cleaning."
          }
        },
        {
          "@type": "Question",
          "name": "What should I avoid after Arestin treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You may be advised to avoid flossing the treated area for several days and to eat softer foods for a while, while keeping up your regular brushing."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
