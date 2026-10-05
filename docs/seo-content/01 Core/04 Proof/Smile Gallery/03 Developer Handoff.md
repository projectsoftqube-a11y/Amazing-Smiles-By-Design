# Smile Gallery: Developer Handoff

**URL:** `/smile-gallery/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Smile Makeover Before and After | Smile Gallery | Bensalem</title>
<meta name="description" content="See before-and-after smile makeover photos from Amazing Smiles By Design in Bensalem, PA, and learn which treatments can help improve your smile.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/smile-gallery/">
<meta property="og:type" content="website">
<meta property="og:title" content="Smile Makeover Before and After | Smile Gallery | Bensalem">
<meta property="og:description" content="See before-and-after smile makeover photos from Amazing Smiles By Design in Bensalem, PA, and learn which treatments can help improve your smile.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/smile-gallery/">
```

## 2. Page build rules

- **One H1:** "Smile Makeover Before and After Gallery". Breadcrumb: Home › Smile Gallery.
- **Before/after cases:** reuse the 3 cases from the current homepage slider (the old site repeats them, so show each once). Use an accessible comparison slider: keyboard operable, with a visible label.
- **Alt text per image:** "Smile before treatment, case 1" / "Smile after treatment, case 1", and so on. Add the treatment name to the caption and alt text only if the practice says which treatment each case shows. Don't guess.
- **Copy the image files** onto the new site; don't hotlink pbhshosting.com.
- **Keep the "Individual results vary" line** directly under the photos.
- **When real image URLs exist,** add them to the ImageGallery schema as `"image": [ {"@type": "ImageObject", "contentUrl": "...", "caption": "..."} ]`.
- **Always:** server-render all text; crawlable `<a href>` links; phone `tel:+12156395331`, text `sms:+12156395331`; NAP identical to the homepage and footer.

## 3. Structured data (JSON-LD)

### 3a. Core: ImageGallery + BreadcrumbList + Dentist (required)

Same `#dentist` `@id` as the homepage.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageGallery",
      "@id": "https://www.amazingsmilesbydesign.com/smile-gallery/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/smile-gallery/",
      "name": "Smile Makeover Before and After | Smile Gallery | Bensalem",
      "description": "See before-and-after smile makeover photos from Amazing Smiles By Design in Bensalem, PA, and learn which treatments can help improve your smile.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/smile-gallery/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/smile-gallery/#breadcrumb",
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
          "name": "Smile Gallery",
          "item": "https://www.amazingsmilesbydesign.com/smile-gallery/"
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

No Google rich result since May 2026. Harmless.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.amazingsmilesbydesign.com/smile-gallery/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/smile-gallery/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a smile makeover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A smile makeover is a plan to improve the appearance of your smile using one or more dental treatments, such as teeth whitening, porcelain veneers, dental bonding, clear aligners, crowns or implants."
          }
        },
        {
          "@type": "Question",
          "name": "Which smile makeover treatments does Amazing Smiles By Design offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amazing Smiles By Design in Bensalem offers teeth whitening, porcelain veneers, dental bonding, clear aligners, dental crowns and dental implants."
          }
        },
        {
          "@type": "Question",
          "name": "How do I start a smile makeover in Bensalem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call or text (215) 639-5331 or request an appointment online to book a visit with Dr. Keyur Dudhat at 3101 Bristol Road, Suite 1, Bensalem, PA 19020."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
