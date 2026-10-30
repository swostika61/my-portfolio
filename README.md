# Swostika Lamichhane — Portfolio

My personal portfolio as a Front End Engineer in Toronto. React, TypeScript and Next.js, 4+ years of experience.

## Design

Warm cream background, deep pine green, and a soft clay accent used sparingly. Headings in Fraunces (serif), body text in Inter. Calm and editorial, on purpose, most developer portfolios are dark blue.

## Sections

- Hero with name, role, stats and resume download
- About, with a quick facts card
- Projects: my own builds first (Job Hunt Tracker, Crypto Dashboard, with real screenshots), then products I worked on (Share Hub, Share Samrat)
- Skills in three groups
- Experience timeline
- Education
- Contact band with email and socials

## Tech

- React 18 (Create React App)
- Plain CSS per component, no UI library in the components
- Tailwind is available in the project but the design is hand written CSS with variables in `src/index.css`
- gh-pages for deployment

## Where the content lives

Almost everything is in `src/portfolio.js`: name, role, description, stats, projects, skill groups, experience, education and contact email. Change the words there and the site updates. Project screenshots live in `public/images`, the resume in `public/documents`.

## Run it

```bash
npm install
npm start
```

## Deploy

Same as before:

```bash
npm run build
npm run deploy
```
