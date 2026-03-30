# Swostika Lamichhane Portfolio

Personal developer portfolio built with React, featuring projects, skills, education, experience, and contact information.

## About

This portfolio presents:

- Professional profile and introduction
- Selected projects with live preview links
- Technical skills
- Education timeline
- Work experience timeline
- Contact section

The site uses a Modern Tech Blue visual theme with clean typography and responsive layout.

## Tech Stack

- React 18
- Material UI
- Tailwind CSS
- PostCSS + Autoprefixer
- gh-pages (deployment)

## Project Structure

- src/portfolio.js: Main content source (name, role, projects, skills, contact, experience)
- src/components: Reusable UI sections
- src/Education: Education section
- public/documents: Resume and documents

## Getting Started

1. Clone the repository.
2. Install dependencies.
3. Start development server.

```bash
npm install
npm start
```

The app will run at http://localhost:3000.

## Available Scripts

```bash
npm start
npm run build
npm test
npm run lint
npm run format
npm run deploy
```

## Customize Portfolio Content

Edit src/portfolio.js to update:

- Header title/logo text
- About information
- Project list
- Skills
- Experience
- Contact email

Optional updates:

- Update page title in public/index.html
- Replace resume file in public/documents

## Deployment

This project uses gh-pages for deployment.

1. Set homepage in package.json to your deployment URL.
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
