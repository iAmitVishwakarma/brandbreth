<div align="center">

# ◆ BrandBreth

**Strategic design. Measurable outcomes.**

A premium design agency landing page — built with motion-first principles, scroll-driven storytelling, and a relentless obsession with craft.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-iamitvishwakarma.github.io/brandbreth-black?style=for-the-badge&logo=vercel&logoColor=white)](https://iamitvishwakarma.github.io/brandbreth/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)

</div>

---

## ✦ Overview

BrandBreth is a design agency concept site that showcases what intentional motion design looks like in production. Every section is choreographed — from the scroll-pinned image grid on entry, to the kinetic text reveals and the star that escapes across the screen during the Benefits section.

This isn't a template. It's a craft exercise.

---

## ✦ Feature Architecture

| Section | Technique |
|---|---|
| **Preloader** | Framer Motion exit animation, sequential word cycling |
| **Intro** | GSAP ScrollTrigger — pinned, parallax column scroll |
| **Hero** | Scroll-synced text reveal via width expansion |
| **Brand Marquee** | Static logo grid with hover transforms |
| **Benefits** | GSAP timeline — pinned section with 6 text crossfades + rotating star |
| **Summary** | Scroll-triggered dual-line text reveal |
| **Services** | Scroll-triggered text reveal + transition rounded div |
| **Work Showcase** | GSAP pin, directional text split, vertical image scroll |
| **Pricing** | Responsive layout with categorized services grid |
| **Footer** | Clean CTA with call-to-action |

---

## ✦ Tech Stack

```
React 19          — UI component architecture
GSAP + ScrollTrigger — Scroll-driven animation engine
Lenis             — Buttery smooth inertia scroll
Framer Motion     — Preloader exit + declarative animation
Tailwind CSS v4   — Utility-first styling via Vite plugin
Vite 7            — Lightning-fast dev & production build
```

---

## ✦ Local Development

```bash
# Clone the repository
git clone https://github.com/iAmitVishwakarma/brandbreth.git
cd brandbreth

# Install dependencies
npm install

# Start the dev server
npm run dev
```

> Dev server runs at `http://localhost:5173`

---

## ✦ Build & Deploy

```bash
# Production build
npm run build

# Deploy to GitHub Pages
npm run deploy
```

Deployment is automated via GitHub Actions on every push to `main`. The workflow builds the project and publishes to GitHub Pages automatically.

---

## ✦ Project Structure

```
src/
├── Components/
│   ├── home/
│   │   ├── Intro.jsx          # Pinned image grid scroll
│   │   ├── Hero.jsx           # Text reveal + CTA
│   │   ├── BrandMarquee.jsx   # Logo trust bar
│   │   ├── Benefits.jsx       # Animated outcomes section
│   │   ├── Summary.jsx        # Scroll text reveal
│   │   ├── Services.jsx       # Service categories
│   │   ├── WorkShowcase.jsx   # Pinned work gallery
│   │   └── Pricing.jsx        # Pricing + services grid
│   ├── layout/
│   │   ├── Navbar.jsx         # Fixed nav with hover effect
│   │   ├── Preloader.jsx      # Animated loading screen
│   │   ├── LenisScrollProvider.jsx  # GSAP + Lenis sync
│   │   └── Footer.jsx         # CTA footer
│   └── ui/
│       └── Button.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## ✦ Design Philosophy

> *Design is not decoration. It's the architecture of perception.*

Every animation has a purpose. Every transition earns its place. The scroll experience is intentionally paced — fast enough to feel alive, slow enough to let the work breathe.

The color palette is deliberately restrained: black, white, amber, gray. The typography does the heavy lifting.

---

## ✦ Credits

**Developed by** — [Amit Vishwakarma](https://github.com/iAmitVishwakarma)  
**Design Inspiration** — [Brandbeet Studio](https://www.brandbeet.com/)  
**Animation** — GSAP / Lenis / Framer Motion

---

<div align="center">

*Built with intention. Shipped with care.*

</div>
