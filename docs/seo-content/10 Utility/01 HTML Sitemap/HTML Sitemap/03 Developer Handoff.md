# HTML Sitemap: Developer Handoff

**URL:** `/sitemap/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Sitemap | Amazing Smiles By Design, Bensalem PA</title>
<meta name="description" content="A list of every page on the Amazing Smiles By Design website: services, patient information, areas we serve and more. Bensalem, PA dentist.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/sitemap/">
<meta property="og:type" content="website">
<meta property="og:title" content="Sitemap | Amazing Smiles By Design, Bensalem PA">
<meta property="og:description" content="A list of every page on the Amazing Smiles By Design website: services, patient information, areas we serve and more. Bensalem, PA dentist.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/sitemap/">
```

## 2. Page build rules

- **Generate from the route list** at build time so new pages appear automatically. Exclude noindex and on-hold pages.
- **sitemap.xml** is separate (Next.js `app/sitemap.ts`) and must list the same indexable URLs.
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
      "@id": "https://www.amazingsmilesbydesign.com/sitemap/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/sitemap/",
      "name": "Sitemap | Amazing Smiles By Design, Bensalem PA",
      "description": "A list of every page on the Amazing Smiles By Design website: services, patient information, areas we serve and more. Bensalem, PA dentist.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/sitemap/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/sitemap/#breadcrumb",
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
          "name": "Sitemap",
          "item": "https://www.amazingsmilesbydesign.com/sitemap/"
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
