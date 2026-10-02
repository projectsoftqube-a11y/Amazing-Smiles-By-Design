@AGENTS.md

# Amazing Smiles By Design

Next.js rebuild of amazingsmilesbydesign.com (dental practice, Bensalem, PA).

- Page copy, titles, metas and FAQs come from the SEO team's content files and are kept verbatim in `src/content/`.
- Heading levels must match the content files exactly: section titles are H2/H3, so cards, footers and labels use non-heading elements.
- Business facts (NAP, hours, phone, plans) live only in `src/content/site.ts`; the footer, schema and pages read from there.
- Internal links go through `src/content/routes.ts`; location pages that are not built yet fall back to `/areas-we-serve/`.
- Images: no AI generation. Stock comes from free sources or approved Magnific downloads; record every image in `src/content/images.ts`.
