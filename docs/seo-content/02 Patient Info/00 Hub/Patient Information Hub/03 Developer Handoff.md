# Patient Information: Developer Handoff

**URL:** `/patient-information/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Patient Information | Bensalem Dental | Amazing Smiles</title>
<meta name="description" content="Everything you need before visiting Amazing Smiles By Design in Bensalem, PA: new patients, scheduling, insurance, financing and our technology.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/patient-information/">
<meta property="og:type" content="website">
<meta property="og:title" content="Patient Information | Bensalem Dental | Amazing Smiles">
<meta property="og:description" content="Everything you need before visiting Amazing Smiles By Design in Bensalem, PA: new patients, scheduling, insurance, financing and our technology.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/patient-information/">
```

## 2. Page build rules

- **One H1:** "Patient Information". Breadcrumb: Home › Patient Information.
- **Link cards** to all 8 child pages, as crawlable links.
- **Always:** server-render all text; crawlable `<a href>` links; phone `tel:+12156395331`, text `sms:+12156395331`; NAP identical to the homepage and footer.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

Same `#dentist` `@id` as the homepage.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/patient-information/",
      "name": "Patient Information | Bensalem Dental | Amazing Smiles",
      "description": "Everything you need before visiting Amazing Smiles By Design in Bensalem, PA: new patients, scheduling, insurance, financing and our technology.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/patient-information/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/#breadcrumb",
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
          "name": "Patient Information",
          "item": "https://www.amazingsmilesbydesign.com/patient-information/"
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
