# Areas We Serve: Developer Handoff

**URL:** `/areas-we-serve/` | **Status:** Final v1. Ready to build.

## 1. Head tags

```html
<title>Areas We Serve | Bucks County & NE Philadelphia Dentist</title>
<meta name="description" content="Amazing Smiles By Design in Bensalem serves Lower Bucks County, Northeast Philadelphia and Huntingdon Valley. See drive times from your town.">
<link rel="canonical" href="https://www.amazingsmilesbydesign.com/areas-we-serve/">
<meta property="og:type" content="website">
<meta property="og:title" content="Areas We Serve | Bucks County & NE Philadelphia Dentist">
<meta property="og:description" content="Amazing Smiles By Design in Bensalem serves Lower Bucks County, Northeast Philadelphia and Huntingdon Valley. See drive times from your town.">
<meta property="og:url" content="https://www.amazingsmilesbydesign.com/areas-we-serve/">
```

## 2. Page build rules

- **One H1:** "Areas We Serve Around Bensalem". Breadcrumb: Home › Areas We Serve.
- **Drive-time tables** as real HTML `<table>` elements with crawlable links to every town page.
- **Southampton, Holland and Richboro are intentionally not listed** (client conflict, on hold).
- **Drive times and distances** come from Google Maps (checked 5 Oct 2026). Keep the "Google Maps estimate / changes with traffic" note.
- **Embed a Google Map** of the office (3101 Bristol Rd) below the directions section; no fake 'service area' polygons.
- **Link only to pages that are live.** Service + location pages (e.g. `/dental-implants-langhorne-pa/`) and other town pages are being built in later batches; if a target isn't live at launch, unlink the text until it is.
- **Unique page:** don't copy blocks between town pages. Each town keeps its own route, local section and FAQs.
- **No reviews schema** (no AggregateRating/Review). Don't add 'serving since' or patient-count claims.
- **Always:** server-render all text; crawlable `<a href>` links; phone `tel:+12156395331`, text `sms:+12156395331`; NAP identical to the homepage and footer.

## 3. Structured data (JSON-LD)

### 3a. Core (required)

Same `#dentist` `@id` as the homepage; `areaServed` names this page's area only (the hub lists all).

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.amazingsmilesbydesign.com/areas-we-serve/#webpage",
      "url": "https://www.amazingsmilesbydesign.com/areas-we-serve/",
      "name": "Areas We Serve | Bucks County & NE Philadelphia Dentist",
      "description": "Amazing Smiles By Design in Bensalem serves Lower Bucks County, Northeast Philadelphia and Huntingdon Valley. See drive times from your town.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/#website"
      },
      "breadcrumb": {
        "@id": "https://www.amazingsmilesbydesign.com/areas-we-serve/#breadcrumb"
      },
      "about": {
        "@id": "https://www.amazingsmilesbydesign.com/#dentist"
      },
      "mainEntity": {
        "@id": "https://www.amazingsmilesbydesign.com/areas-we-serve/#areas"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.amazingsmilesbydesign.com/areas-we-serve/#breadcrumb",
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
          "name": "Areas We Serve",
          "item": "https://www.amazingsmilesbydesign.com/areas-we-serve/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.amazingsmilesbydesign.com/areas-we-serve/#areas",
      "name": "Areas served by Amazing Smiles By Design",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Langhorne",
          "url": "https://www.amazingsmilesbydesign.com/dentist-langhorne-pa/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Fairless Hills",
          "url": "https://www.amazingsmilesbydesign.com/dentist-fairless-hills-pa/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Feasterville",
          "url": "https://www.amazingsmilesbydesign.com/dentist-feasterville-pa/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Trevose",
          "url": "https://www.amazingsmilesbydesign.com/dentist-trevose-pa/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Hulmeville",
          "url": "https://www.amazingsmilesbydesign.com/dentist-hulmeville-pa/"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Parkland",
          "url": "https://www.amazingsmilesbydesign.com/dentist-parkland-pa/"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Levittown",
          "url": "https://www.amazingsmilesbydesign.com/dentist-levittown-pa/"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Bristol",
          "url": "https://www.amazingsmilesbydesign.com/dentist-bristol-pa/"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Croydon",
          "url": "https://www.amazingsmilesbydesign.com/dentist-croydon-pa/"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Penndel",
          "url": "https://www.amazingsmilesbydesign.com/dentist-penndel-pa/"
        },
        {
          "@type": "ListItem",
          "position": 11,
          "name": "Morrisville",
          "url": "https://www.amazingsmilesbydesign.com/dentist-morrisville-pa/"
        },
        {
          "@type": "ListItem",
          "position": 12,
          "name": "Yardley",
          "url": "https://www.amazingsmilesbydesign.com/dentist-yardley-pa/"
        },
        {
          "@type": "ListItem",
          "position": 13,
          "name": "Newtown",
          "url": "https://www.amazingsmilesbydesign.com/dentist-newtown-pa/"
        },
        {
          "@type": "ListItem",
          "position": 14,
          "name": "Cornwells Heights",
          "url": "https://www.amazingsmilesbydesign.com/dentist-cornwells-heights-pa/"
        },
        {
          "@type": "ListItem",
          "position": 15,
          "name": "Andalusia",
          "url": "https://www.amazingsmilesbydesign.com/dentist-andalusia-pa/"
        },
        {
          "@type": "ListItem",
          "position": 16,
          "name": "Oakford",
          "url": "https://www.amazingsmilesbydesign.com/dentist-oakford-pa/"
        },
        {
          "@type": "ListItem",
          "position": 17,
          "name": "Eddington",
          "url": "https://www.amazingsmilesbydesign.com/dentist-eddington-pa/"
        },
        {
          "@type": "ListItem",
          "position": 18,
          "name": "Huntingdon Valley",
          "url": "https://www.amazingsmilesbydesign.com/dentist-huntingdon-valley-pa/"
        },
        {
          "@type": "ListItem",
          "position": 19,
          "name": "Northeast Philadelphia",
          "url": "https://www.amazingsmilesbydesign.com/dentist-northeast-philadelphia/"
        },
        {
          "@type": "ListItem",
          "position": 20,
          "name": "Far Northeast (Parkwood / Byberry)",
          "url": "https://www.amazingsmilesbydesign.com/dentist-far-northeast-philadelphia/"
        },
        {
          "@type": "ListItem",
          "position": 21,
          "name": "Somerton",
          "url": "https://www.amazingsmilesbydesign.com/dentist-somerton-philadelphia/"
        },
        {
          "@type": "ListItem",
          "position": 22,
          "name": "Bustleton",
          "url": "https://www.amazingsmilesbydesign.com/dentist-bustleton-philadelphia/"
        },
        {
          "@type": "ListItem",
          "position": 23,
          "name": "Torresdale",
          "url": "https://www.amazingsmilesbydesign.com/dentist-torresdale-philadelphia/"
        },
        {
          "@type": "ListItem",
          "position": 24,
          "name": "Holmesburg",
          "url": "https://www.amazingsmilesbydesign.com/dentist-holmesburg-philadelphia/"
        },
        {
          "@type": "ListItem",
          "position": 25,
          "name": "Fox Chase",
          "url": "https://www.amazingsmilesbydesign.com/dentist-fox-chase-philadelphia/"
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
      "areaServed": [
        {
          "@type": "Place",
          "name": "Langhorne, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Fairless Hills, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Feasterville, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Trevose, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Hulmeville, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Parkland, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Levittown, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Bristol, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Croydon, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Penndel, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Morrisville, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Yardley, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Newtown, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Cornwells Heights, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Andalusia, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Oakford, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Eddington, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Huntingdon Valley",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Montgomery County, Pennsylvania"
          }
        },
        {
          "@type": "Place",
          "name": "Northeast Philadelphia",
          "containedInPlace": {
            "@type": "City",
            "name": "Philadelphia",
            "containedInPlace": {
              "@type": "State",
              "name": "Pennsylvania"
            }
          }
        },
        {
          "@type": "Place",
          "name": "Far Northeast Philadelphia",
          "containedInPlace": {
            "@type": "City",
            "name": "Philadelphia",
            "containedInPlace": {
              "@type": "State",
              "name": "Pennsylvania"
            }
          }
        },
        {
          "@type": "Place",
          "name": "Somerton",
          "containedInPlace": {
            "@type": "City",
            "name": "Philadelphia",
            "containedInPlace": {
              "@type": "State",
              "name": "Pennsylvania"
            }
          }
        },
        {
          "@type": "Place",
          "name": "Bustleton",
          "containedInPlace": {
            "@type": "City",
            "name": "Philadelphia",
            "containedInPlace": {
              "@type": "State",
              "name": "Pennsylvania"
            }
          }
        },
        {
          "@type": "Place",
          "name": "Torresdale",
          "containedInPlace": {
            "@type": "City",
            "name": "Philadelphia",
            "containedInPlace": {
              "@type": "State",
              "name": "Pennsylvania"
            }
          }
        },
        {
          "@type": "Place",
          "name": "Holmesburg",
          "containedInPlace": {
            "@type": "City",
            "name": "Philadelphia",
            "containedInPlace": {
              "@type": "State",
              "name": "Pennsylvania"
            }
          }
        },
        {
          "@type": "Place",
          "name": "Fox Chase",
          "containedInPlace": {
            "@type": "City",
            "name": "Philadelphia",
            "containedInPlace": {
              "@type": "State",
              "name": "Pennsylvania"
            }
          }
        },
        {
          "@type": "Place",
          "name": "Bensalem, PA",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Bucks County, Pennsylvania"
          }
        }
      ],
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
      "@id": "https://www.amazingsmilesbydesign.com/areas-we-serve/#faq",
      "isPartOf": {
        "@id": "https://www.amazingsmilesbydesign.com/areas-we-serve/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which areas does Amazing Smiles By Design serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amazing Smiles By Design in Bensalem, PA serves patients from Bensalem and across Lower Bucks County, including Langhorne, Feasterville, Trevose, Fairless Hills and Levittown, as well as Northeast Philadelphia and Huntingdon Valley."
          }
        },
        {
          "@type": "Question",
          "name": "Is Amazing Smiles By Design a dentist in Bucks County, PA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The office is at 3101 Bristol Road, Suite 1, in Bensalem, Bucks County, PA 19020."
          }
        },
        {
          "@type": "Question",
          "name": "Do you accept new patients from outside Bensalem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. New patients are welcome from any town. Call or text (215) 639-5331, or request an appointment online."
          }
        }
      ]
    }
  ]
}
```

Validate after deploy with Google's Rich Results Test and validator.schema.org.
