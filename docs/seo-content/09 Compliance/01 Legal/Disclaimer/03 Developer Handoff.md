# Disclaimer: Developer Handoff

**URL:** `/disclaimer/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Disclaimer | Amazing Smiles By Design, Bensalem PA</title>
<meta name="description" content="Website disclaimer for Amazing Smiles By Design in Bensalem, PA: information on this site is educational and is not dental or medical advice.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/disclaimer/">
<meta property="og:type" content="website">
<meta property="og:title" content="Disclaimer | Amazing Smiles By Design, Bensalem PA">
<meta property="og:description" content="Website disclaimer for Amazing Smiles By Design in Bensalem, PA: information on this site is educational and is not dental or medical advice.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/disclaimer/">
```

## 2. Page build rules

- **Legal review:** have the practice (and its legal adviser) approve this page before launch. Replace every [CONFIRM] item; don't publish with placeholders.
- **Link from the site footer** on every page.
- **The old /disclaimer/ page also held the privacy text and log-file text.** These now live on /privacy-policy/; this page carries the disclaimer only.
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
      "@id": "https://www.amazingsmilesbydesign.com/disclaimer/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/disclaimer/",
      "name": "Disclaimer | Amazing Smiles By Design, Bensalem PA",
      "description": "Website disclaimer for Amazing Smiles By Design in Bensalem, PA: information on this site is educational and is not dental or medical advice.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/disclaimer/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/disclaimer/#breadcrumb",
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
          "name": "Website Disclaimer",
          "item": "https://www.amazingsmilesbydesign.com/disclaimer/"
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
