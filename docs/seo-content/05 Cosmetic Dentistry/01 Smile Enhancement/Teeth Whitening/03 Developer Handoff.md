# Teeth Whitening: Developer Handoff

**URL:** `/cosmetic-dentistry/teeth-whitening/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Teeth Whitening Bensalem, PA | Professional Whitening</title>
<meta name="description" content="Professional teeth whitening in Bensalem, PA lifts stains from coffee, tea, wine and aging. Learn about in-office and take-home options. (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/cosmetic-dentistry/teeth-whitening/">
<meta property="og:type" content="website">
<meta property="og:title" content="Teeth Whitening Bensalem, PA | Professional Whitening">
<meta property="og:description" content="Professional teeth whitening in Bensalem, PA lifts stains from coffee, tea, wine and aging. Learn about in-office and take-home options. (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/cosmetic-dentistry/teeth-whitening/">
```

## 2. Page build rules

- **One H1:** "Professional Teeth Whitening in Bensalem". Breadcrumb: Home › Cosmetic Dentistry › Teeth Whitening.
- **No whitening brand names, shade-change numbers or prices.** None are on the current site.
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/teeth-whitening/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/teeth-whitening/",
      "name": "Teeth Whitening Bensalem, PA | Professional Whitening",
      "description": "Professional teeth whitening in Bensalem, PA lifts stains from coffee, tea, wine and aging. Learn about in-office and take-home options. (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/teeth-whitening/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/teeth-whitening/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/teeth-whitening/#breadcrumb",
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
          "name": "Teeth Whitening",
          "item": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/teeth-whitening/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/teeth-whitening/#procedure",
      "name": "Professional teeth whitening",
      "description": "Professional teeth whitening uses dentist-supervised whitening agents to break down stains in tooth enamel and lighten both surface stains and deeper discoloration."
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/teeth-whitening/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/teeth-whitening/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is professional teeth whitening better than store-bought kits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional whitening uses stronger whitening agents, gives more even results and is customized to your teeth, and a dental professional supervises it to help protect your gums."
          }
        },
        {
          "@type": "Question",
          "name": "How long does teeth whitening last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Results last longer when you brush and floss daily, limit stain-causing drinks, drink water after dark-colored drinks and keep up regular cleanings. Occasional touch-up treatments help maintain your results."
          }
        },
        {
          "@type": "Question",
          "name": "Does teeth whitening hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional whitening is supervised by a dental professional and is designed to be safe and effective. Some people notice temporary tooth sensitivity, which usually fades after treatment, and the dental team monitors your comfort."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between in-office and take-home whitening?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In-office whitening applies a professional-strength solution in the office for the fastest results, often in a single visit. Take-home whitening uses custom trays so you can whiten gradually at your own pace."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I get professional teeth whitening in Bensalem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amazing Smiles By Design provides professional teeth whitening at 3101 Bristol Road, Suite 1, Bensalem, PA 19020. Call or text (215) 639-5331."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
