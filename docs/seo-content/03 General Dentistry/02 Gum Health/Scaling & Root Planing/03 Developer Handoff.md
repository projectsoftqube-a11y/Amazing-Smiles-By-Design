# Scaling & Root Planing: Developer Handoff

**URL:** `/general-dentistry/scaling-and-root-planing/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Deep Cleaning & Gum Disease Treatment | Bensalem, PA</title>
<meta name="description" content="Scaling and root planing (deep cleaning) in Bensalem, PA treats gum disease below the gum line. Signs you need it, what to expect and aftercare.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/general-dentistry/scaling-and-root-planing/">
<meta property="og:type" content="website">
<meta property="og:title" content="Deep Cleaning & Gum Disease Treatment | Bensalem, PA">
<meta property="og:description" content="Scaling and root planing (deep cleaning) in Bensalem, PA treats gum disease below the gum line. Signs you need it, what to expect and aftercare.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/general-dentistry/scaling-and-root-planing/">
```

## 2. Page build rules

- **One H1:** "Deep Cleaning (Scaling and Root Planing) in Bensalem". Breadcrumb: Home › General Dentistry › Scaling & Root Planing.
- **Never claim the practice is a periodontist.** The word appears only in the referral FAQ.
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/scaling-and-root-planing/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/general-dentistry/scaling-and-root-planing/",
      "name": "Deep Cleaning & Gum Disease Treatment | Bensalem, PA",
      "description": "Scaling and root planing (deep cleaning) in Bensalem, PA treats gum disease below the gum line. Signs you need it, what to expect and aftercare.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/scaling-and-root-planing/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/scaling-and-root-planing/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/scaling-and-root-planing/#breadcrumb",
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
          "name": "Scaling & Root Planing",
          "item": "https://www.amazingsmilesbydesign.com/general-dentistry/scaling-and-root-planing/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/scaling-and-root-planing/#procedure",
      "name": "Scaling and root planing (deep cleaning)",
      "description": "Scaling and root planing, commonly called a deep cleaning, is a non-surgical periodontal therapy that removes plaque, tartar and bacteria from below the gum line, where gum disease begins."
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/scaling-and-root-planing/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/scaling-and-root-planing/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is a deep cleaning necessary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A deep cleaning is usually recommended when the dentist finds signs of moderate gum disease (periodontitis), such as pockets of about 4 millimeters or more along with inflammation or bone loss, rather than the healthy one to three millimeters. Removing bacteria below the gum line helps stop gum disease from progressing and protects the bone that supports your teeth."
          }
        },
        {
          "@type": "Question",
          "name": "Does scaling and root planing hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The area being treated may be numbed with local anesthesia so the cleaning can be done comfortably. Mild tenderness or sensitivity for a few days afterward is normal."
          }
        },
        {
          "@type": "Question",
          "name": "How many visits does a deep cleaning take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scaling and root planing is usually done in sections of the mouth and may take one or more visits, depending on how much gum disease is present."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between a deep cleaning and a regular cleaning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A regular cleaning focuses mainly on the visible surfaces of the teeth. A deep cleaning removes plaque, tartar and bacteria from below the gum line and smooths the tooth roots so the gums can heal."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a periodontist for gum disease treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scaling and root planing is a non-surgical treatment provided at Amazing Smiles By Design in Bensalem. If you need care from a periodontist or another dental professional, we refer you to carefully vetted colleagues."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
