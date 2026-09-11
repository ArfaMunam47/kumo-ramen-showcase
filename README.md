<div align="center">

# كومو — معرض الرامن المعاصر
### KUMO · Contemporary Ramen Exhibition

**A frontend-only Arabic (RTL) luxury web experience for the art of contemporary ramen — Kumo Tokyo Lab.**

![React](https://img.shields.io/badge/React-19-149eca) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6) ![Vite](https://img.shields.io/badge/Vite-6-9c7ad7) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-0f766e) ![License](https://img.shields.io/badge/License-Apache--2.0-blue)

</div>

---

## ✨ About

**كومو (KUMO)** is a pure frontend design showcase — a cinematic, editorial digital magazine for a fictional contemporary ramen atelier. Every dish, metric, and chef's note is curated content presented through a minimal-luxury, fully Right-to-Left (RTL) Arabic interface.

> **Design only** — no backend, no database, no business logic. Just a beautifully engineered frontend.

What makes it stand out:

- **Cinematic hero showcase** with dish index and oversized editorial type.
- **Living food rotator** — a smooth, auto-rotating gallery across 8 dishes.
- **17-dish asymmetric menu** with 3D-style food cards and full **product detail pages** (broth metrics, tasting bowls, cooking steps, chef's notes, pairings).
- **Editorial craft interludes** — extraction standards, tasting flight, and a three-pillars philosophy section.
- **Universal search modal** across every dish.
- **Ingredient detail modals** and a rich, silk-textured design language.

---

## 🎨 Design Language

| Token | Hex | Usage |
|---|---|---|
| Background | `#F3F0E9` | Warm paper-like canvas |
| Surface | `#FAF9F5` | Cards, pills, modals |
| Cream | `#F1E6BD` | Soft silhouettes |
| Gold | `#D99B19` | Accents, ratings, highlights |
| Sage / Olive | `#8AA56D` / `#6F8056` | Flavour metrics |
| Text / Muted | `#242421` / `#77756D` | Ink & secondary copy |
| Border | `#DED9CA` | Hairline dividers |

- **Typography** — `Cairo` (editorial display) + `IBM Plex Sans Arabic` (body), with tabular numerals.
- **Direction** — fully RTL (`dir="rtl"`, `direction: rtl`), Arabic-flavoured numerals (١٢٣ …).
- **Texture** — subtle grain overlay, custom rounded scrollbar, soft card shadows.

---

## 🧱 Tech Stack

| Layer | Choice |
|---|---|
| Framework | **React 19** |
| Language | **TypeScript 5.8** (strict, `noEmit`, ES2022) |
| Build | **Vite 6** + `@vitejs/plugin-react` |
| Styling | **Tailwind CSS 4** (`@tailwindcss/vite`) |
| Motion | **`motion` (Framer Motion 12)** + `lucide-react` icons |
| Server (dev) | **Express** + `dotenv` for local runtime |

---

## 🗂 Project Structure

```
arabic/
├── index.html                 # RTL shell, Arabic meta + font preloads
├── metadata.json              # App metadata (name, description)
├── vite.config.ts             # React + Tailwind plugins, @ alias
├── tsconfig.json              # Strict TS config, bundler resolution
├── .env.example               # GEMINI_API_KEY / APP_URL template
└── src/
    ├── main.tsx               # Entry point
    ├── App.tsx                # Editorial flow + product routing
    ├── index.css              # Design tokens, fonts, grain, scrollbar
    ├── assets/images/         # Culinary photography (20+ bowls)
    ├── data/
    │   ├── arabicShowcaseData.ts   # 17-dish catalogue (Arabic)
    │   └── dishes.ts                # Original English dish data
    └── components/
        ├── MinimalNavbar.tsx            # Sticky luxury nav (RTL)
        ├── FoodHeroHeader.tsx           # Hero + dish index
        ├── FoodRotator.tsx              # Living auto-rotator
        ├── FoodShowcase.tsx             # Showcase layout
        ├── EditorialFoodInterlude.tsx   # Craft standards editorial
        ├── FoodMenuSection.tsx          # 17-dish asymmetric menu
        ├── FoodCard.tsx                 # 3D-style food card
        ├── ArtisanSelectionsSection.tsx # Artisan picks
        ├── CraftPhilosophySection.tsx   # Three pillars of craft
        ├── ProductDetailPage.tsx        # Full dish detail page
        ├── IngredientDetailModal.tsx    # Ingredient close-ups
        ├── SearchModal.tsx              # Universal search
        ├── MinimalFooter.tsx            # Minimal footer
        └── ProperFooter.tsx             # Comprehensive footer
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js ≥ 18

```bash
# 1. Install dependencies
npm install

# 2. (Optional) Configure environment
cp .env.example .env.local   # then add your GEMINI_API_KEY

# 3. Run the dev server — http://localhost:3000
npm run dev
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server on port `3000` (`0.0.0.0`) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Type-check with `tsc --noEmit` |
| `npm run clean` | Remove `dist/` + `server.js` |

### Environment Variables

| Variable | Purpose |
|---|---|
| `GEMINI_API_KEY` | Optional — Gemini AI API access (injected by AI Studio at runtime) |
| `APP_URL` | Optional — host URL for self-referential links / API endpoints |

---

## 🚢 Deploying

It's a standard Vite app — deploy the `dist/` output to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

```bash
npm run build
```

---

## © License

Licensed under the [Apache License 2.0](LICENSE).
