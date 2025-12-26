<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1HpGUzWqvAM_GX2LCUTv7J8Eg0vZE69eV

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
4. Optional: convert JPEG/PNG images to WebP for modern delivery

    - Install dependencies (adds Sharp):

       ```bash
       npm install --save-dev sharp
       ```

    - Convert images in `public/images`:

       ```bash
       npm run images:convert
       ```

    The project includes `scripts/convert-images.js` which will output `.webp` files next to your originals. The codebase loads WebP when available via `<picture><source ... /></picture>` fallbacks.
"# uxsarvesh_app" 
