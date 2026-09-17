# Yukai Song — personal website

A static, recruitment-focused portfolio for GitHub Pages. No build step, package manager, CDN, external font, or framework is required.

## Preview locally

From this directory, run `python -m http.server 8765 --bind 127.0.0.1`, then open <http://127.0.0.1:8765/>. Opening `index.html` directly also displays the site.

## Files to maintain

- `index.html`: biography, projects, education, skills, publications, contact information, and search/social metadata.
- `assets/styles.css`: responsive styles, keyboard focus indicators, reduced-motion support, and print styles.
- `assets/site.js`: accessible mobile navigation and current-section highlighting. The page content and native project disclosures work without JavaScript.
- `assets/Resume_Yukai_Song_Clinical_EEG.pdf`: existing résumé, unchanged. Replace this file to update the download.
- `Yukai_Song.jpg`: existing portrait, unchanged.
- `assets/favicon.svg`, `robots.txt`, `sitemap.xml`: site icon and crawler metadata.

## Content provenance

The rewrite preserves the original website's experience, numerical research results, education, awards, social profiles, and contact address. It does not introduce employment history or a claim of clinical deployment.

- EEG: approximately 64.4% relative HCE reduction is conditional on accepted samples; 18.8% are escalated. It is not a 64.4% improvement in overall accuracy. The 20-fold LOSO / Sleep-EDF-20 setting remains explicit.
- NLP: 67.6% is the fraction filtered at the first BERT stage, not a measured reduction in total latency or cost.
- Pruning: up to 148× acceleration retains the simulation context and system-level safety qualification.
- Manuscript status is retained from the source site: in preparation, with EMNLP 2026 as the target venue. Update this status when it changes; it is not listed as an accepted publication.
- Published paper metadata and links were checked against [Scientific Reports](https://www.nature.com/articles/s41598-022-25403-y) and the [University of Glasgow repository](https://eprints.gla.ac.uk/246949/).

The research experiments themselves were not rerun as part of this website update.

## GitHub Pages

Keep `index.html` and the `assets` directory at the published site root. The canonical URL, sitemap, and social preview assume <https://ys3493-web.github.io/>. Update those values if the domain changes.

Changes to the published `main` branch trigger the `pages build and deployment` workflow. Check that workflow in the repository's Actions tab, then verify the live website after deployment succeeds.
