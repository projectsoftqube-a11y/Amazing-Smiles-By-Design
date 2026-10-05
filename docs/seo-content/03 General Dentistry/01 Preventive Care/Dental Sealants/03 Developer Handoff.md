# Dental Sealants: Developer Handoff

**URL:** `/general-dentistry/dental-sealants/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dental Sealants for Kids | Bensalem, PA | Amazing Smiles</title>
<meta name="description" content="Dental sealants in Bensalem, PA: protective coatings that help keep cavities out of children's back teeth. How they work, who needs them and cost.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/general-dentistry/dental-sealants/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Sealants for Kids | Bensalem, PA | Amazing Smiles">
<meta property="og:description" content="Dental sealants in Bensalem, PA: protective coatings that help keep cavities out of children's back teeth. How they work, who needs them and cost.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/general-dentistry/dental-sealants/">
```

## 2. Page build rules

- **One H1:** "Dental Sealants in Bensalem". Breadcrumb: Home › General Dentistry › Dental Sealants.
- **The old Sealants URL showed the Children's Dentistry text** (duplicate). Replace it fully with this page so the two pages no longer duplicate each other.
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-sealants/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-sealants/",
      "name": "Dental Sealants for Kids | Bensalem, PA | Amazing Smiles",
      "description": "Dental sealants in Bensalem, PA: protective coatings that help keep cavities out of children's back teeth. How they work, who needs them and cost.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-sealants/#breadcrumb"
      },
      "about": [
        {
          "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-sealants/#procedure"
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-sealants/#breadcrumb",
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
          "name": "Dental Sealants",
          "item": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-sealants/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-sealants/#procedure",
      "name": "Dental sealants",
      "description": "Dental sealants are protective coatings bonded to the chewing surfaces of the back teeth, helping block the bacteria and food particles that cause cavities."
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
      "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-sealants/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-sealants/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are dental sealants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental sealants are protective coatings bonded to the chewing surfaces of the back teeth. They help block the bacteria and food particles that cause cavities in the deep grooves of molars and premolars."
          }
        },
        {
          "@type": "Question",
          "name": "Are dental sealants worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sealants are a simple, preventive way to protect the back teeth, where cavities often start. Ask the dentist at your child's checkup whether sealants are a good choice for your child."
          }
        },
        {
          "@type": "Question",
          "name": "Does getting sealants hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sealants are usually applied without drilling. The tooth is cleaned and dried, and the sealant is painted on and hardened."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer sealants for kids in Bensalem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Amazing Smiles By Design in Bensalem, PA uses dental sealants to help protect children's cavity-prone back teeth."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
