# Contact Us: Developer Handoff

**URL:** `/contact-us/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Contact Our Dental Office in Bensalem | Amazing Smiles</title>
<meta name="description" content="Contact Amazing Smiles By Design at 3101 Bristol Road, Suite 1, Bensalem, PA 19020. Call or text (215) 639-5331. Office hours, map and directions.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/contact-us/">
<meta property="og:type" content="website">
<meta property="og:title" content="Contact Our Dental Office in Bensalem | Amazing Smiles">
<meta property="og:description" content="Contact Amazing Smiles By Design at 3101 Bristol Road, Suite 1, Bensalem, PA 19020. Call or text (215) 639-5331. Office hours, map and directions.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/contact-us/">
```

## 2. Page build rules

- **One H1:** "Contact Our Dental Office in Bensalem". Breadcrumb: Home › Contact Us.
- **NAP block and hours table** as HTML text, identical character for character to the homepage, footer and Google Business Profile.
- **Map:** lazy-loaded Google Maps embed (place ID `ChIJzZkTohhNwYkRwJ2tUx9cZ98`).
- **Directions tool:** a "starting address" input that opens `https://www.google.com/maps/dir/?api=1&origin=<input>&destination=3101+Bristol+Road+Suite+1+Bensalem+PA+19020` in a new tab. This replaces the old site's directions form.
- **Email:** the old site shows an email address (hidden from crawlers). Show it only if the practice confirms the address. Use a protected mailto link, not plain text.
- **Contact form:** optional. If you add one, it must not collect health details beyond name, phone, email and preferred time (HIPAA). Send submissions to the practice securely.
- **Track** calls, texts, directions clicks and appointment-request clicks as separate conversions.
- **Always:** server-render all text; crawlable `<a href>` links; phone `tel:+12156395331`, text `sms:+12156395331`; NAP identical to the homepage and footer.

## 3. Structured data (JSON-LD)

### 3a. Core: ContactPage + BreadcrumbList + Dentist (required)

Full NAP, fax, hours, map link and appointments contact point. Same `#dentist` `@id` as the homepage.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.amazingsmilesbydesign.com/contact-us/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/contact-us/",
      "name": "Contact Our Dental Office in Bensalem | Amazing Smiles",
      "description": "Contact Amazing Smiles By Design at 3101 Bristol Road, Suite 1, Bensalem, PA 19020. Call or text (215) 639-5331. Office hours, map and directions.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/contact-us/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      },
      "mainEntity": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/contact-us/#breadcrumb",
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
          "name": "Contact Us",
          "item": "https://www.amazingsmilesbydesign.com/contact-us/"
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
      "faxNumber": "+1-215-639-1921",
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
      ],
      "hasMap": "https://www.google.com/maps/place/?q=place_id:ChIJzZkTohhNwYkRwJ2tUx9cZ98",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-215-639-5331",
        "contactType": "appointments"
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Bensalem, PA"
        },
        {
          "@type": "Place",
          "name": "Feasterville, PA"
        },
        {
          "@type": "Place",
          "name": "Fairless Hills, PA"
        },
        {
          "@type": "Place",
          "name": "Trevose, PA"
        },
        {
          "@type": "Place",
          "name": "Hulmeville, PA"
        },
        {
          "@type": "Place",
          "name": "Langhorne, PA"
        },
        {
          "@type": "Place",
          "name": "Parkland, PA"
        }
      ]
    }
  ]
}
```

### 3b. FAQPage (optional)

No Google rich result since May 2026. Harmless.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.amazingsmilesbydesign.com/contact-us/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/contact-us/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the address of Amazing Smiles By Design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amazing Smiles By Design is at 3101 Bristol Road, Suite 1, Bensalem, PA 19020."
          }
        },
        {
          "@type": "Question",
          "name": "What is the phone number for Amazing Smiles By Design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The phone number is (215) 639-5331. You can call or text. The fax number is (215) 639-1921."
          }
        },
        {
          "@type": "Question",
          "name": "What are your office hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are open Monday 8 am to 6 pm, Tuesday 8 am to 5 pm, Wednesday 8 am to 6 pm and Thursday 8 am to 2 pm."
          }
        },
        {
          "@type": "Question",
          "name": "Are you open on Fridays or weekends?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The office is closed Friday, Saturday and Sunday."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book an appointment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call or text (215) 639-5331, or request an appointment online through our scheduling page."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if I have a dental emergency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call or text (215) 639-5331 and tell us what happened. New patients can have an emergency exam, including any necessary X-rays, for a one-time fee of $59."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
