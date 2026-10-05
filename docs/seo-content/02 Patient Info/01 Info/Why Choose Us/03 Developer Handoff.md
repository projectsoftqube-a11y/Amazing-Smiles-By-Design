# Why Choose Us: Developer Handoff

**URL:** `/patient-information/why-choose-us/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Why Choose Us | Amazing Smiles By Design, Bensalem PA</title>
<meta name="description" content="Gentle, personalized dental care in Bensalem, PA: clear pricing before treatment, help for dental anxiety, and comprehensive care in one location.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/patient-information/why-choose-us/">
<meta property="og:type" content="website">
<meta property="og:title" content="Why Choose Us | Amazing Smiles By Design, Bensalem PA">
<meta property="og:description" content="Gentle, personalized dental care in Bensalem, PA: clear pricing before treatment, help for dental anxiety, and comprehensive care in one location.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/patient-information/why-choose-us/">
```

## 2. Page build rules

- **One H1:** "Why Patients Choose Amazing Smiles By Design". Breadcrumb: Home › Patient Information › Why Choose Us.
- **Don't reuse the old stock image** (common.pbhs.com "smiling family"). Use a real office or team photo, or none.
- **Always:** server-render all text; crawlable `<a href>` links; phone `tel:+12156395331`, text `sms:+12156395331`; NAP identical to the homepage and footer.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

Same `#dentist` `@id` as the homepage.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/why-choose-us/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/patient-information/why-choose-us/",
      "name": "Why Choose Us | Amazing Smiles By Design, Bensalem PA",
      "description": "Gentle, personalized dental care in Bensalem, PA: clear pricing before treatment, help for dental anxiety, and comprehensive care in one location.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/patient-information/why-choose-us/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/why-choose-us/#breadcrumb",
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
          "name": "Patient Information",
          "item": "https://www.amazingsmilesbydesign.com/patient-information/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Why Choose Us",
          "item": "https://www.amazingsmilesbydesign.com/patient-information/why-choose-us/"
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
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/why-choose-us/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/patient-information/why-choose-us/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I choose the best dentist in Bensalem for me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for a dentist who explains your options and costs clearly, accepts your insurance or offers alternatives, makes you feel comfortable, and offers the care your family needs. At Amazing Smiles By Design, our staff provides transparent pricing before any treatment, and we offer general, restorative and cosmetic dentistry in one location."
          }
        },
        {
          "@type": "Question",
          "name": "Do you help patients who are nervous about the dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We explain clearly what you can expect during your treatment, which often eases dental fear. You're welcome to bring headphones and music, and you can ask us about dental sedation options."
          }
        },
        {
          "@type": "Question",
          "name": "Will I know the cost before treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our staff provides each patient with transparent pricing before any treatment, so you can make an informed decision."
          }
        },
        {
          "@type": "Question",
          "name": "What if I need a specialist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If we must refer you to another dental professional, we send you to carefully vetted colleagues who apply the same professional principles that we do."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
