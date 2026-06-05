# /public/images/work

Static assets for case study pages (`/work/[slug]`) live here, organised
by slug (e.g. `rapyd-cloud/`).

Files are served from `/images/work/...` and are covered by the
`Disallow: /images/work/` rule in `app/robots.ts` (alongside the
`Disallow: /work/` rule that covers the case study pages themselves),
so they inherit the same noindex posture. Put case-study images, PDFs,
and other referenced assets under this folder rather than elsewhere in
`/public/images/` so they stay out of search engine indexes.
