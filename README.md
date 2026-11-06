# The AI Edit — Artificial. Still human.

A responsive editorial AI explainer with a white background, subtle Art Nouveau curves, green and pink accents, and real Unsplash photography. Plain HTML, CSS, and JavaScript. No build tools, analytics, API keys, or dependencies.

## Preview

Open `index.html` in a browser. Alternatively, run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a **public** repository named `ai-project` on GitHub.
2. Upload the contents of this folder: `index.html`, `styles.css`, `script.js`, `assets/`, and this README. Keep `index.html` at the repository root, rather than inside an extra `ai-project` folder.
3. Commit the files to `main`.
4. Open **Settings → Pages → Build and deployment → Deploy from a branch**.
5. Select **main** and **/(root)**, then save.
6. Wait for deployment. Open `https://YOUR-USERNAME.github.io/ai-project/` and test it on a phone and desktop.

Submit the Pages URL and `https://github.com/YOUR-USERNAME/ai-project`. These are templates; no repository or published URL has been created by this download.

## Before submission

- Read and personalize the content. The closing viewpoint is suggested student wording, not a claim about your existing opinions.
- The process note accurately identifies this as an AI-assisted draft; after your own review, update it and the acknowledgement to describe what you actually checked. Do not claim checks you have not performed.
- Confirm the live page's links, artwork, keyboard navigation, and mobile layout.
- The content is below 1,000 words, including alternate interactive examples and the process note.

## Design and code decisions

- `index.html` contains semantic sections, ordered references, a skip link, and the 150–250 word process note.
- `styles.css` defines the palette with CSS variables, responsive Grid layouts, visible focus states, and reduced-motion support.
- `script.js` changes three example texts using native buttons with `aria-pressed` and a polite live region. Navigation and core content work without JavaScript.
- `assets/tulips.jpg`, `assets/workspace.jpg`, and `assets/servers.jpg` are real photographs from Unsplash, credited below. `assets/flower.svg` is the favicon.
- Sources link to OECD, NIST, FTC, and IEA. The IEA comparison concerns **all data centres**, not AI alone; the 2030 number is a forecast.
- No external fonts or image services are needed. All asset paths are relative for GitHub Pages.

## AI acknowledgement

ChatGPT (https://chatgpt.com/) assisted with source research, drafting, code, and layout revisions. Source claims were cross-checked against linked primary publications, and local checks verified file paths, internal links, word count, and JavaScript interaction logic. A browser preview was unavailable during creation; responsive rendering and keyboard navigation still need browser verification. Student review and live publication checks are still required. The submitting student is responsible for the final work.

## Photography

- Pink tulips: Artiom Vallat, https://unsplash.com/photos/ZYSmVtcZGwg
- Workspace: https://unsplash.com/photos/z5MZRyK5YSU
- Server racks: imgix, https://unsplash.com/id/s/foto/server (image: photo-1506399558188-acca6f8cbf41).
- Photos downloaded from Unsplash for local use; see https://unsplash.com/license.
