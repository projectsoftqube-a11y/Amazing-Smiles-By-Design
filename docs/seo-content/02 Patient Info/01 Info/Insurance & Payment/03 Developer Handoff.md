# Insurance & Payment: Developer Handoff

**URL:** `/patient-information/insurance-payment-options/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Dental Insurance & PPO Plans Accepted | Bensalem Dentist</title>
<meta name="description" content="Your PPO insurance is accepted at Amazing Smiles By Design in Bensalem, PA. See carriers we work with, how we bill your insurance and payment policies.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/patient-information/insurance-payment-options/">
<meta property="og:type" content="website">
<meta property="og:title" content="Dental Insurance & PPO Plans Accepted | Bensalem Dentist">
<meta property="og:description" content="Your PPO insurance is accepted at Amazing Smiles By Design in Bensalem, PA. See carriers we work with, how we bill your insurance and payment policies.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/patient-information/insurance-payment-options/">
```

## 2. Page build rules

- **One H1:** "Dental Insurance and Payment Options". Breadcrumb: Home › Patient Information › Insurance & Payment.
- **Full carrier list:** copy every entry from the current page (about 150+ entries) into an expandable `<details>` list. Keep the entry names exactly as written; the text must be in the HTML (searchable with Ctrl+F) so patients and search engines can find their plan.
- **Don't claim "Blue Cross Blue Shield" in general.** The list only includes Blue Cross Blue Shield of Michigan and Blue Shield of CA.
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
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/insurance-payment-options/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/patient-information/insurance-payment-options/",
      "name": "Dental Insurance & PPO Plans Accepted | Bensalem Dentist",
      "description": "Your PPO insurance is accepted at Amazing Smiles By Design in Bensalem, PA. See carriers we work with, how we bill your insurance and payment policies.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/patient-information/insurance-payment-options/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/insurance-payment-options/#breadcrumb",
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
          "name": "Insurance & Payment",
          "item": "https://www.amazingsmilesbydesign.com/patient-information/insurance-payment-options/"
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

No Google rich result since May 2026. Harmless, and keeps the Q&A machine-readable.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.amazingsmilesbydesign.com/patient-information/insurance-payment-options/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/patient-information/insurance-payment-options/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you accept PPO dental insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Your PPO insurance is accepted at Amazing Smiles By Design, and we are in-network with a variety of insurance plans. Call (215) 639-5331 to confirm your plan before your visit."
          }
        },
        {
          "@type": "Question",
          "name": "Which dental insurance companies do you work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with many carriers, including Aetna, Anthem, Cigna, Delta Dental, Guardian, Humana, Kaiser Permanente, MetLife, Principal, United Concordia and UnitedHealthcare."
          }
        },
        {
          "@type": "Question",
          "name": "Will you bill my insurance company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. As a courtesy, we bill your insurance company and track your claim. Most insurance companies respond within four to six weeks."
          }
        },
        {
          "@type": "Question",
          "name": "When is payment due?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Payment is due at the time of service. Any cost remaining after your insurance company responds to the claim is your responsibility."
          }
        },
        {
          "@type": "Question",
          "name": "Does dental insurance cover implants or crowns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Coverage for treatments such as dental implants and crowns depends on your specific plan. Call (215) 639-5331 with your plan details, and our team will help you navigate your benefits."
          }
        },
        {
          "@type": "Question",
          "name": "What if I don't have dental insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can join one of our in-office membership plans, or spread the cost of treatment with CareCredit or Cherry financing."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
