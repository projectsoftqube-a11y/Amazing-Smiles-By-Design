# Scheduling: Developer Handoff

**URL:** `/patient-information/scheduling/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Book a Dentist Appointment in Bensalem | Amazing Smiles</title>
<meta name="description" content="Book a dentist appointment in Bensalem, PA. Text or call (215) 639-5331 or request a time online. Our scheduling coordinator will confirm it.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/patient-information/scheduling/">
<meta property="og:type" content="website">
<meta property="og:title" content="Book a Dentist Appointment in Bensalem | Amazing Smiles">
<meta property="og:description" content="Book a dentist appointment in Bensalem, PA. Text or call (215) 639-5331 or request a time online. Our scheduling coordinator will confirm it.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/patient-information/scheduling/">
```

## 2. Page build rules

- **One H1:** "Book a Dentist Appointment in Bensalem". Breadcrumb: Home › Patient Information › Scheduling.
- **Appointment form** with `id="appointment-form"` (shared component with New Patients and Emergency Scheduling). Preferred-day options Monday–Thursday only.
- **Form handling (HIPAA):** no health details, HTTPS, secure delivery, privacy-policy link. Track form submissions as a conversion.
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
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/scheduling/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/patient-information/scheduling/",
      "name": "Book a Dentist Appointment in Bensalem | Amazing Smiles",
      "description": "Book a dentist appointment in Bensalem, PA. Text or call (215) 639-5331 or request a time online. Our scheduling coordinator will confirm it.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/patient-information/scheduling/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/scheduling/#breadcrumb",
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
          "name": "Scheduling",
          "item": "https://www.amazingsmilesbydesign.com/patient-information/scheduling/"
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
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Wednesday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Tuesday",
          "opens": "08:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Thursday",
          "opens": "08:00",
          "closes": "14:00"
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
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/scheduling/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/patient-information/scheduling/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I book a dental appointment in Bensalem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Text or call Amazing Smiles By Design at (215) 639-5331, or complete the appointment request form on this page. Our scheduling coordinator will contact you to confirm your appointment."
          }
        },
        {
          "@type": "Question",
          "name": "Which days and times can I book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The office is open Monday 8 am to 6 pm, Tuesday 8 am to 5 pm, Wednesday 8 am to 6 pm and Thursday 8 am to 2 pm. You can request a morning or afternoon appointment."
          }
        },
        {
          "@type": "Question",
          "name": "Can I be seen the same day if I'm in pain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you have pain or an emergency situation, every attempt will be made to see you that day. Call or text (215) 639-5331 as soon as possible."
          }
        },
        {
          "@type": "Question",
          "name": "Will someone confirm my appointment request?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our scheduling coordinator will contact you to confirm your appointment."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
