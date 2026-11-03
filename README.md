# Simranvir Singh Sondhi · Portfolio

Single-page portfolio: Vite + vanilla JS + three.js. All copy lives in `src/content.js`.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/ (deployed by Netlify)
```

The hero portrait `public/portrait.svg` is generated from `portrait.png`:

```bash
pip install rembg onnxruntime vtracer scipy pillow cairosvg
python tools/make_portrait.py            # --scale 2 for more detail
```
