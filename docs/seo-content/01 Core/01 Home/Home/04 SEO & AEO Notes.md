# Home: SEO, Local and AEO/GEO Notes

Draft v1, 2 Oct 2026. Explains why the copy in `02 Content.md` is built the way it is.

## 1. Keyword map: which section targets what

| Keyword | Vol / mo | KD | Where it's used | Notes |
|---|---|---|---|---|
| **bensalem dentist** (primary) | 390 | 30 | Title tag, meta description, H1, closing H2 "Book a Visit With Your Bensalem Dentist" | 2 exact uses in the body, plus title and meta. Enough to be clear without stuffing. |
| dentist in bensalem pa / dentist bensalem pa | 170 / 210 | 22 / 31 | "Meet Dr. Keyur Dudhat": "Dr. Keyur Dudhat is a dentist in Bensalem, PA" | Google treats word order and the comma as the same query, so the natural phrasing covers both. |
| dentist bensalem | 390 | 30 | Covered by the primary and "Dental Services at Our Bensalem Office" | Same search intent as the primary. |
| dentist in 19020 | 90 | 20 | "Serving Bensalem…": "Looking for a dentist in 19020 or nearby?" | The ZIP also appears in the hero, NAP, FAQ and schema. |
| amazing smiles by design (brand) | 210 | 20 | Hero entity sentence, FAQs, NAP, schema `name` | Brand plus place in one sentence helps search engines and AI tools tie the brand to Bensalem. |
| family and cosmetic dentist bensalem | n/a | n/a | "Dental Services…" intro: "As a family and cosmetic dentist in Bensalem…" | Long-tail. Also reinforced by the H1. |
| dentist near me | 823,000 | 67 | **Not written as a phrase** | "Near me" rankings come from proximity, the Google Business Profile, NAP consistency and reviews, not from the words on the page. Forcing the phrase into copy reads as spam. The page supports it with NAP, hours, map, areaServed and LocalBusiness schema. |

**Kept off this page on purpose (one keyword, one page):**
- Bucks County terms → `/areas-we-serve/`
- Service terms (implants, veneers, emergency, etc.) → each service page
- Town terms → each location page

The homepage only *links* to those pages.

## 2. How this page supports local visibility

1. **Unmistakable location signals.** The address, ZIP 19020, Bristol Road and "Bensalem, PA" sit in the hero, the hours/location block, the FAQs and the schema, all with identical NAP.
2. **LocalBusiness schema.** The most specific type, `Dentist`, carries the address, phone, hours, map link, offers and services. Google recommends using the most specific LocalBusiness subtype.
3. **Hub for the location pages.** "Serving Bensalem and Nearby Communities" links to all 25 town/neighbourhood pages and to `/areas-we-serve/`. Authority flows from the homepage to each location page, and the homepage doesn't compete with them for town keywords.
4. **Service hub.** The 22 service links tell Google the full scope of the practice. That matters for "[service] near me" searches, where the homepage and service pages are the candidates.
5. **Conversion signals.** Visible click-to-call, directions and booking support the engagement behaviour local rankings respond to. They're also what turns local traffic into patients.
6. **Real reviews** with names and dates on the page add trust for people. Review volume and rating on the Google Business Profile carry the ranking weight.

**Off-page work this page depends on** (not part of the copy):
- **Google Business Profile:** primary category "Dentist", identical NAP and hours, the website URL pointing to `/`, services listed, and regular photos and review replies.
- **Consistent listings:** Yelp, Healthgrades, Zocdoc, Bing Places, Apple Business Connect and insurance-carrier "find a dentist" directories.
- **Bing Webmaster Tools + IndexNow:** ChatGPT search and Copilot draw on Bing's index.

## 3. How this page supports AEO and GEO (AI answers and citations)

Google's guidance (updated December 2025) says there is no special optimisation or markup for AI Overviews or AI Mode. The page simply has to be indexable, text-based, well linked, and have structured data that matches the visible text. The page is built around that, plus what helps any AI system extract and repeat facts accurately:

1. **Entity definition first.** The opening paragraph states, in plain text, who the practice is, where it is, who the dentist is, what it does and how it handles insurance. This is the sentence an AI tool is most likely to quote or paraphrase.
2. **Direct-answer FAQs.** Nine real patient questions, each answered fully in its first sentence (location, dentist, services, insurance, uninsured options, children, emergencies, hours, financing).
3. **Specific, checkable facts:**
   - Exact prices for the four plans and what each includes.
   - Named insurance carriers and financing providers.
   - Named technology (CBCT, RayFace).
   - The dentist's degree and school.

   AI systems favour concrete facts they can attribute over general marketing language.
4. **Consistent facts everywhere.** The same NAP, hours and offers appear in the copy, the schema, and (once updated) the Google Business Profile and directories. Conflicting data across sources is the main reason AI tools give wrong or no answers about a local business.
5. **Machine-readable entity graph.** The JSON-LD links the Dentist (business), Dr. Dudhat (Person, with degree and school), the WebSite and the WebPage. `sameAs` links to the Google Business Profile and social profiles will complete it once supplied.
6. **No invented claims.** Nothing on the page is unverifiable ("best", "painless", "same-day" or guaranteed results). AI tools are less likely to repeat claims that contradict other sources, and health content (YMYL) is held to a higher standard.

**Not needed:** `llms.txt`, AI-specific copy or extra schema types. Google states these aren't required for AI features.

## 4. Quality checks run on this draft

| Check | Result |
|---|---|
| Fact-check against the live site | Done by an independent reviewer. 5 issues found and fixed: "in-network" wording, the Blue Cross Blue Shield mention, unlisted towns in an FAQ, the before/after photo source, and the second dentist. Remaining open items are marked **[CONFIRM]**. |
| Schema validity | All JSON parses. Type-checked against the full schema.org vocabulary (schema-dts) with no errors; a deliberately broken property was correctly rejected. |
| Schema ↔ visible content | Script check: all 9 FAQ questions and answers, NAP, hours, 4 offer prices, 22 services and 25 areas in the schema appear on the page. No mismatches. |
| Title / meta length | 43 / 143 characters (limits 60 / 155) |
| Readability | Flesch reading ease about 55 (grade 9-10). Fine for a healthcare page. |
| Length | About 1,420 words including service lists (brief: 900-1,200). The lists account for the overage and are useful as internal links. |

## 5. Information still needed from the practice

1. **Office hours.** The contact, why-choose-us and emergency pages say Mon/Wed 8-6, Tue 8-5, Thu 8-2. An older homepage block said Mon 8:30-7. Which is correct, and is the office closed Friday to Sunday?
2. **Other dentists.** A review names "Dr. Jenish". Does a second dentist treat patients? We need their name, degree and school.
3. **Texting.** Does (215) 639-5331 accept texts? The current homepage says "call or text".
4. **Sedation.** The site says "ask us about dental sedation options". Which options (e.g. nitrous oxide) are offered?
5. **Insurance wording.** Confirm "in-network with a variety of insurance plans" and the carriers named (Aetna, Anthem, Cigna, Delta Dental, Humana, MetLife, UnitedHealthcare).
6. **Reviews.** What is the source (Google?), and is there permission to display them? Is a Google review widget wanted?
7. **Smile gallery.** Are there real before/after photos of this practice's patients, with written consent? The current images may be the web vendor's stock.
8. **Service areas.** Is the practice happy to list all 25 areas (the current site lists 7)?
9. **For schema:** the Google Business Profile URL, social profile URLs, exact map coordinates, logo file, real office and team photos, and a public email address (optional).
10. **Optional extra trust facts:** year the practice opened, professional memberships, languages spoken, accessibility and parking.
11. **Specials page.** It reportedly mentions a 20% member discount on most treatments, excluding implants and Invisalign. Confirm whether to feature it. The mention of Invisalign also helps answer whether the practice is a certified provider.

## Sources

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) (updated 10 Dec 2025)
- [Google: LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business) (updated 8 Sep 2026)
- [Google: FAQPage structured data, deprecation notice](https://developers.google.com/search/docs/appearance/structured-data/faqpage) (FAQ rich results removed 7 May 2026)
- Practice facts: amazingsmilesbydesign.com homepage, contact-us, dr-keyur-dudhat, insurance-payment-options, financing-options, why-choose-us, emergency-scheduling and advanced-technology pages (checked 2 Oct 2026)
