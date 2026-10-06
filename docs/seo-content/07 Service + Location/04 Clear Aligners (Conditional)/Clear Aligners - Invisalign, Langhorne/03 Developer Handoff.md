# Clear Aligners / Invisalign, Langhorne: Developer Handoff

**URL:** `/clear-aligners-langhorne-pa/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Invisalign Near Langhorne, PA | Amazing Smiles By Design</title>
<meta name="description" content="Invisalign clear aligners for Langhorne adults and teens, about 10 minutes away in Bensalem. Your stage-by-stage treatment timeline. (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/clear-aligners-langhorne-pa/">
<meta property="og:type" content="website">
<meta property="og:title" content="Invisalign Near Langhorne, PA | Amazing Smiles By Design">
<meta property="og:description" content="Invisalign clear aligners for Langhorne adults and teens, about 10 minutes away in Bensalem. Your stage-by-stage treatment timeline. (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/clear-aligners-langhorne-pa/">
```

## 2. Page build rules

- **One H1:** "Invisalign Clear Aligners Near Langhorne, PA". Timeline as a real HTML `<table>`.
- **Invisalign is a registered trademark of Align Technology.** No provider-tier badges unless the practice supplies them.
- **Conditional page:** publish only if the practice confirms it still offers Invisalign (the current site does).
- **Unique page:** this page must not reuse paragraphs from the main service page or the town page; it links to them for detail.
- **Drive times** are Google Maps estimates (5 Oct 2026); keep the 'changes with traffic' note.
- **No AggregateRating/Review schema** and no 'serving since' or patient-count claims.
- **Always:** server-render all text; crawlable `<a href>` links; phone `tel:+12156395331`, text `sms:+12156395331`; NAP identical to the homepage and footer.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

Same `#dentist` `@id` as the homepage; `areaServed` names this page's area.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.amazingsmilesbydesign.com/clear-aligners-langhorne-pa/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/clear-aligners-langhorne-pa/",
      "name": "Invisalign Near Langhorne, PA | Amazing Smiles By Design",
      "description": "Invisalign clear aligners for Langhorne adults and teens, about 10 minutes away in Bensalem. Your stage-by-stage treatment timeline. (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/clear-aligners-langhorne-pa/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/clear-aligners-langhorne-pa/#breadcrumb",
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
          "name": "Clear Aligners",
          "item": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/clear-aligners/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Langhorne, PA",
          "item": "https://www.amazingsmilesbydesign.com/clear-aligners-langhorne-pa/"
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
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Langhorne, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
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
      "@id": "https://www.amazingsmilesbydesign.com/clear-aligners-langhorne-pa/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/clear-aligners-langhorne-pa/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I get Invisalign near Langhorne?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Amazing Smiles By Design provides Invisalign clear aligners in Bensalem, about 10 minutes from Langhorne, for adults and teens."
          }
        },
        {
          "@type": "Question",
          "name": "Will I need many appointments from Langhorne?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After the consultation, scans and fitting, check-ups are usually about every six weeks, and the office is about 10 minutes from Langhorne. Many patients finish in about 9 to 15 months."
          }
        },
        {
          "@type": "Question",
          "name": "How often are check-ups during Invisalign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check-up visits usually happen about every six weeks so the dentist can monitor progress and provide your next aligners."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
