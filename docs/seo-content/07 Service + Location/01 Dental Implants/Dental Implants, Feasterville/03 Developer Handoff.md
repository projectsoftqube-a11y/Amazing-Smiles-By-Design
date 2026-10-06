# Dental Implants, Feasterville: Developer Handoff

**URL:** `/dental-implants-feasterville-pa/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dental Implants Near Feasterville, PA | Amazing Smiles</title>
<meta name="description" content="Dental implants near Feasterville-Trevose, about 12 minutes down Bristol Road in Bensalem. What happens at your implant consultation. (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/dental-implants-feasterville-pa/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Implants Near Feasterville, PA | Amazing Smiles">
<meta property="og:description" content="Dental implants near Feasterville-Trevose, about 12 minutes down Bristol Road in Bensalem. What happens at your implant consultation. (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/dental-implants-feasterville-pa/">
```

## 2. Page build rules

- **One H1:** "Dental Implants Near Feasterville, PA". The consultation steps as a real `<ol>`.
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
      "@id": "https://www.amazingsmilesbydesign.com/dental-implants-feasterville-pa/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/dental-implants-feasterville-pa/",
      "name": "Dental Implants Near Feasterville, PA | Amazing Smiles",
      "description": "Dental implants near Feasterville-Trevose, about 12 minutes down Bristol Road in Bensalem. What happens at your implant consultation. (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/dental-implants-feasterville-pa/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/dental-implants-feasterville-pa/#breadcrumb",
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
          "name": "Dental Implants",
          "item": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-implants/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Feasterville, PA",
          "item": "https://www.amazingsmilesbydesign.com/dental-implants-feasterville-pa/"
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
          "name": "Feasterville, PA",
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
      "@id": "https://www.amazingsmilesbydesign.com/dental-implants-feasterville-pa/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/dental-implants-feasterville-pa/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is the implant office from Feasterville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roughly 5 miles. Google Maps estimates about 12 minutes from Feasterville along East Bristol Road."
          }
        },
        {
          "@type": "Question",
          "name": "What happens at a dental implant consultation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The dentist reviews your goals and medical history, examines your gums and teeth, and uses digital X-rays and, when needed, a CBCT scan to check your bone, nerves and sinuses. You then receive a personalized treatment plan."
          }
        },
        {
          "@type": "Question",
          "name": "Am I a good candidate for dental implants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Good candidates typically have healthy gums, enough jawbone to support an implant and good overall oral health, and don't smoke or are willing to stop during healing. If bone is insufficient, bone grafting may be recommended first."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
