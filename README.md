# Maheshwar R — Java Backend Developer Portfolio

A production-oriented portfolio built with **React + JavaScript + Tailwind CSS/CSS only**.

## Design direction

**Editorial Minimalism + Bento Grid + Restrained Glassmorphism + Dark Luxury.**

Why this direction:
- Strong recruiter scanability
- High information density without visual noise
- Enterprise/software-engineering feel
- Responsive from 320px through large desktop
- Lightweight CSS/native animations instead of animation libraries
- Project evidence is prioritized over decorative effects

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL.

For a production build:

```bash
npm run build
npm run preview
```

## Personalize before deployment

Edit `src/data/portfolio.js`:
- Email
- GitHub URL
- LinkedIn URL
- Resume path
- Project links
- Only verified project technologies/details

Also update in `index.html`:
- Canonical URL
- Open Graph URL
- JSON-LD URL / sameAs
- Title and description if needed

Place the real resume at `public/resume.pdf` if you want the Resume CTA to work.

## Design constraints implemented

- React + JavaScript
- Tailwind CSS + custom CSS
- No TypeScript
- No UI component library
- No Framer Motion / GSAP
- No Three.js / WebGL
- Native IntersectionObserver scroll reveal
- CSS architecture visual and data-flow animation
- Reduced-motion support
- Semantic HTML and keyboard focus states
- Mobile-first responsive layouts
- Accessible mobile navigation
- Project detail modal
- GitHub verification section with manual configuration
- SEO metadata + Person/WebSite-oriented structured data
- robots.txt + sitemap.xml
- No fabricated employment, metrics, ratings or GitHub statistics

## Responsive QA checklist

Test:
- 320px
- 375px
- 425px
- 768px
- 1024px
- 1280px
- 1440px
- 1536px

Check:
- Mobile menu
- Keyboard focus
- Reduced motion
- Project modal
- CTA links
- No horizontal overflow
- Contrast and readable line lengths
- Real resume / GitHub / LinkedIn URLs
