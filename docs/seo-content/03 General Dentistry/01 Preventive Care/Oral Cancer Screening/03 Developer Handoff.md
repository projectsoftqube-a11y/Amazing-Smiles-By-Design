# Oral Cancer Screening: Developer Handoff

**URL:** `/general-dentistry/oral-cancer-screening/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Oral Cancer Screening in Bensalem, PA | Amazing Smiles</title>
<meta name="description" content="A quick, painless oral cancer screening is part of every routine exam at Amazing Smiles By Design in Bensalem, PA. What we check and warning signs.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/general-dentistry/oral-cancer-screening/">
<meta property="og:type" content="website">
<meta property="og:title" content="Oral Cancer Screening in Bensalem, PA | Amazing Smiles">
<meta property="og:description" content="A quick, painless oral cancer screening is part of every routine exam at Amazing Smiles By Design in Bensalem, PA. What we check and warning signs.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/general-dentistry/oral-cancer-screening/">
```

## 2. Page build rules

- **One H1:** "Oral Cancer Screening in Bensalem". Breadcrumb: Home › General Dentistry › Oral Cancer Screening.
- **No images of oral lesions.** Use a neutral exam-room photo or none.
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-cancer-screening/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-cancer-screening/",
      "name": "Oral Cancer Screening in Bensalem, PA | Amazing Smiles",
      "description": "A quick, painless oral cancer screening is part of every routine exam at Amazing Smiles By Design in Bensalem, PA. What we check and warning signs.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-cancer-screening/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-cancer-screening/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-cancer-screening/#breadcrumb",
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
          "name": "Oral Cancer Screening",
          "item": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-cancer-screening/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-cancer-screening/#procedure",
      "name": "Oral cancer screening",
      "description": "An oral cancer screening is a quick, painless exam that checks the soft tissues of your mouth and the surrounding areas for early signs of oral cancer."
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-cancer-screening/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-cancer-screening/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an oral cancer screening?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An oral cancer screening is a quick, painless exam in which the dentist checks your lips, tongue, cheeks, palate, throat, floor of the mouth and neck for unusual patches, lumps or sores that could be early signs of oral cancer."
          }
        },
        {
          "@type": "Question",
          "name": "Does an oral cancer screening hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The screening is painless, takes just a few minutes and needs no special preparation."
          }
        },
        {
          "@type": "Question",
          "name": "How often should I have an oral cancer screening?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Amazing Smiles By Design, an oral cancer screening is part of your routine dental exam, and most patients see the dentist every six months."
          }
        },
        {
          "@type": "Question",
          "name": "What are the early signs of oral cancer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Early signs can include red or white patches, a sore that doesn't heal, lumps or thickened tissue, persistent hoarseness and difficulty chewing or swallowing. Early oral cancer is often painless."
          }
        },
        {
          "@type": "Question",
          "name": "How much does an oral cancer screening cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Amazing Smiles By Design, the screening is part of your routine dental exam. Patients without insurance can join the Regular Membership Plan ($269 a year), which includes 2 checkup exams."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
