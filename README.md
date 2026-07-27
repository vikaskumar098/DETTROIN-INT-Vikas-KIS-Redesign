# Krishna International School — Website Redesign

A premium, modern, fully responsive redesign of kisaligarh.com, built as a
frontend internship project. Same purpose, branding, and content as the
original school website — reimagined with a contemporary design system,
component-driven architecture, and production-grade code quality.

**Live original for reference:** https://kisaligarh.com/

## Tech Stack

- **React 19** — UI library
- **Vite** — build tool & dev server
- **Tailwind CSS 3** — utility-first styling with a custom design token system
- **React Router DOM 7** — client-side routing
- **Framer Motion** — scroll reveals, page transitions, micro-interactions
- **React Icons** — icon set (Feather icons)

## Features

- Fully responsive, mobile-first layout (5 breakpoints)
- Reusable component library (Button, Card, Accordion, Lightbox, Badge…)
- Animated counters, scroll reveals, testimonial carousel, mega-menu nav
- Mobile drawer navigation with accordion sub-menus
- Working on-site enquiry form (Contact page + homepage)
- Native on-site gallery with keyboard-accessible lightbox
- Accessible: semantic HTML, ARIA attributes, visible focus states,
  `prefers-reduced-motion` support
- SEO-friendly: semantic routes, meta tags, descriptive alt text on all imagery

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
npm install
```

### Run locally
```bash
npm run dev
```
Visit `http://localhost:5173`

### Build for production
```bash
npm run build
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
├── assets/              # images, static media
├── components/
│   ├── ui/               # Button, Card, Badge, Accordion, Lightbox, BackToTop…
│   ├── layout/            # Navbar, Footer, MainLayout, PageHero, LoadingScreen
│   └── sections/          # Hero, TrustBar, About, Academics, Gallery, FAQ…
├── pages/                # Home, About, Academics, Gallery, Admissions, Contact, NotFound
├── hooks/                # useScrollPosition, useMediaQuery, useCountUp
├── utils/                # constants.js, navigation.js, cn.js
├── data/                 # static content (testimonials, faculty, FAQs, events)
├── App.jsx               # routing, page transitions, loading screen
├── main.jsx              # React entry point
└── index.css             # design tokens & base styles
```

## Design System

Colors, type scale, spacing, shadows, and radii are all defined centrally in
`tailwind.config.js`.

- **Palette:** Deep navy (`#0A1626`) + warm gold (`#C9A24B`) + ivory (`#F7F5F0`)
- **Type:** Fraunces (display/serif) + Inter (body/sans) + IBM Plex Mono (labels)
- **Motion:** Framer Motion scroll reveals, staggered hero entrance, count-up
  stats, page-transition fades — all respecting `prefers-reduced-motion`

## Notes on Imagery

This build uses styled placeholder blocks (`ImagePlaceholder.jsx`) in place of
real campus photography, since licensed photos weren't available for this
project. Swap in real `<img>` / `srcset` sources using the same aspect-ratio
and rounding classes — no other markup changes are needed.

## Roadmap

- Connect the enquiry form to a real backend/CRM endpoint
- Swap placeholder imagery for real campus photography (WebP/AVIF, `srcset`)
- Headless CMS integration for News/Events/Achievements
- Multilingual support (Hindi/English toggle)

## Author

Built as a frontend internship assignment — redesign of Krishna International
School's website (Aligarh, U.P.).
