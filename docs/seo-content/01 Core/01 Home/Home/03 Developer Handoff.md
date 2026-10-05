# Home: Developer Handoff

**URL:** `/` | **Status:** Final v1, 2 Oct 2026. Ready to build.

## 1. Head tags

```html
<title>Bensalem Dentist | Amazing Smiles By Design</title>
<meta name="description" content="Bensalem dentist Dr. Keyur Dudhat offers family, implant and cosmetic care. PPO insurance accepted, plus membership plans. Call (215) 639-5331.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/">
<meta property="og:type" content="website">
<meta property="og:title" content="Bensalem Dentist | Amazing Smiles By Design">
<meta property="og:description" content="Family, implant and cosmetic dentistry with Dr. Keyur Dudhat in Bensalem, PA.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/">
<!-- og:image: add once final office/team photo exists (1200x630) -->
```

## 2. Page build rules

- **One H1 only:** "Bensalem Dentist for Family, Implant and Cosmetic Care". Keep the heading levels exactly as in `02 Content.md` (H2 sections, H3 sub-sections, H3 per FAQ question).
- **Server-render all text** (Next.js SSG/SSR). Service lists, the hours table, FAQs and the address must be in the initial HTML, not loaded by client-side JS or shown only inside images. AI crawlers and many search bots don't run JavaScript reliably.
- **FAQs:** visible on the page. If you use an accordion, the answer text must still be in the DOM on load (`<details>`/`<summary>` is ideal).
- **NAP:** the name, address and phone must appear as text exactly as `Amazing Smiles By Design, 3101 Bristol Road, Suite 1, Bensalem, PA 19020, (215) 639-5331`, in the hours/location section and in the site footer. It must match the Google Business Profile character for character.
- **Links:**
  - Phone: `tel:+12156395331`.
  - Text: add an `sms:+12156395331` link beside the call button. The practice accepts texts on this number.
- **Map:** lazy-load the Google Maps embed (place ID `ChIJzZkTohhNwYkRwJ2tUx9cZ98`). Directions button: `https://www.google.com/maps/dir/?api=1&destination=3101+Bristol+Road+Suite+1+Bensalem+PA+19020`.
- **Internal links:** every link in `02 Content.md` must be a crawlable `<a href>`, not an onClick handler. The 6 town links in "Serving Bensalem…" go live as each location page is published; until then, link the town names to `/areas-we-serve/` (avoid 404s).
- **Reviews:** show them as plain text with name and date. **Do not** add Review or AggregateRating markup for the practice's own reviews (self-serving reviews aren't eligible for review rich results). A Google review widget is fine.
- **Images:** descriptive alt text, for example "Dr. Keyur Dudhat at Amazing Smiles By Design in Bensalem, PA".
- **Logo:** copy the current logo from the old site (`https://www.amazingsmilesbydesign.com/wp-content/uploads/sites/7642/2026/03/image1-copy-e1774990496332.png`) and host it at `/images/amazing-smiles-by-design-logo.png`. The schema points there, so the file must exist.
- **Smile gallery teaser:** reuse the before/after cases from the current site.
- **Tracking:** fire separate events for call clicks, text clicks, the appointment form, directions clicks and emergency CTA clicks, so local conversions can be measured.

## 3. Structured data (JSON-LD)

Two script blocks in the `<head>` or body of `/` only.

### 3a. Core: Dentist + Person + WebSite + WebPage (required)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://www.amazingsmilesbydesign.com/#dentist",
      "name": "Amazing Smiles By Design",
      "url": "https://www.amazingsmilesbydesign.com/",
      "telephone": "+1-215-639-5331",
      "faxNumber": "+1-215-639-1921",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3101 Bristol Road, Suite 1",
        "addressLocality": "Bensalem",
        "addressRegion": "PA",
        "postalCode": "19020",
        "addressCountry": "US"
      },
      "hasMap": "https://www.google.com/maps/place/?q=place_id:ChIJzZkTohhNwYkRwJ2tUx9cZ98",
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
      "logo": "https://www.amazingsmilesbydesign.com/images/amazing-smiles-by-design-logo.png",
      "image": "https://www.amazingsmilesbydesign.com/images/amazing-smiles-by-design-logo.png",
      "medicalSpecialty": "https://schema.org/Dentistry",
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
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "name": "Regular Membership Plan",
          "price": "269",
          "priceCurrency": "USD",
          "description": "Annual fee for patients with no insurance. Includes 2 professional cleanings, 2 checkup exams, routine X-rays and an emergency exam."
        },
        {
          "@type": "Offer",
          "name": "Perio Maintenance Plan",
          "price": "450",
          "priceCurrency": "USD",
          "description": "Annual fee for patients with no insurance. Includes 4 periodontal maintenance visits, 2 checkup exams and screenings, routine X-rays and an emergency exam."
        },
        {
          "@type": "Offer",
          "name": "Child Membership Plan",
          "price": "212",
          "priceCurrency": "USD",
          "description": "Annual fee for children ages 13 and younger with no insurance. Includes 2 professional cleanings, 2 checkup exams, 2 fluoride treatments, routine X-rays and an emergency exam."
        },
        {
          "@type": "Offer",
          "name": "Emergency Visit Special",
          "price": "59",
          "priceCurrency": "USD",
          "description": "One-time fee for new patients. Includes the necessary exam and X-rays."
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dental services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "General and Family Dentistry",
            "url": "https://www.amazingsmilesbydesign.com/general-dentistry/",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dental checkups, cleanings and X-rays",
                  "url": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-checkups-x-rays/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Children's dentistry",
                  "url": "https://www.amazingsmilesbydesign.com/general-dentistry/child-dentistry/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dental sealants",
                  "url": "https://www.amazingsmilesbydesign.com/general-dentistry/dental-sealants/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Deep cleaning (scaling and root planing)",
                  "url": "https://www.amazingsmilesbydesign.com/general-dentistry/scaling-and-root-planing/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Periodontal maintenance",
                  "url": "https://www.amazingsmilesbydesign.com/general-dentistry/periodontal-maintenance/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Arestin gum treatment",
                  "url": "https://www.amazingsmilesbydesign.com/general-dentistry/arestin/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Oral cancer screening",
                  "url": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-cancer-screening/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Tooth extraction",
                  "url": "https://www.amazingsmilesbydesign.com/general-dentistry/tooth-extraction/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Emergency dentistry",
                  "url": "https://www.amazingsmilesbydesign.com/general-dentistry/emergency-dentistry/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Oral hygiene tips",
                  "url": "https://www.amazingsmilesbydesign.com/general-dentistry/oral-hygiene/"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Restorative Dentistry",
            "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dental implants",
                  "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-implants/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dental crowns",
                  "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-crowns/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dental bridges",
                  "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-bridges/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dental fillings",
                  "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dental-fillings/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Non-surgical root canal",
                  "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/non-surgical-root-canal/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Inlays and onlays",
                  "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/inlays-onlays/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dentures",
                  "url": "https://www.amazingsmilesbydesign.com/restorative-dentistry/dentures/"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Cosmetic Dentistry",
            "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Porcelain veneers",
                  "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/porcelain-veneers/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Clear aligners",
                  "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/clear-aligners/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Teeth whitening",
                  "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/teeth-whitening/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dental bonding",
                  "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/dental-bonding/"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Night guards",
                  "url": "https://www.amazingsmilesbydesign.com/cosmetic-dentistry/night-guards/"
                }
              }
            ]
          }
        ]
      }
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
    },
    {
      "@type": "WebSite",
      "@id": "https://www.amazingsmilesbydesign.com/#website",
      "url": "https://www.amazingsmilesbydesign.com/",
      "name": "Amazing Smiles By Design",
      "publisher": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.amazingsmilesbydesign.com/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/",
      "name": "Bensalem Dentist | Amazing Smiles By Design",
      "description": "Bensalem dentist Dr. Keyur Dudhat offers family, implant and cosmetic care. PPO insurance accepted, plus membership plans. Call (215) 639-5331.",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      },
      "mainEntity": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      },
      "inLanguage": "en-US"
    }
  ]
}
```

### 3b. FAQPage (optional)

Google stopped showing FAQ rich results on 7 May 2026. The markup is still valid and harmless, and it keeps the Q&A machine-readable for other search and AI systems. Include it only if the visible FAQ text stays identical.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://www.amazingsmilesbydesign.com/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Amazing Smiles By Design located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amazing Smiles By Design is at 3101 Bristol Road, Suite 1, Bensalem, PA 19020. The office welcomes patients from Bensalem and nearby communities, including Trevose, Feasterville, Langhorne, Fairless Hills and Hulmeville."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the dentist at Amazing Smiles By Design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Keyur Dudhat, DMD, provides care at Amazing Smiles By Design. He earned his Doctor of Dental Medicine degree from Temple University and focuses on comprehensive care, with a special interest in dental implants and cosmetic dentistry."
          }
        },
        {
          "@type": "Question",
          "name": "What dental services do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer general and family dentistry (checkups, cleanings, children's dentistry, gum treatment, extractions and emergency care), restorative dentistry (implants, crowns, bridges, fillings, root canals, inlays and onlays, dentures) and cosmetic dentistry (porcelain veneers, clear aligners, teeth whitening, bonding and night guards)."
          }
        },
        {
          "@type": "Question",
          "name": "Do you accept my dental insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We accept PPO dental insurance and work with carriers including Aetna, Anthem, Cigna, Delta Dental, Humana, MetLife and UnitedHealthcare. Coverage depends on your specific plan, so call (215) 639-5331 to confirm your plan before your visit."
          }
        },
        {
          "@type": "Question",
          "name": "What if I don't have dental insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Patients without insurance can join an in-office membership plan: the Regular Membership Plan is $269 a year, the Perio Maintenance Plan is $450 a year, and the Child Membership Plan (ages 13 and younger) is $212 a year. We also offer financing through CareCredit and Cherry."
          }
        },
        {
          "@type": "Question",
          "name": "Do you see children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide children's dentistry, including checkups, cleanings, fluoride treatments and dental sealants. Families without insurance can use our Child Membership Plan for children 13 and younger."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do in a dental emergency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call or text (215) 639-5331 as soon as possible and describe what happened. New patients can have an emergency exam, including any necessary X-rays, for a one-time fee of $59."
          }
        },
        {
          "@type": "Question",
          "name": "What are your office hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are open Monday 8 am to 6 pm, Tuesday 8 am to 5 pm, Wednesday 8 am to 6 pm and Thursday 8 am to 2 pm. The office is closed Friday through Sunday."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer financing for dental treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We work with CareCredit and Cherry, which let you pay for treatment over time. Ask our team which option suits your treatment plan."
          }
        }
      ]
    }
  ]
}
```

### 3c. Optional additions later

The current website doesn't publish these, so they are left out rather than guessed. Add them if they become available:
- `"geo"`: coordinates from the Google Business Profile pin.
- `"sameAs"`: the Google Business Profile URL and any social profile URLs.
- `"email"`: if the practice wants it public.

### 3d. Keep in sync

The schema is generated from the page copy. If the hours, prices, FAQs, services or areas change on the page, update the schema in the same commit. **Validate with** Google's Rich Results Test and validator.schema.org after deploy.
