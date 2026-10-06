# Privacy Policy: Developer Handoff

**URL:** `/privacy-policy/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Privacy Policy | Amazing Smiles By Design, Bensalem PA</title>
<meta name="description" content="How the Amazing Smiles By Design website collects and uses information you submit through our forms, log files and analytics, and how to opt out.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/privacy-policy/">
<meta property="og:type" content="website">
<meta property="og:title" content="Privacy Policy | Amazing Smiles By Design, Bensalem PA">
<meta property="og:description" content="How the Amazing Smiles By Design website collects and uses information you submit through our forms, log files and analytics, and how to opt out.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/privacy-policy/">
```

## 2. Page build rules

- **Legal review:** have the practice (and its legal adviser) approve this page before launch. Replace every [CONFIRM] item; don't publish with placeholders.
- **Link from the site footer** on every page.
- **Fill in the analytics/cookie tools** actually installed (from the tracking setup). Make sure no form-field data reaches ad or analytics platforms, so the "sole purpose" statement stays true.
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
      "@id": "https://www.amazingsmilesbydesign.com/privacy-policy/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/privacy-policy/",
      "name": "Privacy Policy | Amazing Smiles By Design, Bensalem PA",
      "description": "How the Amazing Smiles By Design website collects and uses information you submit through our forms, log files and analytics, and how to opt out.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/privacy-policy/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/privacy-policy/#breadcrumb",
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
          "name": "Website Privacy Policy",
          "item": "https://www.amazingsmilesbydesign.com/privacy-policy/"
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
