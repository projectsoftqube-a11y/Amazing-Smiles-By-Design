# Porcelain Veneers: Developer Handoff

**URL:** `/cosmetic-dentistry/porcelain-veneers/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Porcelain Veneers Bensalem, PA | Amazing Smiles By Design</title>
<meta name="description" content="Custom porcelain veneers in Bensalem, PA cover stains, chips, gaps and uneven teeth for a natural-looking smile. Book a consultation: (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/cosmetic-dentistry/porcelain-veneers/">
<meta property="og:type" content="website">
<meta property="og:title" content="Porcelain Veneers Bensalem, PA | Amazing Smiles By Design">
<meta property="og:description" content="Custom porcelain veneers in Bensalem, PA cover stains, chips, gaps and uneven teeth for a natural-looking smile. Book a consultation: (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/cosmetic-dentistry/porcelain-veneers/">
```

## 2. Page build rules

- **One H1:** "Porcelain Veneers in Bensalem". Breadcrumb: Home › Cosmetic Dentistry › Porcelain Veneers.
- **No veneer prices** and no "no-prep" claims. The page says a very small amount of enamel may be removed.
- **Before/after photos:** real patients only, with written consent.
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/porcelain-veneers/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/porcelain-veneers/",
      "name": "Porcelain Veneers Bensalem, PA | Amazing Smiles By Design",
      "description": "Custom porcelain veneers in Bensalem, PA cover stains, chips, gaps and uneven teeth for a natural-looking smile. Book a consultation: (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/porcelain-veneers/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/porcelain-veneers/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/porcelain-veneers/#breadcrumb",
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
          "name": "Porcelain Veneers",
          "item": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/porcelain-veneers/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/porcelain-veneers/#procedure",
      "name": "Porcelain veneers",
      "description": "Porcelain veneers are ultra-thin, custom-made porcelain shells bonded to the front surfaces of your teeth to improve their color, shape, size and overall appearance."
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/porcelain-veneers/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/porcelain-veneers/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much do porcelain veneers cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of porcelain veneers depends on how many teeth are being treated. Amazing Smiles By Design provides a personalized treatment plan at your consultation and offers financing through CareCredit and Cherry."
          }
        },
        {
          "@type": "Question",
          "name": "How long do porcelain veneers last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With proper care, porcelain veneers can last well over a decade. Longevity depends on oral hygiene, habits and routine dental care."
          }
        },
        {
          "@type": "Question",
          "name": "How do you care for porcelain veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brush twice a day with fluoride toothpaste, floss daily, see the dentist regularly, avoid chewing hard objects such as pens or ice, and wear a night guard if you grind your teeth."
          }
        },
        {
          "@type": "Question",
          "name": "Do veneers require removing tooth enamel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A very small amount of enamel may be gently removed from the front of the teeth so the veneers fit naturally without looking bulky."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer porcelain veneers in Bensalem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dr. Keyur Dudhat provides porcelain veneers at Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
