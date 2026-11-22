# Ashmit Kumar — Portfolio Website

A responsive React + Vite portfolio featuring projects, skills, experience, and contact links.

## Run locally (Arch Linux / any system with Node.js)

```bash
cd ashmit-portfolio
npm install
npm run dev
```

Open the localhost URL shown in the terminal (typically http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Customize before publishing

- Update project descriptions, skill lists, project URLs, and contact details in `src/main.jsx`.
- Replace `public/ashmit-photo.png` with a higher-quality portrait if desired (the supplied image is a screenshot, including a border/overlay).
- POXY and Rakshak are intentionally marked without invented repository links; add their actual public URLs when ready.
- The contact email is currently `ashmitkstrc2004@gmail.com`.
- Review all public-facing claims and project readiness before sharing with recruiters.

## Publish for free

Push this project to GitHub and connect the repository to Vercel. For Vite projects the build command is `npm run build` and output directory is `dist`. Alternatively deploy `dist/` as a static site with a hosting provider.

This is a standalone portfolio, not connected to any account or deployment yet.
