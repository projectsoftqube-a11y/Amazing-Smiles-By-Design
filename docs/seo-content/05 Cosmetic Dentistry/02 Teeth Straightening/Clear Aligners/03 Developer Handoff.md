# Clear Aligners: Developer Handoff

**URL:** `/cosmetic-dentistry/clear-aligners/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Invisalign Clear Aligners in Bensalem, PA | Amazing Smiles</title>
<meta name="description" content="Straighten your teeth without metal braces. Invisalign clear aligners for adults and teens in Bensalem, PA. How it works, timeline and aftercare.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/cosmetic-dentistry/clear-aligners/">
<meta property="og:type" content="website">
<meta property="og:title" content="Invisalign Clear Aligners in Bensalem, PA | Amazing Smiles">
<meta property="og:description" content="Straighten your teeth without metal braces. Invisalign clear aligners for adults and teens in Bensalem, PA. How it works, timeline and aftercare.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/cosmetic-dentistry/clear-aligners/">
```

## 2. Page build rules

- **One H1:** "Invisalign Clear Aligners in Bensalem". Keep the URL `/cosmetic-dentistry/clear-aligners/`. Breadcrumb: Home › Cosmetic Dentistry › Clear Aligners.
- **Invisalign is a registered trademark of Align Technology.** Use the name as on the current site; don't use the Invisalign logo or "Provider" badges unless the practice supplies them.
- **Aligners vs braces table** as a real HTML `<table>`.
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/clear-aligners/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/clear-aligners/",
      "name": "Invisalign Clear Aligners in Bensalem, PA | Amazing Smiles",
      "description": "Straighten your teeth without metal braces. Invisalign clear aligners for adults and teens in Bensalem, PA. How it works, timeline and aftercare.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/clear-aligners/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/clear-aligners/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/clear-aligners/#breadcrumb",
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
          "name": "Clear Aligners",
          "item": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/clear-aligners/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/clear-aligners/#procedure",
      "name": "Invisalign clear aligners",
      "description": "Invisalign is a clear aligner system that straightens teeth with a series of custom-made, removable plastic trays instead of brackets and wires."
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
      "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/clear-aligners/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/clear-aligners/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long do clear aligners take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For many patients, Invisalign treatment takes about 9 to 15 months and involves 18 to 30 aligners, although some cases need more or less time."
          }
        },
        {
          "@type": "Question",
          "name": "How many hours a day do I wear Invisalign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Invisalign aligners should be worn 20 to 22 hours a day and removed only to eat, drink anything other than water, and brush and floss."
          }
        },
        {
          "@type": "Question",
          "name": "Is Invisalign right for teens?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Invisalign can be an excellent option for adults and teens who want orthodontic treatment without the look of traditional braces. A consultation determines whether it's right for you."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a retainer after Invisalign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Retainers are typically recommended after treatment to keep teeth from shifting back. Many patients choose clear retainers."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer Invisalign in Bensalem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Amazing Smiles By Design provides Invisalign clear aligners at 3101 Bristol Road, Suite 1, Bensalem, PA 19020. Call or text (215) 639-5331 for a consultation."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
