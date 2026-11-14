# Purva Bandhwar — Portfolio

A paper-and-ink digital portfolio (React + TypeScript + GSAP), built on the Marginalia template (MIT, Kedhareswer Naidu).

## Put it online (free, public, ~3 minutes)

1. Create a **public** repository on GitHub (e.g. `portfolio`).
2. Upload **everything in this folder** (including the hidden `.github` folder) to it, on the `main` branch.
3. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open the **Actions** tab, wait for "Deploy to GitHub Pages" to turn green.
5. Your site is live at `https://<your-username>.github.io/<repo-name>/`. Anyone can view it.

## Edit anything

Everything (text, links, numbers, colours) lives in **`src/content.ts`**.
On GitHub press `.` (period) on your repo to open the web editor, change the file, commit, and the site redeploys automatically.

- Your photo: add `public/portrait.jpg` and set `PORTRAIT = "./portrait.jpg"` in `content.ts`.
- Links are real hyperlinks (Drive folder, résumé, LinkedIn, mailto, tel).

## Run locally

```
npm install
npm run dev
```
