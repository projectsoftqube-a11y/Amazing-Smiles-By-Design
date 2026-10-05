# Patient Education: Developer Handoff

**URL:** `/patient-information/patient-education/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Patient Education & Dental Health Tips | Amazing Smiles</title>
<meta name="description" content="Dental health tips and guides from Amazing Smiles By Design in Bensalem, PA: brushing and flossing, gum health, children's teeth and treatment options.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/patient-information/patient-education/">
<meta property="og:type" content="website">
<meta property="og:title" content="Patient Education & Dental Health Tips | Amazing Smiles">
<meta property="og:description" content="Dental health tips and guides from Amazing Smiles By Design in Bensalem, PA: brushing and flossing, gum health, children's teeth and treatment options.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/patient-information/patient-education/">
```

## 2. Page build rules

- **One H1:** "Patient Education". Breadcrumb: Home › Patient Information › Patient Education.
- **Blog feed:** list the 6 latest `/blog/` posts once the blog exists; hide the block until then.
- **RevenueWell library:** the old page embeds a third-party RevenueWell article library. Keep the widget only if the practice's RevenueWell subscription continues and it renders crawlable text; otherwise this page links to the site's own guides as written.
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
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/patient-education/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/patient-information/patient-education/",
      "name": "Patient Education & Dental Health Tips | Amazing Smiles",
      "description": "Dental health tips and guides from Amazing Smiles By Design in Bensalem, PA: brushing and flossing, gum health, children's teeth and treatment options.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/patient-information/patient-education/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/patient-education/#breadcrumb",
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Patient Education",
          "item": "https://www.amazingsmilesbydesign.com/patient-information/patient-education/"
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
