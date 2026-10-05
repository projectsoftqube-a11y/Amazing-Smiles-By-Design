# Specials & Membership Plans: Developer Handoff

**URL:** `/specials/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Affordable Dentist in Bensalem | Membership Plans & Specials</title>
<meta name="description" content="No insurance? Our Bensalem membership plans cover cleanings, exams and X-rays from $212 a year, plus 20% off most other dental care. Call (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/specials/">
<meta property="og:type" content="website">
<meta property="og:title" content="Affordable Dentist in Bensalem | Membership Plans & Specials">
<meta property="og:description" content="No insurance? Our Bensalem membership plans cover cleanings, exams and X-rays from $212 a year, plus 20% off most other dental care. Call (215) 639-5331.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/specials/">
```

## 2. Page build rules

- **One H1:** "Affordable Dental Membership Plans in Bensalem". Breadcrumb: Home › Specials & Membership Plans.
- **Comparison table:** a real HTML `<table>` with a header row, not an image. It must stay readable on mobile (horizontal scroll or stacked cards), and the text must stay in the HTML.
- **Prices** appear as text: $269, $450, $212, $59. If the practice changes a price, update the page, the Offer schema here and the homepage schema together.
- **FAQs:** visible, with answers in the HTML on load.
- **No countdowns, "limited time" banners or fake urgency.** The plans are ongoing.
- **Track** call/text clicks on this page as a separate conversion (membership interest).
- **Always:** server-render all text; crawlable `<a href>` links; phone `tel:+12156395331`, text `sms:+12156395331`; NAP identical to the homepage and footer.

## 3. Structured data (JSON-LD)

### 3a. Core: WebPage + BreadcrumbList + Dentist with plan Offers (required)

Plan Offers match the visible plans exactly. Same `#dentist` `@id` as the homepage.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.amazingsmilesbydesign.com/specials/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/specials/",
      "name": "Affordable Dentist in Bensalem | Membership Plans & Specials",
      "description": "No insurance? Our Bensalem membership plans cover cleanings, exams and X-rays from $212 a year, plus 20% off most other dental care. Call (215) 639-5331.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/specials/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/specials/#breadcrumb",
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
          "name": "Specials & Membership Plans",
          "item": "https://www.amazingsmilesbydesign.com/specials/"
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
      "makesOffer": [
        {
          "@type": "Offer",
          "name": "Regular Membership Plan",
          "price": "269",
          "priceCurrency": "USD",
          "description": "Annual fee for patients with no insurance. Includes 2 professional cleanings, 2 checkup exams, routine X-rays and an emergency exam. Members get 20% off all other dental procedures, excluding dental implants and Invisalign.",
          "url": "https://www.amazingsmilesbydesign.com/specials/",
          "offeredBy": {
            "@id": "https://www.amazingsmilesbydesign.com/#dentist"
          }
        },
        {
          "@type": "Offer",
          "name": "Perio Maintenance Plan",
          "price": "450",
          "priceCurrency": "USD",
          "description": "Annual fee for patients with no insurance. Includes 4 periodontal maintenance visits, 2 checkup exams and screenings, routine X-rays and an emergency exam. Members get 20% off all other dental procedures, excluding dental implants and Invisalign.",
          "url": "https://www.amazingsmilesbydesign.com/specials/",
          "offeredBy": {
            "@id": "https://www.amazingsmilesbydesign.com/#dentist"
          }
        },
        {
          "@type": "Offer",
          "name": "Child Membership Plan",
          "price": "212",
          "priceCurrency": "USD",
          "description": "Annual fee for children 13 and younger with no insurance. Includes 2 professional cleanings, 2 checkup exams, 2 fluoride treatments, routine X-rays and an emergency exam. Members get 20% off all other dental procedures, excluding dental implants and Invisalign.",
          "url": "https://www.amazingsmilesbydesign.com/specials/",
          "offeredBy": {
            "@id": "https://www.amazingsmilesbydesign.com/#dentist"
          }
        },
        {
          "@type": "Offer",
          "name": "Emergency Visit Special",
          "price": "59",
          "priceCurrency": "USD",
          "description": "One-time fee for new patients only. Includes the necessary exam and X-rays.",
          "url": "https://www.amazingsmilesbydesign.com/specials/",
          "offeredBy": {
            "@id": "https://www.amazingsmilesbydesign.com/#dentist"
          }
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
      "@id": "https://www.amazingsmilesbydesign.com/specials/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/specials/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a dental membership plan cost at Amazing Smiles By Design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Regular Membership Plan is $269 a year, the Perio Maintenance Plan is $450 a year, and the Child Membership Plan (ages 13 and younger) is $212 a year. All three are for patients with no dental insurance."
          }
        },
        {
          "@type": "Question",
          "name": "What does the Regular Membership Plan include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Regular Membership Plan includes 2 professional cleanings, 2 checkup exams, routine X-rays and an emergency exam for an annual fee of $269. Members also get 20% off all other dental procedures, excluding dental implants and Invisalign."
          }
        },
        {
          "@type": "Question",
          "name": "Is a dental membership plan worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you don't have dental insurance, a membership plan covers your routine preventive care for one predictable annual fee and gives you 20% off most other procedures."
          }
        },
        {
          "@type": "Question",
          "name": "Does the membership plan discount apply to dental implants or Invisalign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The 20% member discount applies to all other dental procedures, excluding dental implants and Invisalign."
          }
        },
        {
          "@type": "Question",
          "name": "Who can get the $59 emergency visit special?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The $59 Emergency Visit Special is for new patients only. The one-time fee includes the necessary exam and X-rays."
          }
        },
        {
          "@type": "Question",
          "name": "Can I join a membership plan if I have dental insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our membership plans are for patients with no insurance. If you have insurance, your PPO insurance is accepted here. Call (215) 639-5331 to confirm your plan before your visit."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
