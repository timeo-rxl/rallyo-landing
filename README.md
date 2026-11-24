# Rallyo — Landing page

Landing page for **Rallyo**, the app that matches Montréal students to play soccer,
basketball and tennis — by skill level, schedule and park.

- Live demo of the app: https://rallyo-montreal.lovable.app
- App source code: https://github.com/timeo-rxl/rallyo-nexus-mvp
- Built with React + Vite + Tailwind CSS, French/English toggle.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs dist/
```

## Deploy

Connected to Vercel — every push to `main` deploys automatically.

## Data

All displayed data (6 parks, 3 sports, 18 demo students) comes from the real Rallyo
dataset in `src/data.ts`. Nothing is invented. The 4 photos in `public/images/` are
AI-generated placeholders, to be replaced with real photos from Montréal parks.
