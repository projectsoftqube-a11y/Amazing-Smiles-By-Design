# About Us: Developer Handoff

**URL:** `/about-us/` | **Status:** Final v1, 2 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>About Us | Amazing Smiles By Design, Bensalem PA</title>
<meta name="description" content="About Amazing Smiles By Design in Bensalem, PA: Dr. Keyur Dudhat, our family-style approach to care and the technology we use. Call (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/about-us/">
<meta property="og:type" content="website">
<meta property="og:title" content="About Us | Amazing Smiles By Design, Bensalem PA">
<meta property="og:description" content="About Amazing Smiles By Design in Bensalem, PA: Dr. Keyur Dudhat, our family-style approach to care and the technology we use. Call (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/about-us/">
```

## 2. Page build rules

- **One H1:** "About Amazing Smiles By Design in Bensalem". Keep the H2 order from `02 Content.md`.
- **Breadcrumb:** show a visible breadcrumb, Home › About Us, matching the BreadcrumbList schema.
- **Server-render all text** (same rule as the homepage).
- **NAP and hours** as plain text, identical to the homepage and footer.
- **Links:** `tel:+12156395331` and `sms:+12156395331`. All internal links are crawlable `<a href>`.
- **Images:**
  - A photo of Dr. Dudhat near "Meet Dr. Keyur Dudhat, DMD". Alt text: "Dr. Keyur Dudhat, DMD, dentist at Amazing Smiles By Design in Bensalem, PA".
  - Office or team photos if available. Use only real photos of this practice.
- **Review excerpt:** plain text only. No Review markup.

## 3. Structured data (JSON-LD)

One script block on `/about-us/`. It reuses the same `@id`s as the homepage (`/#dentist`, `/#website`, `/about-us/dr-keyur-dudhat/#person`), so search engines join the pages into one entity. Keep NAP and hours identical to the homepage schema.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.amazingsmilesbydesign.com/about-us/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/about-us/",
      "name": "About Us | Amazing Smiles By Design, Bensalem PA",
      "description": "About Amazing Smiles By Design in Bensalem, PA: Dr. Keyur Dudhat, our family-style approach to care and the technology we use. Call (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      },
      "mainEntity": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/about-us/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/about-us/#breadcrumb",
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
          "name": "About Us",
          "item": "https://www.amazingsmilesbydesign.com/about-us/"
        }
      ]
    },
    {
      "@type": "Dentist",
      "@id": "https://www.amazingsmilesbydesign.com/#dentist",
      "name": "Amazing Smiles By Design",
      "url": "https://www.amazingsmilesbydesign.com/",
      "telephone": "+1-215-639-5331",
      "logo": "https://www.amazingsmilesbydesign.com/images/amazing-smiles-by-design-logo.png",
      "image": "https://www.amazingsmilesbydesign.com/images/amazing-smiles-by-design-logo.png",
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
      ],
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
    },
    {
      "@type": "Person",
      "@id": "https://www.amazingsmilesbydesign.com/about-us/dr-keyur-dudhat/#person",
      "name": "Keyur Dudhat",
      "honorificPrefix": "Dr.",
      "honorificSuffix": "DMD",
      "jobTitle": "Dentist",
      "url": "https://www.amazingsmilesbydesign.com/about-us/dr-keyur-dudhat/",
      "worksFor": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      },
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "Temple University"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "Penn State University"
        }
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "Doctor of Dental Medicine (DMD)",
        "recognizedBy": {
          "@type": "CollegeOrUniversity",
          "name": "Temple University"
        }
      },
      "knowsAbout": [
        "Dental implants",
        "Cosmetic dentistry"
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
