# Emergency Dentistry: Developer Handoff

**URL:** `/general-dentistry/emergency-dentistry/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Emergency Dentist Bensalem, PA | Same-Day When Possible</title>
<meta name="description" content="Emergency dentist in Bensalem, PA for toothaches, broken or knocked-out teeth and infections. Same-day appointments whenever possible. (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/general-dentistry/emergency-dentistry/">
<meta property="og:type" content="website">
<meta property="og:title" content="Emergency Dentist Bensalem, PA | Same-Day When Possible">
<meta property="og:description" content="Emergency dentist in Bensalem, PA for toothaches, broken or knocked-out teeth and infections. Same-day appointments whenever possible. (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/general-dentistry/emergency-dentistry/">
```

## 2. Page build rules

- **One H1:** "Emergency Dentist in Bensalem, PA". Breadcrumb: Home › General Dentistry › Emergency Dentistry.
- **Above the fold on mobile:** the call/text button and the 911 safety line.
- **Keep "whenever possible"** next to every same-day statement. Do not shorten to "same-day guaranteed".
- **This page owns "emergency dentist bensalem".** The Emergency Scheduling page handles booking only.
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/emergency-dentistry/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/general-dentistry/emergency-dentistry/",
      "name": "Emergency Dentist Bensalem, PA | Same-Day When Possible",
      "description": "Emergency dentist in Bensalem, PA for toothaches, broken or knocked-out teeth and infections. Same-day appointments whenever possible. (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/emergency-dentistry/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/emergency-dentistry/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/emergency-dentistry/#breadcrumb",
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
          "name": "Emergency Dentistry",
          "item": "https://www.amazingsmilesbydesign.com/general-dentistry/emergency-dentistry/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/emergency-dentistry/#procedure",
      "name": "Emergency dental care",
      "description": "Our goal is simple: relieve pain quickly, diagnose the problem accurately and provide treatment as soon as possible, often during the very same visit."
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/emergency-dentistry/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/emergency-dentistry/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is considered a dental emergency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A dental emergency is any condition that threatens your teeth, gums or surrounding tissues or causes significant discomfort, such as severe tooth pain, swelling, bleeding that won't stop, signs of infection or trauma to the teeth or mouth."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a same-day emergency dental appointment in Bensalem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, whenever possible. When you text or call Amazing Smiles By Design at (215) 639-5331, our team will help determine how quickly you should be seen and arrange a same-day dental appointment whenever possible."
          }
        },
        {
          "@type": "Question",
          "name": "Do I have to be a current patient to get emergency dental care?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You do not need to be an existing patient to receive emergency dental care at Amazing Smiles By Design. New patients can have an emergency exam, including the necessary X-rays, for $59."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if I'm not sure it's an emergency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Text or call (215) 639-5331. You don't need to diagnose the problem yourself. Our team will listen carefully and tell you whether immediate or same-day care is recommended."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if the office is closed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you have severe facial swelling, trouble breathing or swallowing, or bleeding that won't stop, call 911 or go to the nearest emergency room. For other problems, call or text (215) 639-5331 during office hours: Monday 8 am to 6 pm, Tuesday 8 am to 5 pm, Wednesday 8 am to 6 pm and Thursday 8 am to 2 pm."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
