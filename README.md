# Devan Asokan — Portfolio

A modern, responsive, Spotify-inspired portfolio built with **Next.js (App Router)**, **React**, and **Tailwind CSS**.

## Features

- **Spotify player aesthetic** — left sidebar navigation, scrollable main content with a sticky top bar, and a fixed bottom playback bar (mock "Portfolio Experience" track with play/pause, skip, seek, and volume).
- **Five views** — Overview, Projects, Experience, Skills, and Contact, switched via a shared tab context.
- **Data-driven** — all content is loaded from JSON files in `data/` and mapped over cleanly through a typed loader in `lib/data.ts`.
- **Responsive** — desktop sidebar collapses into a mobile bottom nav on smaller screens.
- **Strict color palette** — Deep Black (`#121212` / `#000000`), Spotify Green (`#1DB954`), and White / muted (`#FFFFFF` / `#B3B3B3`).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Update the JSON files in `data/` — the UI re-renders from them automatically:

| File | Used by |
| --- | --- |
| `profile.json` | Hero, top bar, contact details |
| `projects.json` | Projects grid & featured cards |
| `work_experience.json` | Experience timeline (work) |
| `edu.json` | Experience timeline (education) |
| `extracurricular.json` | Experience (leadership & community) |
| `competitions.json` | Overview "recent wins" |
| `skills.json` | Skills badges (grouped in `lib/data.ts`) |

## Project structure

```
app/            App Router entry (layout, page, global styles)
components/     UI shell + views
  views/        Overview, Projects, Experience, Skills, Contact
data/           JSON content
lib/            Typed data loader
public/assets/  Profile image, resume, etc.
```

## Build

```bash
npm run build
npm start
```
