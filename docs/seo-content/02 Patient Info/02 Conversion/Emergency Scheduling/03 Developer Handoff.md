# Emergency Scheduling: Developer Handoff

**URL:** `/patient-information/emergency-scheduling/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Emergency Dental Appointment in Bensalem | Amazing Smiles</title>
<meta name="description" content="Need an emergency dental appointment in Bensalem, PA? Call or text (215) 639-5331. Every attempt is made to see you that day. $59 exam for new patients.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/patient-information/emergency-scheduling/">
<meta property="og:type" content="website">
<meta property="og:title" content="Emergency Dental Appointment in Bensalem | Amazing Smiles">
<meta property="og:description" content="Need an emergency dental appointment in Bensalem, PA? Call or text (215) 639-5331. Every attempt is made to see you that day. $59 exam for new patients.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/patient-information/emergency-scheduling/">
```

## 2. Page build rules

- **One H1:** "Emergency Dental Appointments in Bensalem". Breadcrumb: Home › Patient Information › Emergency Scheduling.
- **Put the call/text button and the 911 safety line above the fold** on mobile.
- **Emergency form** with `id="appointment-form"`, matching the current emergency page: name, email, phone, "Please specify dental emergency", preferred day (Mon–Thu). HIPAA: keep the field free text and short; no other health details; HTTPS; secure delivery.
- **Don't target "emergency dentist bensalem"** here; it belongs to `/general-dentistry/emergency-dentistry/`. This page is about booking.
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
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/emergency-scheduling/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/patient-information/emergency-scheduling/",
      "name": "Emergency Dental Appointment in Bensalem | Amazing Smiles",
      "description": "Need an emergency dental appointment in Bensalem, PA? Call or text (215) 639-5331. Every attempt is made to see you that day. $59 exam for new patients.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/patient-information/emergency-scheduling/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/emergency-scheduling/#breadcrumb",
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
          "name": "Emergency Scheduling",
          "item": "https://www.amazingsmilesbydesign.com/patient-information/emergency-scheduling/"
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
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/emergency-scheduling/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/patient-information/emergency-scheduling/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I get a same-day emergency dental appointment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you have pain or an emergency situation, every attempt will be made to see you that day. Call or text (215) 639-5331 as soon as possible."
          }
        },
        {
          "@type": "Question",
          "name": "How much is an emergency visit for a new patient?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "New patients can have an emergency visit for a one-time fee of $59, which includes the necessary exam and X-rays."
          }
        },
        {
          "@type": "Question",
          "name": "What counts as a dental emergency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pain, swelling, a broken tooth or an infection are common reasons to book an emergency visit. If you're not sure, call or text us and describe what's happening."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if the office is closed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you have severe facial swelling, trouble breathing or swallowing, or bleeding that won't stop, call 911 or go to the nearest emergency room. For other problems, call or text (215) 639-5331 during office hours."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
