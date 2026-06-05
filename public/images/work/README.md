# /public/work

Static assets for case study pages (`/work/[slug]`) live here.

Files are served from `/work/...` and are covered by the `Disallow: /work/`
rule in `app/robots.ts`, so they inherit the same noindex posture as the
case study pages themselves. Put case-study images, PDFs, and other
referenced assets under this folder rather than `/public/images/` so they
stay out of search engine indexes.
