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

## Included Field & Ceramic Illustration Plates

`assets/images/` contains seven EXIF-stripped WebP plates rendered via `.plate-grid` and `.plate-figure` in `academic.html` and `experience.html`:

- `yahyali-mound-landscape.webp`: Yahyalı Mound landscape (Suğla Lake region survey).
- `yahyali-yh20-t2-30-profile.webp`: MA thesis CorelDRAW ceramic profile (`YH20-T2-30`).
- `gokhoyuk-gh23-g4-t1-04-drawing.webp`: Gökhöyük Trench G4 ceramic drawing (`GH23-G4-B1-T1-04`).
- `klazomenai-fgt25-overhead.webp`: Klazomenai Trench FGT25 overhead architectural view.
- `urla-4848-rescue-drone.webp`: Urla rescue excavation aerial trench and baulk view.
- `urla-4860-cemetery-grid.webp`: Urla Archaic cemetery overhead grid plan (`A1–A5`, `B1–B5`).
- `urla-4860-sandbag-protection.webp`: Urla Archaic cemetery sandbag and geotextile closing protection.

To add more plates later, convert new photos to WebP with EXIF metadata stripped and append another `<figure class="plate-figure">` inside `.plate-grid` (use `plate-figure--drawing` for white-ground line drawings or `plate-figure--wide` for panoramic plans).
