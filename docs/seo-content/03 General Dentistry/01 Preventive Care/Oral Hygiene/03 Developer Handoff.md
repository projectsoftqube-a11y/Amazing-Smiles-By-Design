# Oral Hygiene: Developer Handoff

**URL:** `/general-dentistry/oral-hygiene/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Oral Hygiene Tips: Brushing & Flossing | Bensalem Dentist</title>
<meta name="description" content="How to brush and floss properly, choose the right products and care for sensitive teeth, from the dental team at Amazing Smiles By Design in Bensalem.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/general-dentistry/oral-hygiene/">
<meta property="og:type" content="website">
<meta property="og:title" content="Oral Hygiene Tips: Brushing & Flossing | Bensalem Dentist">
<meta property="og:description" content="How to brush and floss properly, choose the right products and care for sensitive teeth, from the dental team at Amazing Smiles By Design in Bensalem.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/general-dentistry/oral-hygiene/">
```

## 2. Page build rules

- **One H1:** "Oral Hygiene: Daily Care Between Visits". Breadcrumb: Home › General Dentistry › Oral Hygiene.
- **Brushing and flossing steps** as real `<ol>` lists (helps featured snippets and AI extraction).
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-hygiene/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-hygiene/",
      "name": "Oral Hygiene Tips: Brushing & Flossing | Bensalem Dentist",
      "description": "How to brush and floss properly, choose the right products and care for sensitive teeth, from the dental team at Amazing Smiles By Design in Bensalem.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-hygiene/#breadcrumb"
      },
      "about": [
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-hygiene/#breadcrumb",
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
          "name": "Oral Hygiene",
          "item": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-hygiene/"
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-hygiene/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-hygiene/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should I brush my teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brush at least twice a day with a soft-bristled toothbrush and fluoride toothpaste, using small, gentle circular motions at a 45-degree angle to the gum line."
          }
        },
        {
          "@type": "Question",
          "name": "Is it normal for gums to bleed when I start flossing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mild bleeding when you first start flossing regularly is usually a sign of gum inflammation caused by plaque. It typically decreases as you floss consistently. If bleeding doesn't improve, ask the dentist."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best toothbrush to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A soft-bristled toothbrush works well for most people, and electric toothbrushes can be very effective at removing plaque because they provide a consistent brushing motion. Our team can recommend products for your needs."
          }
        },
        {
          "@type": "Question",
          "name": "Can a water flosser replace regular flossing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A water flosser can help rinse away food and bacteria, but it should be used alongside brushing and flossing rather than replacing them."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
