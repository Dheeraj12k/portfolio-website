# Dheeraj K Portfolio

Personal site for sharing my data engineering profile, current projects, and a contact channel backed by Neon Postgres. Built with Next.js (App Router) and Tailwind CSS.

## Portfolio Preview

| Hero | Projects | Contact |
|------|----------|---------|
| ![Hero](pictures/portfolio-pic-1.png) | ![Projects](pictures/portfolio-pic-2.png) | ![Contact](pictures/portfolio-pic-3.png) |

## Features
- Dynamic homepage sections (hero, experience timeline, testimonials, toolbox)
- Contact modal that persists inquiries to Neon PostgreSQL via Prisma
- Privacy and Terms pages tailored for this portfolio
- Responsive dark theme with custom hero orbit animation
- Blog/newsletter hooks stubbed out until content is ready (easy to re-enable later)

## Architecture
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom utilities
- **Data layer**: Prisma Client -> Neon Postgres (contact messages only)
- **Hosting**: Vercel (primary target) with standalone output for alternative hosting scenarios
- **Assets**: Local SVG icon set and hero imagery under `src/assets`

## Getting Started
```bash
# install dependencies
cd next-app
npm install

# generate prisma client
npx prisma generate

# start development server
npm run dev
```
Visit http://localhost:3000 to view the site.

## Project Structure
```text
.
|-- .github/
|   `-- workflows/
|       `-- deploy.yml
|-- next-app/
|   |-- prisma/
|   |   |-- migrations/
|   |   |   `-- 20251017014124_init/
|   |   |       `-- migration.sql
|   |   `-- schema.prisma
|   |-- public/
|   |   |-- icon.svg
|   |   `-- resume.pdf
|   |-- src/
|   |   |-- app/
|   |   |   |-- layout.tsx
|   |   |   |-- page.tsx
|   |   |   |-- og/route.tsx
|   |   |   |-- privacy-policy/page.tsx
|   |   |   `-- terms-of-services/page.tsx
|   |   |-- assets/
|   |   |-- components/
|   |   |-- db/
|   |   |-- lib/
|   |   `-- static/
|   |       |-- config/site.ts
|   |       `-- home/
|   |-- package.json
|   `-- ...
|-- pictures/
|   |-- portfolio-pic-1.png
|   |-- portfolio-pic-2.png
|   `-- portfolio-pic-3.png
`-- README.md
```

## Configuration
Create `next-app/.env` with:
```env
DATABASE_URL="postgresql://<neon-connection-string>"
PRISMA_SCHEMA="public"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```
Mirror these variables in Vercel (Project > Settings > Environment Variables) using the production domain.

## Database Setup
```bash
cd next-app
npx prisma migrate deploy
```
Optional: inspect data with `npx prisma studio`.

### Table Schema (ContactMessage)
| Column    | Type      | Notes                 |
|-----------|-----------|-----------------------|
| id        | SERIAL    | Primary key           |
| name      | TEXT      | Required              |
| email     | TEXT      | Required              |
| message   | TEXT      | Required              |
| createdAt | TIMESTAMP | Defaults to `now()`   |

## Customization
- `0-siteConfig.ts`: name, tagline, social links, keywords
- `3-experiences.ts`: professional timeline entries
- `5-portfolioProjects.ts`: featured project cards (placeholder included)
- `6-testimonials.ts`, `7-about.ts`, `9-toolBoxDetails.ts`: testimonials, about copy, tool stacks
- `8-bookDetails.ts`: currently shows a "Coming soon" reading list
- Replace hero illustration, favicon, and resume in `public/` and `src/assets/`

## Deployment Options
- **Vercel (recommended)**: Push to GitHub, configure environment variables, update `LINKS.Website` once the final domain is chosen.
- **GitHub Actions**: `.github/workflows/deploy.yml` deploys via Vercel if repository secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` are set.
- **Self-hosting**: `next.config.mjs` outputs a standalone build (`npm run build && npm run start`).

## Deployment Commands
```bash
# build the production bundle
npm run build

# apply migrations against production
npx prisma migrate deploy

# start standalone server (if self-hosting)
npm run start
```
*(Use `npm` or `pnpm` equivalents if you prefer those package managers.)*

## Future Roadmap
- Replace `comingSoon.png` once the AI builder demo is live
- Publish initial blog posts and re-enable newsletter/RSS
- Wire contact submissions into email or Slack notifications
- Add a lightweight Docker setup (Next.js + Neon)
- Integrate analytics (Plausible, PostHog, or Vercel Analytics)

## License
MIT License - you are free to reuse components; please provide attribution if it helps you.

## Contact
Questions or collaboration ideas? Use the contact form or email `dheeraj1208.k@gmail.com`.
