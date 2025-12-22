# Deployment to Vercel

This document describes how to deploy this Vite + React project to Vercel.

Prerequisites
- Node.js installed
- GitHub (or other Git provider) account

1) Push repository to a Git provider

```bash
git init
git add .
git commit -m "Initial commit"
# create a repo on GitHub, then:
git remote add origin <repo-url>
git push -u origin main
```

2) Vercel (recommended)

- Go to https://vercel.com → New Project → Import Git Repository.
- When Vercel asks for build settings, use:
  - Build Command: `npm run build`
  - Output Directory: `dist`
- Add any environment variables used by the project (for example `GEMINI_API_KEY`) in Project Settings → Environment Variables.
- Deploy and visit the generated URL.

Note: this repo includes `vercel.json` which configures a static build and SPA fallback to `index.html`.

3) Optional: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

4) Troubleshooting
- If your build fails, check Vercel build logs for the command output.
- Verify `package.json` contains the scripts:
  - `dev`: `vite`
  - `build`: `vite build`
  - `preview`: `vite preview`
- If you reference runtime environment variables in `vite.config.ts`, set the same names in Vercel's Environment Variables.
