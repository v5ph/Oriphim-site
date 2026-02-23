Oriphim provides receipts for everything AI does in a business where AIexecutions and AI management is most important.

# ORIPHIM - Next.js + React Site

AI Infrastructure for safety and integrity. Oriphim provides the deterministic gateway for high-stakes agentic workflows in BioPharma, Finance, and Aerospace.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Deployment**: Cloudflare Pages
- **Fonts**: Google Fonts (Space Grotesk, JetBrains Mono) + Custom (ASIX-FOUNDER)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone https://github.com/v5ph/Oriphim-site.git
cd Oriphim-site
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file based on `.env.local.example`:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

Build for production:
```bash
npm run build
```

Preview production build locally:
```bash
npm start
```

## Deployment

### Cloudflare Pages

This site is configured for deployment on Cloudflare Pages using the `@cloudflare/next-on-pages` adapter.

1. Build for Cloudflare Pages:
```bash
npm run pages:build
```

2. Deploy to Cloudflare Pages:
```bash
npm run deploy
```

Or use the Cloudflare dashboard to connect your GitHub repository for automatic deployments.

### Environment Variables

Make sure to set the following environment variables in your Cloudflare Pages project settings:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── CoreCompetencies.tsx
│   ├── AgenticAudit.tsx
│   ├── InstitutionalForm.tsx
│   └── Footer.tsx
├── assets/             # Static assets
│   ├── fonts/
│   ├── icons/
│   └── images/
├── public/             # Public static files
└── docs/               # Documentation
```

## Features

- ✅ Responsive design
- ✅ Server-side rendering (SSR)
- ✅ Static site generation (SSG)
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Supabase integration for form submissions
- ✅ Edge-optimized deployment on Cloudflare

## License

© 2026 ORIPHIM LABS LLC. All rights reserved.
