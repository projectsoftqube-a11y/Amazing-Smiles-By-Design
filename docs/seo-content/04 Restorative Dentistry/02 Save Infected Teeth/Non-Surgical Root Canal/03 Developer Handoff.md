# Non-Surgical Root Canal: Developer Handoff

**URL:** `/restorative-dentistry/non-surgical-root-canal/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Root Canal Treatment in Bensalem, PA | Amazing Smiles</title>
<meta name="description" content="Non-surgical root canal treatment in Bensalem, PA removes infection, relieves tooth pain and saves your natural tooth. Signs, steps and recovery.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/restorative-dentistry/non-surgical-root-canal/">
<meta property="og:type" content="website">
<meta property="og:title" content="Root Canal Treatment in Bensalem, PA | Amazing Smiles">
<meta property="og:description" content="Non-surgical root canal treatment in Bensalem, PA removes infection, relieves tooth pain and saves your natural tooth. Signs, steps and recovery.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/restorative-dentistry/non-surgical-root-canal/">
```

## 2. Page build rules

- **One H1:** "Root Canal Treatment in Bensalem". Breadcrumb: Home › Restorative Dentistry › Non-Surgical Root Canal.
- **Keep the URL** `/restorative-dentistry/non-surgical-root-canal/`. Don't claim the practice is an endodontist.
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/non-surgical-root-canal/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/non-surgical-root-canal/",
      "name": "Root Canal Treatment in Bensalem, PA | Amazing Smiles",
      "description": "Non-surgical root canal treatment in Bensalem, PA removes infection, relieves tooth pain and saves your natural tooth. Signs, steps and recovery.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/non-surgical-root-canal/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/non-surgical-root-canal/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/non-surgical-root-canal/#breadcrumb",
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
          "name": "Restorative Dentistry",
          "item": "https://www.amazingsmilesbydesign.com/restorative-dentistry/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Non-Surgical Root Canal",
          "item": "https://www.amazingsmilesbydesign.com/restorative-dentistry/non-surgical-root-canal/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/non-surgical-root-canal/#procedure",
      "name": "Non-surgical root canal therapy",
      "description": "A non-surgical root canal removes infected or inflamed tissue from inside a tooth, then cleans, disinfects and seals the tooth so you can keep it instead of having it extracted."
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/non-surgical-root-canal/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/non-surgical-root-canal/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does a root canal hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Root canal treatment is performed under local anesthesia, so the area is numb. Removing the infected pulp relieves the pressure that causes severe tooth pain, and any tenderness afterward is usually mild and short-lived."
          }
        },
        {
          "@type": "Question",
          "name": "What are the signs that I need a root canal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common signs include persistent or severe tooth pain, pain when biting, lingering sensitivity to hot or cold, swollen or tender gums, a darkening tooth, or a pimple-like bump on the gums near the tooth."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a crown after a root canal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For many patients, yes. A crown covers the treated tooth and helps restore its strength, shape and chewing function."
          }
        },
        {
          "@type": "Question",
          "name": "Is it better to get a root canal or pull the tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Saving the natural tooth is usually preferred when possible because it helps maintain your bite and prevents neighboring teeth from shifting. In many cases, a root canal is also more cost-effective than extraction followed by an implant or bridge."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I get a root canal in Bensalem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amazing Smiles By Design provides non-surgical root canal treatment at 3101 Bristol Road, Suite 1, Bensalem, PA 19020. Call or text (215) 639-5331 to book an evaluation."
          }
        },
        {
          "@type": "Question",
          "name": "How long is recovery after a root canal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most patients return to normal daily activities shortly after treatment. Mild tenderness may last a short time as the surrounding tissues heal."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
