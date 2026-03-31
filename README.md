# Frontend (React + Vite + Tailwind CSS)

This is the frontend app for the project, built with React and Vite, with Tailwind CSS configured and ready to use.

## Requirements

- Node.js 18+
- npm

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown in your terminal (usually <http://localhost:5173>).

## Available scripts

- `npm run dev` — start local development server with HMR
- `npm run build` — create production build
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint

## Tailwind CSS setup (already configured)

Tailwind is wired in and works out of the box.

### 1) Global CSS import

Tailwind is loaded in [src/index.css](src/index.css):

@import "tailwindcss";

### 2) PostCSS plugin

Tailwind PostCSS integration is configured in [postcss.config.js](postcss.config.js) using `@tailwindcss/postcss`.

### 3) Tailwind config file

[tailwind.config.js](tailwind.config.js) exists and is ready for theme extension, plugins, and content control.

## How to use Tailwind classes

Use utility classes directly in JSX via `className`.

Example:

```jsx
<div className="min-h-screen bg-slate-900 text-white p-8">
  <h1 className="text-3xl md:text-5xl font-bold">Hello</h1>
  <p className="mt-3 text-slate-300">Styled with Tailwind utilities.</p>
  <button className="mt-6 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition">
    Click me
  </button>
</div>
```

### Common utility patterns

- Layout: `flex`, `grid`, `items-center`, `justify-between`, `gap-4`
- Spacing: `p-4`, `px-6`, `py-2`, `mt-8`
- Typography: `text-sm`, `text-xl`, `font-semibold`, `tracking-tight`
- Colors: `bg-slate-900`, `text-white`, `border-slate-700`
- Effects: `rounded-lg`, `shadow-lg`, `hover:scale-105`, `transition`
- Responsive: `sm:*`, `md:*`, `lg:*`, `xl:*` (example: `md:grid-cols-2`)

## Project structure (frontend)

- [src/main.jsx](src/main.jsx) — app entry point
- [src/App.jsx](src/App.jsx) — main UI
- [src/index.css](src/index.css) — global styles + Tailwind import
- [tailwind.config.js](tailwind.config.js) — Tailwind config
- [postcss.config.js](postcss.config.js) — PostCSS plugins

## Notes

- Keep component styling in Tailwind classes where possible.
- Use [src/index.css](src/index.css) for global styles only.
- Restart `npm run dev` after major config changes.
