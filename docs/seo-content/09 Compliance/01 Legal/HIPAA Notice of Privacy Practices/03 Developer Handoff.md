# HIPAA Notice of Privacy Practices: Developer Handoff

**URL:** `/hipaa-notice-of-privacy-practices/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>HIPAA Notice of Privacy Practices | Amazing Smiles By Design</title>
<meta name="description" content="Read the HIPAA Notice of Privacy Practices for Amazing Smiles By Design in Bensalem, PA, and learn about your rights over your health information.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/hipaa-notice-of-privacy-practices/">
<meta property="og:type" content="website">
<meta property="og:title" content="HIPAA Notice of Privacy Practices | Amazing Smiles By Design">
<meta property="og:description" content="Read the HIPAA Notice of Privacy Practices for Amazing Smiles By Design in Bensalem, PA, and learn about your rights over your health information.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/hipaa-notice-of-privacy-practices/">
```

## 2. Page build rules

- **Legal review:** have the practice (and its legal adviser) approve this page before launch. Replace every [CONFIRM] item; don't publish with placeholders.
- **Link from the site footer** on every page.
- **Upload the practice's own NPP** (PDF and/or HTML) and link it from the button. This page does not replace the legal notice.
- **Always:** server-render all text; crawlable `<a href>` links; phone `tel:+12156395331`, text `sms:+12156395331`; NAP identical to the homepage and footer.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

Same `#dentist` `@id` as the homepage.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.amazingsmilesbydesign.com/hipaa-notice-of-privacy-practices/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/hipaa-notice-of-privacy-practices/",
      "name": "HIPAA Notice of Privacy Practices | Amazing Smiles By Design",
      "description": "Read the HIPAA Notice of Privacy Practices for Amazing Smiles By Design in Bensalem, PA, and learn about your rights over your health information.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/hipaa-notice-of-privacy-practices/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/hipaa-notice-of-privacy-practices/#breadcrumb",
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
          "name": "Notice of Privacy Practices",
          "item": "https://www.amazingsmilesbydesign.com/hipaa-notice-of-privacy-practices/"
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
      }
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
