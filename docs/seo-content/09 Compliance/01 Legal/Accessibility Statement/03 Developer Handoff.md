# Accessibility Statement: Developer Handoff

**URL:** `/accessibility/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Accessibility Statement | Amazing Smiles By Design</title>
<meta name="description" content="Amazing Smiles By Design is working to make its website accessible to everyone. Contact us at (215) 639-5331 if you need help using the site.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/accessibility/">
<meta property="og:type" content="website">
<meta property="og:title" content="Accessibility Statement | Amazing Smiles By Design">
<meta property="og:description" content="Amazing Smiles By Design is working to make its website accessible to everyone. Contact us at (215) 639-5331 if you need help using the site.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/accessibility/">
```

## 2. Page build rules

- **Legal review:** have the practice (and its legal adviser) approve this page before launch. Replace every [CONFIRM] item; don't publish with placeholders.
- **Link from the site footer** on every page.
- **Build to WCAG 2.1 AA** as stated: alt text, keyboard navigation, contrast, labels, focus states. Run an automated plus manual check before launch.
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
      "@id": "https://www.amazingsmilesbydesign.com/accessibility/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/accessibility/",
      "name": "Accessibility Statement | Amazing Smiles By Design",
      "description": "Amazing Smiles By Design is working to make its website accessible to everyone. Contact us at (215) 639-5331 if you need help using the site.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/accessibility/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/accessibility/#breadcrumb",
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
          "name": "Accessibility Statement",
          "item": "https://www.amazingsmilesbydesign.com/accessibility/"
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
