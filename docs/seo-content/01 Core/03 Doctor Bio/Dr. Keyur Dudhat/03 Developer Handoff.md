# Dr. Keyur Dudhat: Developer Handoff

**URL:** `/about-us/dr-keyur-dudhat/` | **Status:** Final v1, 2 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Dr. Keyur Dudhat, DMD | Amazing Smiles By Design</title>
<meta name="description" content="Meet Dr. Keyur Dudhat, DMD, of Amazing Smiles By Design in Bensalem, PA: a Temple University graduate focused on implant and cosmetic dentistry.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/about-us/dr-keyur-dudhat/">
<meta property="og:type" content="profile">
<meta property="og:title" content="Dr. Keyur Dudhat, DMD | Amazing Smiles By Design">
<meta property="og:description" content="Meet Dr. Keyur Dudhat, DMD, of Amazing Smiles By Design in Bensalem, PA: a Temple University graduate focused on implant and cosmetic dentistry.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/about-us/dr-keyur-dudhat/">
<!-- og:image: Dr. Dudhat's headshot once available (1200x630 crop) -->
```

## 2. Page build rules

- **One H1:** "Dr. Keyur Dudhat, DMD". The line under it ("Dentist at Amazing Smiles By Design, Bensalem, Pennsylvania") is a styled paragraph, not a heading.
- **Breadcrumb:** visible, Home › About Us › Dr. Keyur Dudhat, matching the BreadcrumbList schema.
- **"Dr. Dudhat at a Glance":** build it as a real HTML table or definition list (`<dl>`), not an image. AI tools and search engines read these facts directly.
- **Headshot:** use a real photo of Dr. Dudhat. Alt text: "Dr. Keyur Dudhat, DMD, dentist at Amazing Smiles By Design in Bensalem, PA". When available, add `"image": "<headshot URL>"` to the Person node in the schema.
- **FAQs:** visible, with answer text in the HTML on load (`<details>`/`<summary>` is fine).
- **Server-render all text.** All links are crawlable `<a href>`. Phone: `tel:+12156395331`, text: `sms:+12156395331`.

## 3. Structured data (JSON-LD)

### 3a. Core: ProfilePage + Person + BreadcrumbList + Dentist (required)

The Person `@id` (`https://www.amazingsmilesbydesign.com/about-us/dr-keyur-dudhat/#person`) is the canonical ID for Dr. Dudhat. The homepage and About page schema already use this same `@id`, so all three pages describe one person. The Dentist node links back to him through `employee`.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://www.amazingsmilesbydesign.com/about-us/dr-keyur-dudhat/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/about-us/dr-keyur-dudhat/",
      "name": "Dr. Keyur Dudhat, DMD | Amazing Smiles By Design",
      "description": "Meet Dr. Keyur Dudhat, DMD, of Amazing Smiles By Design in Bensalem, PA: a Temple University graduate focused on implant and cosmetic dentistry.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "mainEntity": {
        "@id": "https://www.amazingsmilesbydesign.com/about-us/dr-keyur-dudhat/#person"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/about-us/dr-keyur-dudhat/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/about-us/dr-keyur-dudhat/#breadcrumb",
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dr. Keyur Dudhat",
          "item": "https://www.amazingsmilesbydesign.com/about-us/dr-keyur-dudhat/"
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
      "description": "Dr. Keyur Dudhat, DMD, is a dentist at Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020. He earned his Doctor of Dental Medicine degree from Temple University and provides comprehensive dental care with a special focus on implant and cosmetic dentistry.",
      "worksFor": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      },
      "birthPlace": {
        "@type": "Place",
        "name": "Lansdale, Pennsylvania"
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
        "Cosmetic dentistry",
        "Porcelain veneers"
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
      "employee": {
        "@id": "https://www.amazingsmilesbydesign.com/about-us/dr-keyur-dudhat/#person"
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
      "@id": "https://www.amazingsmilesbydesign.com/about-us/dr-keyur-dudhat/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/about-us/dr-keyur-dudhat/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where does Dr. Keyur Dudhat practice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Keyur Dudhat practices at Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020. You can call or text the office at (215) 639-5331."
          }
        },
        {
          "@type": "Question",
          "name": "Where did Dr. Dudhat go to dental school?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Dudhat earned his Doctor of Dental Medicine (DMD) degree from Temple University. He completed his undergraduate studies at Penn State University."
          }
        },
        {
          "@type": "Question",
          "name": "What does Dr. Dudhat focus on?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Dudhat provides comprehensive dental care with a special focus on implant and cosmetic dentistry, and he regularly pursues advanced training in procedures such as dental implants and veneers."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book an appointment with Dr. Dudhat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call or text (215) 639-5331, or request an appointment online. The office is open Monday 8 am to 6 pm, Tuesday 8 am to 5 pm, Wednesday 8 am to 6 pm and Thursday 8 am to 2 pm."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
