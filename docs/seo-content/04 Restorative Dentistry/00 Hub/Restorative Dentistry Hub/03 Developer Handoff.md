# Restorative Dentistry: Developer Handoff

**URL:** `/restorative-dentistry/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Restorative Dentist Bensalem, PA | Implants, Crowns & More</title>
<meta name="description" content="Dental implants, crowns, bridges, fillings, inlays and onlays, root canals and dentures to repair and replace teeth in Bensalem, PA. (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/restorative-dentistry/">
<meta property="og:type" content="website">
<meta property="og:title" content="Restorative Dentist Bensalem, PA | Implants, Crowns & More">
<meta property="og:description" content="Dental implants, crowns, bridges, fillings, inlays and onlays, root canals and dentures to repair and replace teeth in Bensalem, PA. (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/restorative-dentistry/">
```

## 2. Page build rules

- **One H1:** "Restorative Dentistry in Bensalem". Breadcrumb: Home › Restorative Dentistry.
- **Three cluster blocks** (Repair, Save, Replace) with crawlable links to all 7 child pages, plus the "Which treatment" table as a real HTML `<table>`.
- **Always:** server-render all text; crawlable `<a href>` links; phone `tel:+12156395331`, text `sms:+12156395331`; NAP identical to the homepage and footer.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

Same `#dentist` `@id` as the homepage. The MedicalProcedure description is copied word for word from the page.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/",
      "name": "Restorative Dentist Bensalem, PA | Implants, Crowns & More",
      "description": "Dental implants, crowns, bridges, fillings, inlays and onlays, root canals and dentures to repair and replace teeth in Bensalem, PA. (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/#services"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/#breadcrumb",
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
    },
    {
      "@type": "ItemList",
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/#services",
      "name": "Restorative dentistry services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Dental Fillings",
          "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-fillings/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Inlays & Onlays",
          "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/inlays-onlays/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Crowns",
          "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-crowns/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Non-Surgical Root Canal",
          "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/non-surgical-root-canal/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Dental Implants",
          "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-implants/"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Dental Bridges",
          "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-bridges/"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Dentures",
          "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dentures/"
        }
      ]
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is restorative dentistry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Restorative dentistry is the branch of dentistry that repairs damaged teeth and replaces missing teeth. It includes fillings, inlays and onlays, crowns, root canals, bridges, dental implants and dentures."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the restorative dentist at Amazing Smiles By Design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Keyur Dudhat, DMD, provides restorative dentistry at Amazing Smiles By Design in Bensalem, PA. His focus is implant and cosmetic dentistry."
          }
        },
        {
          "@type": "Question",
          "name": "What are my options for replacing a missing tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The main options are a dental implant, a dental bridge or a partial denture. The dentist will recommend the best option after examining your teeth, gums and jawbone."
          }
        },
        {
          "@type": "Question",
          "name": "Does insurance cover restorative dentistry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Coverage depends on your dental plan. Your PPO insurance is accepted at Amazing Smiles By Design, and the office bills your insurance and tracks your claims. Payment is due at the time of service."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
