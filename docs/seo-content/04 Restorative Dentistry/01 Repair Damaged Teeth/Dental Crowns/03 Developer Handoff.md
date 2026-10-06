# Dental Crowns: Developer Handoff

**URL:** `/restorative-dentistry/dental-crowns/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dental Crowns in Bensalem, PA | Amazing Smiles By Design</title>
<meta name="description" content="Custom dental crowns in Bensalem, PA protect cracked, worn or weak teeth and blend with your smile. Porcelain, zirconia and more. (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-crowns/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Crowns in Bensalem, PA | Amazing Smiles By Design">
<meta property="og:description" content="Custom dental crowns in Bensalem, PA protect cracked, worn or weak teeth and blend with your smile. Porcelain, zirconia and more. (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-crowns/">
```

## 2. Page build rules

- **One H1:** "Dental Crowns in Bensalem, PA". Breadcrumb: Home › Restorative Dentistry › Dental Crowns.
- **No "same-day crowns" claim.** The current site describes a two-visit process with a lab-made crown.
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-crowns/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-crowns/",
      "name": "Dental Crowns in Bensalem, PA | Amazing Smiles By Design",
      "description": "Custom dental crowns in Bensalem, PA protect cracked, worn or weak teeth and blend with your smile. Porcelain, zirconia and more. (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-crowns/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-crowns/#procedure"
        },
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-crowns/#breadcrumb",
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
          "name": "Restorative Dentistry",
          "item": "https://www.amazingsmilesbydesign.com/restorative-dentistry/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Crowns",
          "item": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-crowns/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-crowns/#procedure",
      "name": "Dental crowns",
      "description": "A dental crown is a custom-made cap that completely covers a damaged, weakened or worn tooth, restoring its shape, size and strength."
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-crowns/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-crowns/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long do dental crowns last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many dental crowns remain functional for 15 to 20 years or longer with good brushing and flossing, regular dental visits and avoiding grinding or chewing on hard objects."
          }
        },
        {
          "@type": "Question",
          "name": "How many visits does a crown take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Placing a dental crown typically takes two visits: one to prepare the tooth and place a temporary crown, and one to bond the permanent crown."
          }
        },
        {
          "@type": "Question",
          "name": "Will my crown look natural?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Crowns are custom-designed to match the color, shape and size of your natural teeth. In many cases, patients cannot tell a crown from their natural teeth."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a crown after a root canal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For many patients, yes. A crown covers the treated tooth and helps restore its strength, shape and normal chewing function."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
