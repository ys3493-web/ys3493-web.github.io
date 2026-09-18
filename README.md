# Yukai Song — personal website

A static portfolio for research, applied science, and ML engineering opportunities. No build step, package manager, CDN, external font, or framework is required. Content last updated September 18, 2026.

## Preview locally

From this directory, run `python -m http.server 8765 --bind 127.0.0.1`, then open <http://127.0.0.1:8765/>. Opening `index.html` directly also displays the site.

## Files to maintain

- `index.html`: biography, projects, education, skills, publications, contact information, and search/social metadata.
- `assets/styles.css`: responsive styles, keyboard focus indicators, reduced-motion support, and print styles.
- `assets/site.js`: accessible mobile navigation, current-section highlighting, and filters for six projects. A project can belong to multiple areas. Following a project link restores that project if a filter has hidden it. Content, navigation, and native disclosures work without JavaScript.
- `assets/projects/*.svg`: three original, accessible diagrams explaining the EEG, NLP, and pruning pipelines. These are conceptual illustrations, not empirical plots or product screenshots.
- `assets/Yukai_Song_Resume.pdf`: current two-page general résumé, with neutral metadata and the reviewed resume's page content.
- `assets/Resume_Yukai_Song_Clinical_EEG.pdf`: previous download retained so existing external links do not break; navigation points to the current résumé.
- `Yukai_Song.jpg`: original portrait, unchanged. Its layout now preserves the image's aspect ratio and removes desktop and mobile rotation.
- `assets/favicon.svg`, `robots.txt`, `sitemap.xml`: site icon and crawler metadata.

## Content provenance

The update follows the user's current résumé, general self-introduction, and linked project/publication evidence. The introduction covers reliable and efficient ML, LLM/agent evaluation, vision, sensing, and model optimization without targeting a particular employer or team.

- DSH: evaluation design and results analysis; merged research roadmap in [PR #9](https://github.com/PowderXu/Research-on-DSH/pull/9). The five-baseline / 2,335-evaluation retrieval analysis and separate 361-question agent comparison are distinguished. The implementation associated with [PR #10](https://github.com/PowderXu/Research-on-DSH/pull/10) is not claimed as solely authored by Yukai.
- EEG: user-provided initial 20-fold LOSO / Sleep-EDF-20 results. The accepted-sample HCE rate is 1.62%, with 18.8% escalated. Ongoing calibration and selective-risk work is identified as ongoing. The historical relative-reduction headline has been removed.
- NLP: 67.6% is first-stage coverage among 23,200 Reddit test posts, not measured end-to-end latency savings. Feature-ensemble F1 is 97.99% versus 97.41% for BERT. The [arXiv preprint](https://arxiv.org/abs/2510.08365) is an earlier version; the user reports that the current manuscript is under review at JMIR AI.
- Pruning: up to 148.33× is pruning-search speedup, not model inference speedup. [ACM TCPS paper](https://doi.org/10.1145/3828657); [coauthor's publication list](https://bineet.cs.ua.edu/pubs.html).
- AI coach: complementary vision/sensor and RAG conversational components. The user-provided count of 100+ refers to chats, not users.
- RF sensing: 99.1% is the RNN + PCA configuration versus 93.8% for a basic neural network; the comparison does not isolate PCA's effect.
- CHEF: publication metadata and open manuscript are available through [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11654640/).
- Published paper metadata and links were checked against [Scientific Reports](https://www.nature.com/articles/s41598-022-25403-y) and the [University of Glasgow repository](https://eprints.gla.ac.uk/246949/).

The research experiments themselves were not rerun as part of this website update.

## Design reference

The user supplied the [Varad Bhogayata portfolio template](https://github.com/varadbhogayata/varadbhogayata.github.io). This version draws on its persistent section navigation, visual project cards, progressive disclosure, and grouped skills. The implementation and SVG illustrations are original; no template code, personal content, images, tracking IDs, or vendor scripts were copied. The existing blue and cream palette, verified project results, publications, portrait, and résumé are retained.

At widths of 1100px or less, the sidebar becomes a compact header and expandable menu. Project filters use native buttons with pressed states and a live result count. Reduced-motion preferences are respected; print styles include all projects even when a filter is active.

## GitHub Pages

Keep `index.html` and the `assets` directory at the published site root. The canonical URL, sitemap, and social preview assume <https://ys3493-web.github.io/>. Update those values if the domain changes.

Changes to the published `main` branch trigger the `pages build and deployment` workflow. Check that workflow in the repository's Actions tab, then verify the live website after deployment succeeds.
