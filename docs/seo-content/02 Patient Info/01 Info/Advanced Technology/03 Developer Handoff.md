# Advanced Technology: Developer Handoff

**URL:** `/patient-information/advanced-technology/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>CBCT Scans & Advanced Dental Technology | Bensalem, PA</title>
<meta name="description" content="Amazing Smiles By Design in Bensalem, PA uses CBCT 3D scans, digital X-rays and the RayFace facial scanner for more accurate diagnosis and planning.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/patient-information/advanced-technology/">
<meta property="og:type" content="website">
<meta property="og:title" content="CBCT Scans & Advanced Dental Technology | Bensalem, PA">
<meta property="og:description" content="Amazing Smiles By Design in Bensalem, PA uses CBCT 3D scans, digital X-rays and the RayFace facial scanner for more accurate diagnosis and planning.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/patient-information/advanced-technology/">
```

## 2. Page build rules

- **One H1:** "Advanced Dental Technology in Bensalem, PA". Breadcrumb: Home › Patient Information › Advanced Technology.
- **Images:** use real photos of the practice's CBCT unit and RayFace scanner if available, with alt text such as "CBCT 3D scanner at Amazing Smiles By Design, Bensalem". No stock images labelled as this office's equipment.
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
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/advanced-technology/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/patient-information/advanced-technology/",
      "name": "CBCT Scans & Advanced Dental Technology | Bensalem, PA",
      "description": "Amazing Smiles By Design in Bensalem, PA uses CBCT 3D scans, digital X-rays and the RayFace facial scanner for more accurate diagnosis and planning.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/patient-information/advanced-technology/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/advanced-technology/#breadcrumb",
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
          "name": "Advanced Technology",
          "item": "https://www.amazingsmilesbydesign.com/patient-information/advanced-technology/"
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
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/advanced-technology/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/patient-information/advanced-technology/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a CBCT scan at the dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A CBCT (cone beam computed tomography) scan is a 3D dental imaging technology that captures detailed images of the teeth, jawbone, nerves and surrounding structures, giving a complete 3D view that flat X-rays can't provide."
          }
        },
        {
          "@type": "Question",
          "name": "Does Amazing Smiles By Design have a CBCT scanner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Amazing Smiles By Design in Bensalem, PA uses cone beam CT (CBCT) scans, along with digital X-rays and the RayFace facial scanner."
          }
        },
        {
          "@type": "Question",
          "name": "How are digital X-rays different from film X-rays?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital X-rays offer improved clarity while significantly reducing radiation exposure, and the images appear instantly on a computer screen so the dentist can review them with you right away."
          }
        },
        {
          "@type": "Question",
          "name": "What is the RayFace facial scanner used for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The RayFace scanner captures detailed 3D images of your face so the dentist can analyze how your teeth, lips, jaw and facial features work together when designing treatment."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
