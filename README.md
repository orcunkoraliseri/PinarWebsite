# Pınar Ceylan: Personal Archaeologist Website

Static, three-page personal portfolio for **Pınar Ceylan** (Field Archaeologist and Excavation Supervisor), designed with an archival publication-plate aesthetic, line-based archaeological diagrams, and zero build-step dependencies.

## Pages

- `index.html` (About Me): Profile, UK right-to-work summary, technical ceramic profile and stratigraphy SVG plate, six field and laboratory competencies, languages, software, and public engagement.
- `academic.html` (Academic): Ceramic rim-typology plate, MA and BA degrees and theses, research themes, and verified publications and symposium presentations.
- `experience.html` (Experience): Field metrics summary, reverse-chronological excavation and survey stratigraphy timeline (2017 to 2026), end-to-end site workflow, and references note.

## Local Preview

Open `index.html` directly in a browser, or start a local static server inside `PinarWebsite/`:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages Deployment

1. Push the `main` branch to `https://github.com/orcunkoraliseri/PinarWebsite.git`.
2. In the GitHub repository, open **Settings -> Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**, select **Branch: `main`** and folder **`/ (root)`**, and click **Save**.
4. The site publishes to `https://orcunkoraliseri.github.io/PinarWebsite/` (the `.nojekyll` file ensures static assets serve without Jekyll processing).

## Adding Field Photographs & Ceramic Plates Later

`styles.css` already includes `.plate-grid` and `.plate-figure` components (`4:3` aspect ratio with `object-fit: cover`). When ready to add curated photographs or CorelDRAW pottery drawings:

1. Optimize images to WebP or compressed JPEG/PNG and place them in `assets/images/`.
2. Insert a section block like this into `experience.html` or `academic.html`:

```html
<section class="plate-section" aria-labelledby="plates-heading">
  <div class="plate-eyebrow">
    <span>Plate IV · Selected Field &amp; Ceramic Plates</span>
  </div>
  <h2 id="plates-heading">Field &amp; Illustration Archive</h2>
  <div class="plate-grid">
    <figure class="plate-figure">
      <img src="assets/images/example-ceramic-plate.webp" alt="Hand-drawn and CorelDRAW-inked diagnostic rim profile from Yahyalı Mound" loading="lazy">
      <figcaption>Diagnostic jar rim profile, Suğla Lake region surface survey (CorelDRAW vector plate).</figcaption>
    </figure>
  </div>
</section>
```
