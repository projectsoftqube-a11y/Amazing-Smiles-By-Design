# Blog Hub: Developer Handoff

**URL:** `/blog/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dental Tips & Patient Guides | Amazing Smiles By Design Blog</title>
<meta name="description" content="Patient guides from Amazing Smiles By Design in Bensalem, PA, coming soon. Learn about prevention, gum health, implants, cosmetic care and costs.">
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/blog/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Tips & Patient Guides | Amazing Smiles By Design Blog">
<meta property="og:description" content="Patient guides from Amazing Smiles By Design in Bensalem, PA, coming soon. Learn about prevention, gum health, implants, cosmetic care and costs.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/blog/">
```

## 2. Page build rules

- **One H1:** "Dental Tips & Patient Guides". Breadcrumb: Home › Blog.
- **noindex, follow until the first 3 posts are published**, then switch to index, add the page to sitemap.xml and update the hero text (it currently says guides are coming soon).
- **Post feed** hidden until the first post exists. Each post template: Article schema (author Dr. Keyur Dudhat only if he reviews it), a link to its service page, and a dated byline.
- **Category pages** (optional later) should be noindex until each has at least 3 posts.
- **Always:** server-render all text; crawlable `<a href>` links; phone `tel:+12156395331`, text `sms:+12156395331`; NAP identical to the homepage and footer.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

Same `#dentist` `@id` as the homepage. Optional on noindex pages.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.amazingsmilesbydesign.com/blog/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/blog/",
      "name": "Dental Tips & Patient Guides | Amazing Smiles By Design Blog",
      "description": "Patient guides from Amazing Smiles By Design in Bensalem, PA, coming soon. Learn about prevention, gum health, implants, cosmetic care and costs.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/blog/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/blog/#breadcrumb",
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
          "name": "Dental Tips & Patient Guides",
          "item": "https://www.amazingsmilesbydesign.com/blog/"
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
