# Dental Bonding: Developer Handoff

**URL:** `/cosmetic-dentistry/dental-bonding/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dental Bonding in Bensalem, PA | Fix Chips & Gaps</title>
<meta name="description" content="Tooth-colored dental bonding in Bensalem, PA repairs chips, closes small gaps and reshapes teeth, often in a single visit. Call or text (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/cosmetic-dentistry/dental-bonding/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Bonding in Bensalem, PA | Fix Chips & Gaps">
<meta property="og:description" content="Tooth-colored dental bonding in Bensalem, PA repairs chips, closes small gaps and reshapes teeth, often in a single visit. Call or text (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/cosmetic-dentistry/dental-bonding/">
```

## 2. Page build rules

- **One H1:** "Dental Bonding in Bensalem". Breadcrumb: Home › Cosmetic Dentistry › Dental Bonding.
- **Bonding vs veneers table** as a real HTML `<table>`.
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/dental-bonding/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/dental-bonding/",
      "name": "Dental Bonding in Bensalem, PA | Fix Chips & Gaps",
      "description": "Tooth-colored dental bonding in Bensalem, PA repairs chips, closes small gaps and reshapes teeth, often in a single visit. Call or text (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/dental-bonding/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/dental-bonding/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/dental-bonding/#breadcrumb",
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
          "name": "Cosmetic Dentistry",
          "item": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Bonding",
          "item": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/dental-bonding/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/dental-bonding/#procedure",
      "name": "Dental bonding",
      "description": "Dental bonding is a minimally invasive cosmetic procedure that applies tooth-colored composite resin to a tooth, then shapes, hardens and polishes it to repair chips, close small gaps and improve the tooth's shape."
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/dental-bonding/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/dental-bonding/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does dental bonding last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental bonding can last several years with proper care, including good oral hygiene, avoiding chewing on hard objects and regular dental checkups."
          }
        },
        {
          "@type": "Question",
          "name": "Is dental bonding done in one visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many dental bonding treatments can be completed in a single appointment."
          }
        },
        {
          "@type": "Question",
          "name": "Does dental bonding damage your teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bonding is a conservative treatment that typically requires little to no removal of natural tooth structure. The tooth surface is gently roughened so the resin can adhere."
          }
        },
        {
          "@type": "Question",
          "name": "Is bonding cheaper than veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bonding is often a more cost-effective way to improve the appearance of teeth than veneers or crowns."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
