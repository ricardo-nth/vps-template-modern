# Modern Healthcare Template

A contemporary, clean Astro.js template for healthcare agencies with bold typography and modern layouts.

🔗 **Live Demo:** https://vps-template-modern.vercel.app

## Features

- Astro 5.x
- Tailwind CSS v4
- TypeScript
- SEO optimized
- Fast performance
- Modern design

## Quick Start

1. Click **Use This Template** on GitHub.
2. Clone your new repository.
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start the dev server:
   ```bash
   pnpm dev
   ```
5. Update `src/config/site.ts` with your business details.
6. Replace placeholder content in pages and components.

## Customization Checklist

- [ ] Update `site.ts` configuration
- [ ] Replace all `[Business Name]` placeholders
- [ ] Add contact information
- [ ] Update service content
- [ ] Customize compliance/CQC sections
- [ ] Add team members
- [ ] Replace images
- [ ] Update branding

## Project Structure

```
src/
  components/    # UI components
  config/        # Site configuration
  layouts/       # Layouts
  pages/         # Routes and page content
  styles/        # Global styles
public/          # Static assets
```

## Service Detail Pages

Includes a supported living example at `/services/supported-living` with compliance sections.

## Available Scripts

- `pnpm dev` — Start development server
- `pnpm build` — Build for production
- `pnpm preview` — Preview production build
- `pnpm astro` — Run Astro CLI

## Dual-Profile Shipping Mode

This template supports canonical-URL dual-profile preview (Supported Living + Domiciliary Care) and a single-profile production mode.

- Preview mode (default):
  - `PUBLIC_CARE_PROFILE_PREVIEW=true`
  - Top profile toggle is shown and selection persists with `localStorage`.
- Production handoff mode:
  - `PUBLIC_CARE_PROFILE_PREVIEW=false`
  - `PUBLIC_DEFAULT_CARE_PROFILE=supported-living` or `dom-care`
  - Toggle UI is hidden and pages render as a single profile on clean URLs.

Example production build for Domiciliary Care:

```bash
PUBLIC_CARE_PROFILE_PREVIEW=false PUBLIC_DEFAULT_CARE_PROFILE=dom-care pnpm build
```

## Need Professional Help?

Visit https://vertexplatformsolutions.com/offers/healthcare-agencies

## Tech Stack

- Astro 5.x
- Tailwind CSS v4
- TypeScript

## License

MIT
