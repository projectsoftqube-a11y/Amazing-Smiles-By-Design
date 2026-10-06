# Cosmetic Dentistry: Developer Handoff

**URL:** `/cosmetic-dentistry/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Cosmetic Dentist Bensalem, PA | Veneers, Whitening & More</title>
<meta name="description" content="Cosmetic dentist in Bensalem, PA: porcelain veneers, teeth whitening, dental bonding and Invisalign clear aligners with Dr. Keyur Dudhat. (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/cosmetic-dentistry/">
<meta property="og:type" content="website">
<meta property="og:title" content="Cosmetic Dentist Bensalem, PA | Veneers, Whitening & More">
<meta property="og:description" content="Cosmetic dentist in Bensalem, PA: porcelain veneers, teeth whitening, dental bonding and Invisalign clear aligners with Dr. Keyur Dudhat. (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/cosmetic-dentistry/">
```

## 2. Page build rules

- **One H1:** "Cosmetic Dentistry in Bensalem, PA". Breadcrumb: Home › Cosmetic Dentistry.
- **Five service cards** with crawlable links to all 5 child pages; the "Concern → treatment" table as a real HTML `<table>`.
- **Smile makeover is a section, not a service page.** Don't create `/smile-makeover/`.
- **Before/after images:** link to the Smile Gallery only. Don't place stock images on this page as patient results.
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/",
      "name": "Cosmetic Dentist Bensalem, PA | Veneers, Whitening & More",
      "description": "Cosmetic dentist in Bensalem, PA: porcelain veneers, teeth whitening, dental bonding and Invisalign clear aligners with Dr. Keyur Dudhat. (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/#dentist"
        }
      ],
      "mainEntity": {
        "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/#services"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/#breadcrumb",
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/#services",
      "name": "Cosmetic dentistry services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Porcelain Veneers",
          "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/porcelain-veneers/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Teeth Whitening",
          "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/teeth-whitening/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Bonding",
          "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/dental-bonding/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Clear Aligners",
          "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/clear-aligners/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Night Guards",
          "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/night-guards/"
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is cosmetic dentistry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cosmetic dentistry is dental treatment that improves the appearance of your teeth, including their color, shape, size and alignment. Common treatments include porcelain veneers, teeth whitening, dental bonding and clear aligners."
          }
        },
        {
          "@type": "Question",
          "name": "What cosmetic treatments does Amazing Smiles By Design offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amazing Smiles By Design in Bensalem, PA offers porcelain veneers, teeth whitening, dental bonding, Invisalign clear aligners and custom night guards."
          }
        },
        {
          "@type": "Question",
          "name": "How much does cosmetic dentistry cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on the treatments you choose and how many teeth are involved. Amazing Smiles By Design provides a personalized treatment plan at your consultation and offers financing through CareCredit and Cherry."
          }
        },
        {
          "@type": "Question",
          "name": "Is cosmetic dentistry covered by insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Coverage depends on your dental plan and whether the treatment is cosmetic. Many dental plans don't cover purely cosmetic treatment, while treatment that also repairs damage may be partly covered. Financing is available through CareCredit and Cherry."
          }
        },
        {
          "@type": "Question",
          "name": "What is a smile makeover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A smile makeover combines two or more cosmetic treatments, such as veneers, whitening, bonding or clear aligners, to correct several concerns at once."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
