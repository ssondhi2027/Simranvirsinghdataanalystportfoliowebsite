# 3D Data Portfolio — Claude Code Prompts

Prompts to rebuild the 3D data-terrain portfolio in Claude Code, one step at a time. Paste them in order into a Claude Code session opened in an empty folder. Check the result in the browser after each step before moving on.

**Before you start, have these in the project folder:**
- `portrait.png` — your illustrated portrait (the desk illustration)
- Python 3 and Node.js installed

---

## Prompt 0 — Project brief (paste first)

```
I'm building a personal portfolio website. Read this whole brief and keep it as the source of truth for every later step. Create a CLAUDE.md file that saves this brief so you remember it.

WHO: Simranvir Singh Sondhi, Data Analyst · Analytics Engineer, Toronto, ON.
One-line pitch: "I turn messy operational and regulatory data into decisions people can act on."

GOAL: A professional, low-text portfolio with 3D motion. Big numbers and visuals, not paragraphs. One line per item, maximum.

STACK: Vite + vanilla JS + three.js (npm). No React. Single page. Deploy to Netlify.

LOOK: Single dark theme, "night-shift observatory".
- Background ink: #0A0F1E
- Panels: #10182F and #16203D
- Hairlines: rgba(150,172,230,.16)
- Text: #E9EDF7, muted #8E99B8
- Accents used as a heat scale: cyan #57C7E3 → amber #F3B54A
- Fonts (Google Fonts): Bricolage Grotesque (display, 700/800), Hanken Grotesk (body), JetBrains Mono (labels, numbers)
- Avoid: purple gradients, emoji icons, Inter, rounded cards with the same shadow everywhere.

SECTIONS (in order):
1. Sticky nav: gradient diamond logo + "Simranvir", links Work / Stack / Path / Contact
2. Hero: full-width 3D bar terrain behind, name + pitch + buttons on the left, portrait SVG floating on the right
3. Metrics strip: 4 big numbers
4. Selected work: 5 project cards that tilt in 3D on hover
5. The stack: grouped skill list + a draggable 3D sphere of tool tags
6. Path so far: timeline of work and study
7. Certifications row
8. Contact band with copy-email button

Don't write any code yet. Set up the Vite project, install three, add the fonts and the color tokens as CSS variables, and show me the empty page running.
```

---

## Prompt 1 — Content file

```
Create src/content.js that exports all the page content as data, so no copy is hard-coded in the HTML. Use exactly this content and invent nothing:

METRICS:
- "30 yrs" — of OSFI bank filings modelled in dbt Core
- "411" — duplicate-key conflicts traced to the IAS 39 → IFRS 9 shift
- "0.98" — R² on Walmart weekly sales forecasts
- "20K+" — engine sensor readings in an LSTM failure model

PROJECTS:
1. Canadian Bank Regulatory Reporting Platform (Featured · 2026)
   Line: A bitemporal dbt Core warehouse over three OSFI returns and Bank of Canada rates, with a 21-control framework referenced to BCBS 239.
   Figures: "$187.7B" reporting-scope gap reconciled; "411 → 0" duplicate keys after a surrogate-key redesign
   Stack: dbt Core, BigQuery, Dagster, Terraform, GitHub Actions, AWS Lambda, React
   Links: Live https://bank-regulatory-platform.netlify.app · Repo https://github.com/ssondhi2027/bank-regulatory-platform · dbt docs https://ssondhi2027.github.io/bank-regulatory-platform
2. Analize-360 (Aviation · 2025)
   Line: Predictive fleet analytics on NASA CMAPSS engine data.
   Figure: "60–90 d" early warning on Aircraft-on-Ground risk
   Stack: AWS S3, Databricks, Delta Lake, LSTM
   Repo: https://github.com/ssondhi2027/Analize-360---Predictive-Fleet-Analytics-For-Commercial-Aviation
3. Walmart Weekly Sales Forecasting (Retail · 2025)
   Line: Four models benchmarked on lag and calendar features.
   Figure: "R² 0.98" Random Forest, RMSE 3,487
   Stack: Python, scikit-learn, Keras
   Repo: https://github.com/ssondhi2027/Walmart-Weekly-Sales-Forecasting
4. AI Demand Planner (Supply chain · 2025)
   Line: Forecasts with confidence bands, reorder points and Monte Carlo stockout simulation.
   Figure: "ARIMA + XGB" paired forecasting engines
   Stack: FastAPI, React, XGBoost
   Repo: https://github.com/ssondhi2027/Ai-Demand_Planner
5. Canada Quality of Life (Public data · 2025)
   Line: Statistics Canada indicators rolled into composite indices.
   Figure: "5 domains" society, prosperity, health, governance, environment
   Stack: Power BI, DAX, Power Query
   Repo: https://github.com/ssondhi2027/Canada-quality-of-life-Power-BI-dashboard

SKILL GROUPS:
- Query & code: SQL, Python, dbt Core, Pandas, scikit-learn
- BI: Power BI, Tableau, DAX, Excel, Power Query
- Cloud: AWS, BigQuery, Databricks, Terraform
- Quality: Data validation, root-cause analysis, regression testing

SPHERE TAGS (30): SQL, Python, dbt Core, Power BI, Tableau, AWS, BigQuery, Databricks, Delta Lake, Pandas, scikit-learn, Keras, XGBoost, ARIMA, LSTM, FastAPI, React, Terraform, GitHub Actions, Dagster, DAX, Power Query, Excel, Snowflake, Looker, Azure, A/B Testing, MySQL, Git, Jupyter
- Amber ("hot"): SQL, Python, dbt Core, Power BI, AWS
- Cyan ("cool"): Tableau, BigQuery, Databricks, Terraform, DAX

TIMELINE (newest first):
- May – Aug 2026 · ICQA Associate, Amazon · Inventory audits, cycle counts and variance analysis against system records · Work
- 2025 – 2026 · Graduate Certificate, Data Analytics · Humber Polytechnic · 88.8%, Honours · Study
- 2024 – 2025 · Graduate Certificate, Information Technology · Algoma University · 83% · Study
- Mar 2023 – Jun 2024 · CRM Coordinator, SpeakPerfect Overseas · Lead, pipeline and conversion tracking in the CRM · Work
- 2020 – 2023 · Bachelor of Computer Applications · Guru Nanak Dev University College · Study

CERTIFICATIONS: BCG Data Science (Forage), Data Engineering on AWS (AWS), Deloitte Data Analytics (Forage), Tata Data Visualisation (Forage), Oracle Database SQL (LinkedIn), Understanding Capital Markets (LinkedIn)

CONTACT: simranvirsondhi2708@gmail.com · LinkedIn https://www.linkedin.com/in/simranvir-singh · GitHub https://github.com/ssondhi2027
Footer: "Simranvir Singh Sondhi · Toronto, ON" and "SQL · Python · dbt · Power BI · AWS"
```

---

## Prompt 2 — 3D data-terrain hero

```
Build the hero section with a three.js scene behind the text.

SCENE:
- A field of 3D bars made with ONE InstancedMesh of BoxGeometry(0.46, 1, 0.46), translated so each box grows up from y=0. Grid 46 × 28 on desktop, 26 × 20 under 700px wide, spacing 0.62.
- Each frame, set each bar's height from overlapping sine waves over x, z and time, plus a gentle upward ramp from left to right so it reads like a rising trend. Minimum height 0.06.
- Color each bar by height with setColorAt: dark blue #2B5C8A (low) → cyan #57C7E3 (mid) → amber #F3B54A (high).
- MeshStandardMaterial (roughness .42, metalness .2), ambient light, a white key light, and an amber point light from the back-right.
- Fog the same color as the page (#0A0F1E) so the far edge melts into the background. Add a faint GridHelper floor.
- On desktop, shift the field right so the text on the left stays readable.

INTERACTION:
- Raycast the pointer onto the y=0 plane. Bars near the pointer rise in a smooth Gaussian bump. The bump eases in and out.
- Camera slowly orbits left-right, follows the mouse slightly, and rises and pulls back as you scroll down the page.
- Show a small mono hint at bottom-right: a pulsing cyan dot + "move your cursor across the data field" (hide on phones).

PERFORMANCE AND ACCESSIBILITY:
- Pause the render loop when the hero is off screen (IntersectionObserver).
- If prefers-reduced-motion is on, render one still frame and only redraw on pointer move.
- If WebGL fails, hide the canvas and show a static cyan/amber radial-gradient background instead.
- Cap pixel ratio at 2.

OVERLAY: A left-to-right gradient from the page color to transparent, plus a bottom fade, so the name stays readable. On phones, a bottom-up gradient instead.

TEXT (left): mono eyebrow "Data Analyst · Analytics Engineer · Toronto, ON", huge name with "Singh Sondhi" on a second line in a cyan→amber gradient, the one-line pitch, and three pill buttons: "See the work" (amber, filled), GitHub, LinkedIn.
Hero height: clamp(560px, 86vh, 780px).
```

---

## Prompt 3 — Portrait SVG (run once to make the asset)

```
Turn portrait.png into a crisp vector illustration with no background, so it blends into the page. Write a Python script tools/make_portrait.py and run it.

1. pip install rembg onnxruntime vtracer scipy pillow cairosvg
2. Remove the background with rembg using the "u2net_human_seg" model.
3. Clean the alpha: threshold at 140, keep only the largest connected shape (scipy.ndimage.label), fill holes. This removes stray bits like a coffee mug.
4. Crop to the bounding box, then upscale 1.5× with LANCZOS so the trace keeps fine detail (glasses, beard, turban folds). Re-harden the alpha after resizing.
5. Trace with vtracer: colormode="color", hierarchical="stacked", mode="spline", filter_speckle=6, color_precision=7, layer_difference=12, corner_threshold=60, length_threshold=4, splice_threshold=45, path_precision=1.
6. Wrap all paths in a mask with a vertical gradient: fully visible to 72% height, fading to transparent by 94%, so the bottom (desk and laptop) melts into the page.
7. Save as public/portrait.svg with a viewBox, plus a PNG preview on #0A0F1E so I can check it.

Show me the preview before using it.
```

---

## Prompt 4 — Place the portrait in the hero

```
Put public/portrait.svg in the hero, to the right of the text (2-column grid, about 1.15fr / 0.85fr).

- Load it with an <img> tag, not inline SVG. Don't put any CSS filter, rotateY/rotateX or 3D transform on it — those make the browser rasterize it and it goes blurry.
- Width min(420px, 100%), aspect ratio taken from the SVG's viewBox.
- Gentle float: animate the CSS `translate` property up 10px and back over 7s. Turn this off for reduced motion.
- Behind it, a soft glow: a circle with a cyan radial gradient and a faint cyan outline, plus an inner dashed amber ring that rotates slowly (40s per turn).
- Two floating tags on its edges:
  - Top-right: an amber block reading "R² 0.98" with a small mono label "forecast fit"
  - Lower-left: a dark pill with a green dot reading "Open to roles · Toronto"
- On phones: single column, portrait above the name at about 230px wide.
```

---

## Prompt 5 — Metrics strip

```
Under the hero, add the 4 metrics from content.js as one strip: a 4-column grid (2 columns under 960px) with 1px hairline gaps, rounded outer corners.
Each tile: the figure huge in the display font (alternating cyan and amber), the label short and muted underneath.
On hover, a tile tilts back slightly in 3D (rotateX 8deg, translateZ 14px) and its background lightens to the panel color.
Use tabular numbers.
```

---

## Prompt 6 — Project cards with 3D tilt

```
Build "Selected work" from content.js.

LAYOUT: 3-column grid. The featured bank project spans 2 columns, so the rows fill evenly: [Featured][Analize-360] then [Walmart][Demand Planner][Canada QoL]. 2 columns under 960px, 1 column under 640px.

CARD: panel gradient, hairline border, 22px radius. Inside: mono tag, title, one-line description, the big figure(s) in amber/cyan, stack chips in mono, and links with a ↗ arrow.

3D TILT (mouse only, off for reduced motion):
- On pointermove, rotate the card up to ±12deg toward the cursor with perspective(1000px).
- Use transform-style: preserve-3d and give layers depth: tag 20px, title 36px, figure 54px, links 28px, so they pop out at different depths.
- A soft amber glare follows the cursor (radial gradient positioned by CSS variables).
- Reset smoothly on pointerleave.

FEATURED CARD EXTRA: In its top-right corner, a small 2D canvas showing a 4×4×4 cube of dots slowly rotating in 3D (simple projection math, sorted by depth). Dots in the top-front corner are amber, the rest cyan. Only animate while on screen. Hide on phones.
```

---

## Prompt 7 — Skill sphere

```
Build "The stack" section: the grouped skill list on the left, a 3D tag sphere on the right (stacked under 960px).

SPHERE:
- Place the 30 tags from content.js on a Fibonacci sphere.
- Each tag is a real <span> (mono font, pill shape). Position it with translate3d from its 3D coordinates; scale and opacity come from depth, so back tags are small and faint.
- Hot tags in amber, cool tags in cyan, the rest neutral.
- Auto-rotates slowly. Drag to spin it (pointer capture); after release it eases back to the auto speed.
- Radius = 40% of the container's smaller side, recalculated on resize.
- A faint radial glow and dashed circle behind it.
- Only animate while on screen. Reduced motion: render it still.
- Height 440px desktop, 360px under 960px. Allow vertical page scroll on touch (touch-action: pan-y).
```

---

## Prompt 8 — Timeline, certifications, contact, footer

```
TIMELINE ("Path so far"): rows separated by hairlines. Each row: date in mono (left, 170px), title with a muted one-line subtitle, and a kind label on the right ("Work" in amber, "Study" in cyan). Hover gives a faint cyan gradient. Stack to one column on phones.

CERTIFICATIONS: a wrapping row of pills, cert name plus the issuer in small mono.

CONTACT: a large rounded band with a slowly spinning, blurred cyan/amber conic gradient in one corner.
- Mono eyebrow: "Open to data analyst and analytics engineer roles"
- Huge heading: "Let's talk data." with "data." in amber
- The email shown as selectable mono text, with a "Copy email" button. Use navigator.clipboard.writeText; on success show "Copied" for 1.8s; if it fails, select the text and show "Selected, press Ctrl+C".
- LinkedIn (amber) and GitHub buttons.

FOOTER: name and city on the left, the stack line on the right.
```

---

## Prompt 9 — Scroll reveals and polish

```
Add the finishing passes:

1. Scroll reveal: sections tilt up into place (from rotateX 14deg, translateY 28px, opacity .25) when they enter the viewport. Elements must be fully visible before JS runs; the animation only plays on scroll. Stagger cards by 90ms. Remove the animation class on animationend, or it will block the card hover tilt.
2. Reduced motion: turn off all animations, tilts, the float and the spinning gradients.
3. Mobile check at 390px wide: no horizontal scroll, 16px+ side padding, nav links fit (hide "Stack" on small screens).
4. Visible focus rings in amber on every link and button.
5. Page <title>: "Simranvir Singh Sondhi". Add a meta description and Open Graph tags.
6. Run a production build and tell me the final bundle size.
```

---

## Prompt 10 — Deploy

```
Deploy this to Netlify.
1. Add netlify.toml with build command "npm run build" and publish directory "dist".
2. Initialize git, commit, and push to a new GitHub repo named "portfolio" under ssondhi2027.
3. Walk me through connecting the repo in Netlify, or use the Netlify CLI if I'm logged in.
4. Give me the live URL when it's done.
```

---

## Fix-it prompts (use when needed)

**Portrait looks blurry**
```
The portrait is blurry. Check for any CSS filter, rotate, perspective or will-change on the portrait or its parents and remove them. Load it with <img>. If it's still soft, re-run tools/make_portrait.py with a 2× upscale before tracing.
```

**Hero is laggy on my laptop**
```
The hero 3D scene is laggy. Lower the grid to 34 × 22 on desktop, cap pixel ratio at 1.5, turn off antialias on screens wider than 1600px, and make sure the loop pauses when the hero is off screen.
```

**Change content**
```
Update content.js only: [describe the change]. Don't touch layout or styles.
```
