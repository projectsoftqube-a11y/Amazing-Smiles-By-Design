# New Patients: Developer Handoff

**URL:** `/patient-information/new-patients/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dentist Accepting New Patients in Bensalem, PA</title>
<meta name="description" content="Amazing Smiles By Design is welcoming new patients in Bensalem, PA. See what happens at your first visit, our new patient specials and how to book.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/patient-information/new-patients/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dentist Accepting New Patients in Bensalem, PA">
<meta property="og:description" content="Amazing Smiles By Design is welcoming new patients in Bensalem, PA. See what happens at your first visit, our new patient specials and how to book.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/patient-information/new-patients/">
```

## 2. Page build rules

- **One H1:** "Dentist Accepting New Patients in Bensalem, PA". Breadcrumb: Home › Patient Information › New Patients.
- **Appointment form** with `id="appointment-form"`, the same fields as the current site. HIPAA: don't collect health details; submit over HTTPS to the practice's secure inbox or practice-management system; add a privacy-policy link beside the form.
- **Pre-select "New Patient Exam & Cleaning"** on this page.
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
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/new-patients/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/patient-information/new-patients/",
      "name": "Dentist Accepting New Patients in Bensalem, PA",
      "description": "Amazing Smiles By Design is welcoming new patients in Bensalem, PA. See what happens at your first visit, our new patient specials and how to book.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/patient-information/new-patients/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/new-patients/#breadcrumb",
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
          "name": "New Patients",
          "item": "https://www.amazingsmilesbydesign.com/patient-information/new-patients/"
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
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/new-patients/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/patient-information/new-patients/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Amazing Smiles By Design accepting new patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Amazing Smiles By Design in Bensalem, PA is welcoming new patients. Call or text (215) 639-5331, or request an appointment online."
          }
        },
        {
          "@type": "Question",
          "name": "What happens at a new patient dental visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We diagnose your immediate dental concerns, review your past medical and dental history, complete a thorough, comprehensive dental evaluation and create a treatment plan for your optimal dental health."
          }
        },
        {
          "@type": "Question",
          "name": "Does the first visit include a cleaning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A new patient exam and cleaning visit includes an exam, X-rays and a cleaning if applicable."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have specials for new patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. New patients can get an emergency exam, including the necessary X-rays, for a one-time fee of $59. Patients without insurance can also join one of our membership plans."
          }
        },
        {
          "@type": "Question",
          "name": "Which days can I book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The office is open Monday 8 am to 6 pm, Tuesday 8 am to 5 pm, Wednesday 8 am to 6 pm and Thursday 8 am to 2 pm, with morning and afternoon appointments."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
