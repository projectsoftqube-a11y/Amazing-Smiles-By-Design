# Night Guards: Developer Handoff

**URL:** `/cosmetic-dentistry/night-guards/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Custom Night Guards for Teeth Grinding | Bensalem, PA</title>
<meta name="description" content="A custom night guard in Bensalem, PA protects your teeth from grinding and clenching while you sleep. Signs of bruxism, custom vs store-bought, care.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/cosmetic-dentistry/night-guards/">
<meta property="og:type" content="website">
<meta property="og:title" content="Custom Night Guards for Teeth Grinding | Bensalem, PA">
<meta property="og:description" content="A custom night guard in Bensalem, PA protects your teeth from grinding and clenching while you sleep. Signs of bruxism, custom vs store-bought, care.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/cosmetic-dentistry/night-guards/">
```

## 2. Page build rules

- **One H1:** "Custom Night Guards in Bensalem". Breadcrumb: Home › Cosmetic Dentistry › Night Guards.
- **No TMJ/TMD treatment claims.** Jaw clicking appears only as a sign of grinding, as on the current site.
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/night-guards/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/night-guards/",
      "name": "Custom Night Guards for Teeth Grinding | Bensalem, PA",
      "description": "A custom night guard in Bensalem, PA protects your teeth from grinding and clenching while you sleep. Signs of bruxism, custom vs store-bought, care.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/night-guards/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/night-guards/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/night-guards/#breadcrumb",
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
          "name": "Night Guards",
          "item": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/night-guards/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/night-guards/#procedure",
      "name": "Custom night guards",
      "description": "A night guard is a custom dental appliance worn over your teeth while you sleep to absorb and spread the pressure of grinding and clenching (bruxism)."
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/night-guards/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/night-guards/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I need a night guard?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Frequent or morning headaches, jaw soreness, tooth sensitivity, worn or flattened teeth, chipped teeth or clicking in the jaw can be signs of grinding or clenching. These symptoms can have other causes, so a dental evaluation can show whether a night guard would help."
          }
        },
        {
          "@type": "Question",
          "name": "Is a custom night guard better than a store-bought one?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A custom night guard is molded precisely to your teeth, is more comfortable for overnight wear and is made from stronger, longer-lasting materials than generic over-the-counter guards."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a night guard last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With proper care, a custom night guard can last several years. Bring it to your dental visits so it can be checked for wear."
          }
        },
        {
          "@type": "Question",
          "name": "How do I clean my night guard?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rinse it after each use, brush it gently with a toothbrush and mild soap, let it air dry and keep it in its protective case."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
