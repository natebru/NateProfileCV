# Nate Bruneau — Personal CV Site

Static site, no build step. Open `index.html` directly or serve as static files.

## Publish to GitHub Pages

**Option A — User site (`natebru.github.io`)**
1. Create a public repo named exactly `natebru.github.io`.
2. Upload everything in this folder to the repo root.
3. Settings → Pages → Build and deployment: source = `Deploy from a branch`, branch = `main`, folder = `/ (root)`.
4. Live at `https://natebru.github.io` within a minute or two.

**Option B — Project site (any repo name)**
1. Create a repo (e.g. `cv-site`).
2. Upload the folder contents to the repo root (or to a `/docs` folder).
3. Settings → Pages → Branch: `main`, Folder: `/ (root)` or `/docs`.
4. Live at `https://<username>.github.io/<repo>/`.

## File map

- `index.html` — entry page
- `styles-v2.css` — all styling
- `app-v2.jsx` — app components, data (edit your content here)
- `tweaks-panel.jsx` — the in-page Tweaks helper
- `assets/nate.png` — portrait

## Editing content later

All your bio, experience, FAQ, etc. lives in `app-v2.jsx` as plain JS arrays near the top of the file. Push the file back to your repo and the site updates automatically.
