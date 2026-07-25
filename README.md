# Naqila Syaniwa — Portfolio Website

Personal portfolio built with Next.js (App Router), Tailwind CSS v4, and Framer Motion (`motion/react`). Content (About, Skills, Projects, Experiences, Contact) is stored in structured data files — **no code changes needed to update content**, see [Updating Content](#updating-content) below.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- **Animation:** Framer Motion (`motion/react`)
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend (contact form submissions)
- **Icons:** react-icons (Simple Icons, Font Awesome, Feather sets)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create `.env.local` in the project root (never commit this file):

| Variable | Required for | Notes |
|---|---|---|
| `RESEND_API_KEY` | Contact form email sending | Get from [resend.com](https://resend.com) → API Keys |
| `NEXT_PUBLIC_SITE_URL` | SEO (sitemap, robots.txt, OG image, metadata) | Full URL with `https://`, no trailing slash, e.g. `https://naqila-syaniwa.vercel.app` |

**On Vercel:** these must also be added separately under Project Settings → Environment Variables — `.env.local` is not committed to git, so Vercel never sees it automatically. After adding/changing them, redeploy for the change to take effect.

## Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Landing page
│   ├── (dashboard)/               # Main app pages, shared sidebar layout
│   │   ├── about/
│   │   ├── skills/
│   │   ├── projects/
│   │   │   └── [slug]/            # Dynamic project detail route
│   │   ├── experiences/
│   │   └── contact/
│   ├── api/contact/route.ts       # Handles contact form submission → Resend
│   ├── sitemap.ts / robots.ts     # Auto-generated from siteConfig
│   └── opengraph-image.tsx        # Social share preview image
├── components/                    # Reusable UI components
├── data/                          # ← CONTENT LIVES HERE (see below)
├── lib/                           # Data loaders, helpers, motion presets
└── types/content.ts                # TypeScript shape for all content
```

## Updating Content

All real content is in `src/data/`. Edit these files directly — no other code changes needed for text/data updates.

### About (`src/data/about.ts`)

```ts
export const aboutContent: AboutContent = {
    name: 'Naqila Syaniwa',
    initials: 'NS',
    roles: ['Software Engineer', 'UI/UX Designer', ...],   // tabs shown on About page
    bioByRole: {
        'Software Engineer': ['Paragraph 1...', 'Paragraph 2...'],
        // one entry per role above — each is an array of paragraphs
    },
    cvUrl: '/documents/naqila-syaniwa-cv.pdf',   // must exist in /public/documents/
};
```

> ⚠️ **The bio text for every role is currently still placeholder copy** ("Description bio about Software Engineer, what im working, and what i like"). Replace these with real bios before treating the site as launch-ready.

To add a new role tab: add it to `roles`, then add a matching entry in `bioByRole` with the same exact string as the key.

### Skills (`src/data/skills.json`)

```json
{
    "id": "programming",
    "title": "Programming Language",
    "skills": [
        { "name": "JavaScript", "icon": "javascript", "level": 4 }
    ]
}
```

- `level` is 1–5, mapped to a label (Beginner/Intermediate/Advanced/Expert) in `src/lib/skill-icons.tsx` (`skillLevelLabel`).
- `icon` is a lowercase slug that must have a matching entry in `skillIconMap` in `src/lib/skill-icons.tsx`. If you add a skill with a new icon slug not yet mapped there, the badge will still render — just without an icon — until you add the mapping.

**To add a new skill icon:** open `src/lib/skill-icons.tsx`, import the icon from `react-icons/si` (or another react-icons set), add it to `skillIconMap` with your chosen slug as the key.

### Projects (`src/data/projects.json`)

```json
{
    "slug": "trashtrack",
    "title": "TrashTrack",
    "category": "IoT Platform",
    "gallery": ["/images/projects/trashtrack-1", "..."],
    "description": "...",
    "techStack": ["Node.js", "MQTT", "Docker"],
    "websiteUrl": "",
    "githubUrl": "https://github.com/...",
    "duration": "1 month"
}
```

- `slug` becomes the URL: `/projects/<slug>`. Must be unique, lowercase, no spaces.
- Leave `websiteUrl` as `""` (empty string) if there's no live site — the badge automatically hides itself when empty.
- `techStack` items get an icon automatically if a matching entry exists in `getTechIcon()` in `src/lib/tech-icons.tsx` (same pattern as skills — add new mappings there as needed).
- `gallery` currently uses placeholder image paths (no real image files exist yet in `public/images/projects/`) — the gallery renders a gray gradient placeholder until real images are added at those paths.

### Experiences (`src/data/experiences.json`)

```json
{
    "id": "exp-1",
    "title": "Vice Head of ...",
    "organization": "...",
    "year": "2026 - Now",
    "startYear": 2026,
    "description": "...",
    "skills": ["Leadership", "Teamwork"],
    "source": "https://..."
}
```

- Experiences are automatically sorted **newest first** by `startYear` — you don't need to manually order the array.
- `id` must be unique across all entries.

### Contact (`src/data/contact.ts`)

```ts
export const contactContent: ContactContent = {
    email: 'your@email.com',   // where contact form messages are sent, and the Gmail button target
    socials: [
        { label: 'GitHub', url: 'https://github.com/...', icon: 'github' },
    ],
};
```

- `email` **must match the email address used to sign up for Resend** while still on Resend's free sandbox sender (`onboarding@resend.dev`) — otherwise the contact form will silently fail to deliver. See [Resend's docs](https://resend.com/docs) on verifying a custom domain to lift this restriction.
- `icon` values map to `socialIconMap` in `src/lib/social-icons.tsx` — same pattern as skills/tech icons above.

## Deployment

Hosted on Vercel, auto-deploys on push to `main`. Custom `*.vercel.app` subdomain is configured under Project Settings → Domains. If the domain ever changes, update `NEXT_PUBLIC_SITE_URL` in Environment Variables and redeploy — this single value drives the sitemap, robots.txt, and social share previews.