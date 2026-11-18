# Pınar Ceylan: Personal Archaeologist Website

Static, three-page personal portfolio for **Pınar Ceylan** (Field Archaeologist and Excavation Supervisor), designed with an archival publication-plate aesthetic, line-based archaeological diagrams, interactive modal plate inspection, UK A4 print styles, and zero build-step dependencies.

## Pages

- `index.html` (About Me): Profile, Bath relocation and UK right-to-work summary, downloadable 2-page UK CV (`assets/docs/Pinar-Ceylan-CV-UK.pdf`), technical ceramic profile and stratigraphy SVG plate, six field and laboratory competencies, languages, software, and public engagement.
- `academic.html` (Academic): Ceramic rim-typology plate, MA and BA degrees and theses, research themes, verified publications and symposium presentations, and MA thesis / ceramic-convention plates (`Plate V`) with click-to-zoom lightbox inspection.
- `experience.html` (Experience): Field metrics summary, quick-jump navigation, reverse-chronological excavation and survey stratigraphy timeline (2017 to 2026), end-to-end site workflow, and ethical, zero-bone methodology schematics (`Plate IV`) with click-to-zoom lightbox inspection.

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
4. The site publishes to `https://pinarceylan.com/` (the `.nojekyll` file ensures static assets serve without Jekyll processing).

## Included Visual Plates & Assets

- `assets/docs/Pinar-Ceylan-CV-UK.pdf`: Clean 2-page UK-format A4 curriculum vitae without personal mobile or referee contact numbers.
- `assets/images/yahyali-mound-landscape.webp`: EXIF-stripped landscape photograph of Yahyalı Mound (2024 MA thesis study site).
- `assets/images/yahyali-yh20-t2-30-profile.webp`: 2024 MA thesis CorelDRAW ceramic profile (`YH20-T2-30`) on a light archival mat.
- `assets/images/ceramic-conventions-plate.svg`: Original methodological SVG diagram illustrating orthographic split-axis ceramic drawing conventions.
- `assets/images/stratigraphic-ochre-workflow.svg`: Original schematic SVG illustrating 5 m grid sondage phasing and OCHRE locus-pail recording.
- `assets/images/urla-grave-card-matrix.svg`: Original zero-bone schematic SVG illustrating standardised grave-card recording and the four-phase Urla Archaic cemetery container distribution (83 graves, redacted coordinates).

Unpublished excavation, rescue-site, and depot photographs are held outside this public repository pending written Director or Museum Directorate permission under Turkish Law No. 2863.
