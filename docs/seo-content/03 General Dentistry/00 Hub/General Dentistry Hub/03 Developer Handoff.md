# General Dentistry: Developer Handoff

**URL:** `/general-dentistry/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Family & General Dentist in Bensalem, PA | Amazing Smiles</title>
<meta name="description" content="Checkups, cleanings, children's dentistry, gum care, extractions and emergency care for the whole family at Amazing Smiles By Design in Bensalem, PA.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/general-dentistry/">
<meta property="og:type" content="website">
<meta property="og:title" content="Family & General Dentist in Bensalem, PA | Amazing Smiles">
<meta property="og:description" content="Checkups, cleanings, children's dentistry, gum care, extractions and emergency care for the whole family at Amazing Smiles By Design in Bensalem, PA.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/general-dentistry/">
```

## 2. Page build rules

- **One H1:** "General & Family Dentistry in Bensalem". Breadcrumb: Home › General Dentistry.
- **Four cluster blocks** (Preventive, Gum Health, Children, Urgent) with crawlable links to all 10 child pages.
- **The old hub URL showed the Oral Hygiene text.** Replace it fully with this page; Oral Hygiene keeps its own URL.
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/general-dentistry/",
      "name": "Family & General Dentist in Bensalem, PA | Amazing Smiles",
      "description": "Checkups, cleanings, children's dentistry, gum care, extractions and emergency care for the whole family at Amazing Smiles By Design in Bensalem, PA.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/#services"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/#breadcrumb",
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/#services",
      "name": "General dentistry services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Dental Checkups & X-Rays",
          "url": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-checkups-x-rays/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Oral Cancer Screening",
          "url": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-cancer-screening/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Oral Hygiene",
          "url": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-hygiene/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Scaling & Root Planing",
          "url": "https://www.amazingsmilesbydesign.com/general-dentistry/scaling-and-root-planing/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Periodontal Maintenance",
          "url": "https://www.amazingsmilesbydesign.com/general-dentistry/periodontal-maintenance/"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Arestin",
          "url": "https://www.amazingsmilesbydesign.com/general-dentistry/arestin/"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Children's Dentistry",
          "url": "https://www.amazingsmilesbydesign.com/general-dentistry/child-dentistry/"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Dental Sealants",
          "url": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-sealants/"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Tooth Extraction",
          "url": "https://www.amazingsmilesbydesign.com/general-dentistry/tooth-extraction/"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Emergency Dentistry",
          "url": "https://www.amazingsmilesbydesign.com/general-dentistry/emergency-dentistry/"
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is general dentistry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "General dentistry is the everyday dental care that keeps teeth and gums healthy, including checkups, cleanings, X-rays, fillings, gum treatment, extractions and emergency care. A general dentist is usually your first stop for any dental concern."
          }
        },
        {
          "@type": "Question",
          "name": "Is Amazing Smiles By Design a family dentist in Bensalem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Amazing Smiles By Design in Bensalem, PA provides general and family dentistry for adults and children, including children's dentistry, from its office at 3101 Bristol Road, Suite 1."
          }
        },
        {
          "@type": "Question",
          "name": "Is the practice accepting new patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. New patients are welcome. Call or text (215) 639-5331, or request an appointment online."
          }
        },
        {
          "@type": "Question",
          "name": "How often should my family see the dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Preventive dental visits typically occur every six months. Patients who have been treated for gum disease often need periodontal maintenance visits every three to four months."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
