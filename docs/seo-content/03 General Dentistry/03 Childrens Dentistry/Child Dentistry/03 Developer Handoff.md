# Children's Dentistry: Developer Handoff

**URL:** `/general-dentistry/child-dentistry/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Children's Dentist in Bensalem, PA | Kids' Dental Care</title>
<meta name="description" content="Gentle children's dentistry in Bensalem, PA: first visits from age one, cleanings, fluoride and sealants. Child Membership Plan $212 a year.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/general-dentistry/child-dentistry/">
<meta property="og:type" content="website">
<meta property="og:title" content="Children's Dentist in Bensalem, PA | Kids' Dental Care">
<meta property="og:description" content="Gentle children's dentistry in Bensalem, PA: first visits from age one, cleanings, fluoride and sealants. Child Membership Plan $212 a year.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/general-dentistry/child-dentistry/">
```

## 2. Page build rules

- **One H1:** "Children's Dentistry in Bensalem". Breadcrumb: Home › General Dentistry › Children's Dentistry.
- **Keep the URL** `/general-dentistry/child-dentistry/` (current URL).
- **Never call the practice a pediatric dentist or pediatric specialist.** Use "children's dentistry".
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/child-dentistry/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/general-dentistry/child-dentistry/",
      "name": "Children's Dentist in Bensalem, PA | Kids' Dental Care",
      "description": "Gentle children's dentistry in Bensalem, PA: first visits from age one, cleanings, fluoride and sealants. Child Membership Plan $212 a year.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/child-dentistry/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/child-dentistry/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/child-dentistry/#breadcrumb",
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
          "name": "Children's Dentistry",
          "item": "https://www.amazingsmilesbydesign.com/general-dentistry/child-dentistry/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/child-dentistry/#procedure",
      "name": "Children's dentistry",
      "description": "Helping children develop healthy dental habits early is one of the most important steps toward a lifetime of strong smiles."
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/child-dentistry/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/child-dentistry/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When should a child first see a dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A child's first regular dental visit should take place just after their first birthday. The first visit is usually short and focuses on a gentle exam and showing parents how to care for their child's teeth."
          }
        },
        {
          "@type": "Question",
          "name": "Do you see kids at Amazing Smiles By Design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Amazing Smiles By Design in Bensalem, PA provides children's dentistry, including exams, cleanings, fluoride treatments and dental sealants."
          }
        },
        {
          "@type": "Question",
          "name": "Can I stay with my child during the visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. At the first visit, you may sit in the dental chair and hold your child during the exam."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer fluoride treatment for kids?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Topical fluoride may be applied during your child's visit to help protect against decay, and the Child Membership Plan includes 2 fluoride treatments a year."
          }
        },
        {
          "@type": "Question",
          "name": "Is Amazing Smiles By Design a pediatric dentist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amazing Smiles By Design is a general and family dental practice that provides children's dentistry in Bensalem, PA. It is not a pediatric specialty practice."
          }
        },
        {
          "@type": "Question",
          "name": "Why are baby teeth important if they fall out?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Baby teeth hold space for permanent teeth, support chewing and nutrition, help with speech development and contribute to your child's appearance and confidence."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
