# Dental Implants: Developer Handoff

**URL:** `/restorative-dentistry/dental-implants/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dental Implants Bensalem, PA | Amazing Smiles By Design</title>
<meta name="description" content="Dental implants in Bensalem, PA with Dr. Keyur Dudhat: single-tooth and full-arch options planned with advanced 3D imaging. Call or text (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-implants/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Implants Bensalem, PA | Amazing Smiles By Design">
<meta property="og:description" content="Dental implants in Bensalem, PA with Dr. Keyur Dudhat: single-tooth and full-arch options planned with advanced 3D imaging. Call or text (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-implants/">
```

## 2. Page build rules

- **One H1:** "Dental Implants in Bensalem, PA". Breadcrumb: Home › Restorative Dentistry › Dental Implants.
- **Highest-value page on the site** (dental implants near me 110K). Put the consultation button and phone above the fold on mobile.
- **Comparison table** as a real HTML `<table>`.
- **No implant prices** and no "guaranteed" or "lifetime" wording. The 20% member discount does not apply to implants.
- **Sedation:** keep only "Ask us about dental sedation options". Don't list sedation types.
- **Images:** real CBCT or case photos only, with consent; no stock images presented as this office's patients.
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-implants/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-implants/",
      "name": "Dental Implants Bensalem, PA | Amazing Smiles By Design",
      "description": "Dental implants in Bensalem, PA with Dr. Keyur Dudhat: single-tooth and full-arch options planned with advanced 3D imaging. Call or text (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-implants/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-implants/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-implants/#breadcrumb",
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
          "name": "Dental Implants",
          "item": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-implants/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-implants/#procedure",
      "name": "Dental implants",
      "description": "Dental implants are small titanium or zirconia posts placed in the jawbone to replace the root of a missing tooth, then topped with a custom crown, bridge or full-arch restoration."
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
      "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-implants/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-implants/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much do dental implants cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of dental implants depends on how many teeth are being replaced, the type of restoration and whether bone grafting is needed. Amazing Smiles By Design provides a personalized treatment plan at your consultation and offers financing through CareCredit and Cherry."
          }
        },
        {
          "@type": "Question",
          "name": "How long do dental implants last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With proper care, many dental implants remain functional for decades."
          }
        },
        {
          "@type": "Question",
          "name": "Are dental implants painful?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Implant placement is performed under local anesthesia, so the area is numb during the procedure. Most patients return to normal daily activities shortly after surgery."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the dental implant process take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The implant itself is placed in a minor surgical procedure, then bonds with the jawbone over several months before the final crown or restoration is attached."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer dental implants in Bensalem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dr. Keyur Dudhat provides dental implants at Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020, with treatment planned using detailed imaging, including CBCT scans."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
