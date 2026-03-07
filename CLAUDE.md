# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite HMR)
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint
npm run deploy     # Build + deploy to GitHub Pages via gh-pages
```

## Architecture

React 19 SPA deployed to GitHub Pages. Uses `HashRouter` (not `BrowserRouter`) so client-side routing works on GitHub Pages without server config.

**Routing** (`src/App.jsx`): Five routes — `/`, `/about`, `/skills`, `/projects`, `/contact` — all rendered inside a fixed `<Navigation>` bar.

**Pages** (`src/pages/`): Each page is a self-contained component. Content (projects list, skills, etc.) is defined inline as data within the component — there is no external data source or CMS.

**ParticlesBackground** (`src/components/ParticlesBackground.jsx`): tsParticles canvas rendered full-screen on the Home page. Particles repulse away from `#repulse-navbar` and `#repulse-content` divs. The Home page temporarily disables pointer events on the canvas when hovering the content card so links are clickable.

**Styling**: Global styles in `src/index.css` (Times New Roman, black/white palette, `#0066cc` for links). Pages use inline styles for layout; CSS classes for reusable patterns like `.page-container`, `.project-card`, `.navbar`.

**Demo videos**: Served from `public/demos/` and referenced as `/demos/filename.mov` in project data.

## Key conventions

- No TypeScript — plain `.jsx` files throughout.
- `no-unused-vars` lint rule ignores names matching `/^[A-Z_]/`.
- Project data in `Projects.jsx` is a hardcoded array of objects with `name`, `date`, `github`, `tech`, `description`, `highlights`, and optional `demoVideo`.
