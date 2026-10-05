# Tooth Extraction: Developer Handoff

**URL:** `/general-dentistry/tooth-extraction/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Tooth Extraction in Bensalem, PA | Amazing Smiles</title>
<meta name="description" content="Gentle tooth extraction in Bensalem, PA under local anesthesia. Why teeth are removed, what to expect, recovery tips and how to avoid dry socket.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/general-dentistry/tooth-extraction/">
<meta property="og:type" content="website">
<meta property="og:title" content="Tooth Extraction in Bensalem, PA | Amazing Smiles">
<meta property="og:description" content="Gentle tooth extraction in Bensalem, PA under local anesthesia. Why teeth are removed, what to expect, recovery tips and how to avoid dry socket.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/general-dentistry/tooth-extraction/">
```

## 2. Page build rules

- **One H1:** "Tooth Extraction in Bensalem". Breadcrumb: Home › General Dentistry › Tooth Extraction.
- **No wisdom-teeth subpage and no "surgical wisdom tooth removal" claim** until the practice confirms it does this in-house. Wisdom teeth are covered as a section with a referral line.
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/tooth-extraction/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/general-dentistry/tooth-extraction/",
      "name": "Tooth Extraction in Bensalem, PA | Amazing Smiles",
      "description": "Gentle tooth extraction in Bensalem, PA under local anesthesia. Why teeth are removed, what to expect, recovery tips and how to avoid dry socket.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/tooth-extraction/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/tooth-extraction/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/tooth-extraction/#breadcrumb",
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
          "name": "Tooth Extraction",
          "item": "https://www.amazingsmilesbydesign.com/general-dentistry/tooth-extraction/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/tooth-extraction/#procedure",
      "name": "Tooth extraction",
      "description": "Saving your natural teeth is always the goal, but sometimes removing a tooth is the healthiest option."
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/tooth-extraction/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/tooth-extraction/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does a tooth extraction hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The tooth, gum and nearby bone are numbed with a local anesthetic, so the extraction should not be painful. You may feel firm pressure, because the nerves that sense pressure are still active. Tell the dentist right away if you feel discomfort."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to recover from a tooth extraction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Swelling typically starts to improve within 48 hours, and most patients feel comfortable returning to their regular routine within a few days."
          }
        },
        {
          "@type": "Question",
          "name": "How do I avoid dry socket?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Protect the blood clot. For the first 72 hours, avoid vigorous rinsing, drinking through a straw, smoking, alcohol and brushing right next to the extraction site."
          }
        },
        {
          "@type": "Question",
          "name": "What can I eat after a tooth extraction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eat soft foods and drink plenty of fluids on the day of the procedure, then gradually return to your normal diet as you feel more comfortable."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get an emergency tooth extraction in Bensalem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you have a dental emergency, call or text (215) 639-5331. Our team will help determine how quickly you should be seen and arrange a same-day appointment whenever possible."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
