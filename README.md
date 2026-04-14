# Swostika Lamichhane Portfolio

Personal portfolio built with React. It highlights an introduction, featured projects, skills, work experience, education, and contact information.

## Overview

This site includes:

- A hero/about section with social links and resume access
- Featured projects with live preview links
- Skills grouped into frontend, styling, and testing/tooling
- Work experience timeline
- Education section
- Contact section with email link

## Tech Stack

- React 18
- Material UI
- Tailwind CSS
- PostCSS + Autoprefixer
- gh-pages for deployment

## Project Structure

- src/portfolio.js: Main content source for header, about, projects, skills, contact, and experience
- src/components: Reusable UI sections
- src/Education: Education section
- public/documents: Resume and other documents

## Getting Started

```bash
npm install
npm start
```

The app runs at http://localhost:3000.

## Available Scripts

```bash
npm start
npm run build
npm test
npm run eject
npm run format
npm run deploy
```

## Customize Content

Most content lives in src/portfolio.js. Update this file to change:

- Name, title, and intro text
- Resume and social links
- Project list
- Skills
- Contact email
- Experience entries

You can also update:

- public/index.html for the page title and metadata
- public/documents for the resume PDF and related assets

## Deployment

This project uses gh-pages for deployment.

1. Set the homepage field in package.json to your deployment URL.
2. Build and deploy:

```bash
npm run build
npm run deploy
```

Example homepage values:

- https://yourusername.github.io/your-repo
- https://yourdomain.com

## License

MIT
