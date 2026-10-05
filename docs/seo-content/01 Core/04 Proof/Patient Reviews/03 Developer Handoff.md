# Patient Reviews: Developer Handoff

**URL:** `/about-us/patient-reviews/` | **Status:** Final v1, 2 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Patient Reviews | Amazing Smiles By Design, Bensalem PA</title>
<meta name="description" content="Read what patients say about Amazing Smiles By Design in Bensalem, PA: friendly staff, comfortable visits, caring hygienists and help in an emergency.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/about-us/patient-reviews/">
<meta property="og:type" content="website">
<meta property="og:title" content="Patient Reviews | Amazing Smiles By Design, Bensalem PA">
<meta property="og:description" content="Read what patients say about Amazing Smiles By Design in Bensalem, PA: friendly staff, comfortable visits, caring hygienists and help in an emergency.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/about-us/patient-reviews/">
```

## 2. Page build rules

- **One H1:** "Amazing Smiles By Design Reviews".
- **Breadcrumb:** visible, Home › About Us › Patient Reviews.
- **Reviews:**
  - Render all six as plain HTML text: a `<blockquote>` with a `<cite>` for the name and month.
  - **Not a carousel that hides reviews.** The current site renders every review twice (two carousels), and one copy is truncated. Render each review once, in full.
  - Keep the text exactly as written, including spelling ("Xrays", "appt").
- **No review schema.** Don't add `Review` or `AggregateRating` markup for the practice's own testimonials. Google doesn't show stars for self-serving reviews on a business's own site, and invented or unverifiable ratings are a policy risk. Never show a star rating or review count that isn't from a verifiable source.
- **"What Patients Mention Most":** keep the counts in sync with the reviews. If reviews are added or removed, update the counts.
- **Optional later:** a Google review widget or a "Leave a review" button once the Google Business Profile review link is available. Then also add the Profile URL to `sameAs` in the homepage schema.
- **Server-render all text.** Crawlable `<a href>` links. Phone `tel:+12156395331`, text `sms:+12156395331`.

## 3. Structured data (JSON-LD)

WebPage + BreadcrumbList + Dentist (reference only; same `@id`s as the homepage).

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.amazingsmilesbydesign.com/about-us/patient-reviews/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/about-us/patient-reviews/",
      "name": "Patient Reviews | Amazing Smiles By Design, Bensalem PA",
      "description": "Read what patients say about Amazing Smiles By Design in Bensalem, PA: friendly staff, comfortable visits, caring hygienists and help in an emergency.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/about-us/patient-reviews/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/about-us/patient-reviews/#breadcrumb",
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
          "name": "Patient Reviews",
          "item": "https://www.amazingsmilesbydesign.com/about-us/patient-reviews/"
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
