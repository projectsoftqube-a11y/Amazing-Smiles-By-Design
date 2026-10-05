# Financing Options: Developer Handoff

**URL:** `/patient-information/financing-options/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dental Financing & Payment Plans in Bensalem, PA</title>
<meta name="description" content="Spread the cost of dental care with CareCredit or Cherry at Amazing Smiles By Design in Bensalem, PA. Our team can help you explore your options.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/patient-information/financing-options/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Financing & Payment Plans in Bensalem, PA">
<meta property="og:description" content="Spread the cost of dental care with CareCredit or Cherry at Amazing Smiles By Design in Bensalem, PA. Our team can help you explore your options.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/patient-information/financing-options/">
```

## 2. Page build rules

- **One H1:** "Dental Financing in Bensalem, PA". Breadcrumb: Home › Patient Information › Financing Options.
- **CareCredit / Cherry comparison table** as a real HTML table.
- **Apply links:** add official CareCredit and Cherry application links only if the practice gives you its provider-specific URLs. Don't use generic links that could misroute applications.
- **No interest-rate or term claims** beyond the copy; terms are set by the lenders.
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
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/financing-options/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/patient-information/financing-options/",
      "name": "Dental Financing & Payment Plans in Bensalem, PA",
      "description": "Spread the cost of dental care with CareCredit or Cherry at Amazing Smiles By Design in Bensalem, PA. Our team can help you explore your options.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/patient-information/financing-options/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/financing-options/#breadcrumb",
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
          "name": "Financing Options",
          "item": "https://www.amazingsmilesbydesign.com/patient-information/financing-options/"
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

### 3b. FAQPage (optional)

No Google rich result since May 2026. Harmless, and keeps the Q&A machine-readable.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/financing-options/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/patient-information/financing-options/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you offer dental payment plans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Amazing Smiles By Design works with CareCredit and Cherry, which let you pay for dental treatment in monthly payments instead of all at once."
          }
        },
        {
          "@type": "Question",
          "name": "Which financing companies do you work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with two healthcare financing providers: CareCredit and Cherry."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help me apply for financing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If you'd like help applying for a payment plan, our team is happy to assist. During your visit, we can review the available financing options with you."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use financing for dental implants or cosmetic dentistry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many patients use CareCredit when planning larger treatments such as cosmetic dentistry, dental implants, orthodontics or full smile restorations."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
