# Dental Checkups & X-Rays: Developer Handoff

**URL:** `/general-dentistry/dental-checkups-x-rays/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Teeth Cleaning & Dental Checkups | Bensalem, PA</title>
<meta name="description" content="Dental cleanings, exams and digital X-rays in Bensalem, PA. See what happens at a checkup, how often to come in and the $269 Regular Membership Plan.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/general-dentistry/dental-checkups-x-rays/">
<meta property="og:type" content="website">
<meta property="og:title" content="Teeth Cleaning & Dental Checkups | Bensalem, PA">
<meta property="og:description" content="Dental cleanings, exams and digital X-rays in Bensalem, PA. See what happens at a checkup, how often to come in and the $269 Regular Membership Plan.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/general-dentistry/dental-checkups-x-rays/">
```

## 2. Page build rules

- **One H1:** "Dental Cleanings, Checkups & X-Rays in Bensalem". Breadcrumb: Home › General Dentistry › Dental Checkups & X-Rays.
- **Exam / X-ray images:** real office photos only; no stock images labelled as this office.
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-checkups-x-rays/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-checkups-x-rays/",
      "name": "Teeth Cleaning & Dental Checkups | Bensalem, PA",
      "description": "Dental cleanings, exams and digital X-rays in Bensalem, PA. See what happens at a checkup, how often to come in and the $269 Regular Membership Plan.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-checkups-x-rays/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-checkups-x-rays/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-checkups-x-rays/#breadcrumb",
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
          "name": "Dental Checkups & X-Rays",
          "item": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-checkups-x-rays/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-checkups-x-rays/#procedure",
      "name": "Dental exam, cleaning and X-rays",
      "description": "Regular dental exams and professional cleanings are the foundation of a healthy smile."
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-checkups-x-rays/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-checkups-x-rays/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should you get your teeth cleaned?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most patients should have a professional dental cleaning and exam every six months. Patients who have had gum disease often need periodontal maintenance cleanings every three to four months."
          }
        },
        {
          "@type": "Question",
          "name": "Are dental X-rays safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital dental X-rays use significantly less radiation than traditional X-ray systems while producing highly detailed images. The dentist takes X-rays only as often as your oral health needs require."
          }
        },
        {
          "@type": "Question",
          "name": "How often do I need dental X-rays?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital X-rays typically need to be taken once a year, although this may vary depending on your oral health needs."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a teeth cleaning cost without insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Amazing Smiles By Design, the Regular Membership Plan costs $269 a year and includes 2 professional cleanings, 2 checkup exams, routine X-rays and an emergency exam."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in a dental exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A dental exam includes a review of your medical and dental history, a check of your teeth, existing dental work, bite and jaw, a gum health evaluation, an oral cancer screening and X-rays when needed."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
