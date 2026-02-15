# Team Care Support & Accommodation

Marketing website for Team Care Domiciliary Support Ltd, a Nottingham-based provider of domiciliary care and supported living services.

## Client

**Team Care Domiciliary Support Ltd**
Company Registration: 16012175
Location: Nottingham, UK

## About

Team Care provides specialized support services for adults with:
- Learning disabilities
- Autism spectrum conditions
- Mental health conditions
- Physical disabilities

Services include domiciliary care and supported living accommodation across Nottingham and surrounding areas.

## Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: astro-icon (Tabler icon set)
- **UI Components**: Preline UI
- **Output**: Static site generation

## Getting Started

Install dependencies:
```bash
pnpm install
```

Start development server:
```bash
pnpm dev
```

Build for production:
```bash
pnpm build
```

Preview production build:
```bash
pnpm preview
```

## Project Structure

```
src/
  assets/         # Images and media files (optimized by Astro)
  components/     # Reusable UI components
  config/         # Site configuration and constants
  layouts/        # Page layouts and templates
  pages/          # Routes and page content
  styles/         # Global styles and Tailwind config
public/           # Static assets (served as-is)
```

## Configuration

Site configuration is managed in `src/config/site.ts`. Update this file with:
- Business contact details
- Service offerings
- CQC registration information
- Company metadata

## Deployment

This is a static site that can be deployed to any static hosting platform:
- Vercel (recommended)
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront

Build output is generated in the `dist/` directory.

## Development Notes

- Images should be placed in `src/assets/` for automatic optimization
- Use `public/` only for files that must be served as-is (favicons, etc.)
- Follow existing component patterns when adding new features
- Run `pnpm build` before pushing to verify production build
