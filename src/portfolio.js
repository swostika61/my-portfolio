const header = {
  title: 'SL.',
}

const about = {
  name: 'Swostika Lamichhane',
  role: 'Front End Engineer',
  location: 'Toronto, Ontario, Canada',
  description:
    'Front End Engineer focused on building reliable web applications with React, TypeScript and Next.js. I craft responsive, accessible interfaces with strong performance, and I enjoy working with cross-functional teams to ship products people rely on every day.',
  resume: `${process.env.PUBLIC_URL}/documents/resume-swostika-lamichhane.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/swostikalamichhane/',
    github: 'https://github.com/swostika61',
  },
  stats: [
    { value: '4+', label: 'Years of experience' },
    { value: '100K+', label: 'Users on dashboards I built' },
    { value: '25%', label: 'Faster data heavy pages' },
  ],
}

const projects = [
  {
    name: 'Job Hunt Tracker',
    description:
      'A personal project I built to manage my own job search. Sign up and log in, and every user gets a private board with four stages: Applied, Interview, Offer and Rejected. Full CRUD, data saved per user, and a demo video on the home page that I recorded by automating the real app with Playwright.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: `${process.env.PUBLIC_URL}/images/job-tracker.png`,
    sourceCode: 'https://github.com/swostika61/job-tracker',
  },
  // {
  //   name: 'Crypto Dashboard',
  //   description:
  //     'Live crypto prices for the top 50 coins, in Canadian dollars by default. The browser calls my own Next.js API routes, which cache the CoinGecko data for a minute to respect the free API limit. Search, a CAD and USD switch, auto refresh every minute, and a coin page with a 7 day chart drawn as plain SVG.',
  //   stack: ['Next.js', 'TypeScript', 'CoinGecko API'],
  //   image: `${process.env.PUBLIC_URL}/images/crypto-dashboard.png`,
  //   sourceCode: 'https://github.com/swostika61/crypto-dashboard',
  // },
  {
    name: 'Share Hub',
    description:
      'Real time financial dashboards I built at Share Hub for 100K+ users: portfolio, watchlist, alerts and orders, with live market prices over WebSockets and advanced charting. I improved the performance of the data heavy views by up to 25% with code splitting and rendering optimizations.',
    stack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'WebSockets'],
    monogram: 'SH',
    livePreview: 'https://sharehubnepal.com/',
  },
  {
    name: 'Share Samrat',
    description:
      'A technical analysis platform for the Nepal Stock Exchange (NEPSE) that helps traders make smarter decisions using data instead of guesswork, with charts, screeners and market signals.',
    stack: ['TypeScript', 'Next.js', 'SASS'],
    monogram: 'SS',
    livePreview: 'https://sharesamrat.com',
  },
]

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'HTML', 'CSS'],
  },
  {
    title: 'Styling & UI',
    skills: ['Tailwind CSS', 'SASS', 'Material UI', 'Responsive Design', 'Accessibility'],
  },
  {
    title: 'Data, Testing & Tools',
    skills: ['REST APIs', 'WebSockets', 'Jest', 'Selenium', 'Sentry', 'Git'],
  },
]

const experience = [
  {
    title: 'IT & Application Design Assistant / Robotics Tutor',
    company: 'International Canadian Education Robotics Program (ICE)',
    location: 'Toronto, Ontario, Canada',
    period: 'Sep 2025 – Dec 2025',
    overview:
      'Developed and maintained responsive robotics program website, updating learning content and UI components. Created interactive robotics and coding learning materials for student workshops. Delivered hands-on robotics and programming workshops to students. Provided technical support for Moodle LMS and robotics systems.',
  },
  {
    title: 'Frontend Engineer',
    company: 'Numeric Mind',
    location: 'Kathmandu, Nepal',
    period: 'Sep 2022 – Apr 2024',
    overview:
      'Built frontend interfaces for role-based access control (Admin, Analyst, Data Entry), consuming secured REST APIs to enforce permissions. Developed audit log viewer, dataset listings, and upload/edit forms using reusable React and TypeScript components integrated with REST APIs. Integrated Sentry error tracking into React frontend applications, reducing average frontend issue resolution time by 30%. Implemented automated testing for login, audit trails, and eCRF validation using Jest and Selenium, improving release stability.',
  },
  {
    title: 'Front End Developer',
    company: 'Share Hub',
    location: 'Kathmandu, Nepal',
    period: 'May 2021 – Sep 2022',
    overview:
      'Built real-time financial dashboards (Portfolio, Watchlist, Alerts, Orders) for 100K+ users using React, Highcharts, and Tailwind CSS. Integrated TradingView Charting Library for advanced candlestick charting. Connected REST APIs and WebSockets for live market prices, market depth, and technical signals. Implemented client-side JWT authentication flow, including route guards, Axios interceptors, and token refresh, supporting role-based and subscription-based UI access for 250K+ monthly sessions. Improved UI performance of data-intensive views (graphs, floorsheet) by up to 25% through code splitting and rendering optimizations.',
  },
  {
    title: 'React Developer Intern',
    company: 'Sarobar Technology Pvt. Ltd.',
    location: 'Kathmandu, Nepal',
    period: 'Jan 2021 – Apr 2021',
    overview:
      'Built Login and Vendor Sign-Up pages with form validation in React. Translated Figma designs into responsive React components for the orders page of a Logistics Management System.',
  },
]

const education = [
  {
    degree: 'Postgraduate Diploma, Full Stack Software Development',
    school: 'Lambton College',
    location: 'Toronto, ON, Canada',
    year: 'May 2024 – Dec 2025',
    description: 'Relevant Coursework: React, Node.js, Python, Database Management, UI/UX',
  },
  {
    degree: 'Bachelor of Computer Science',
    school: 'Madan Bhandari Memorial College',
    location: 'Kathmandu, Nepal',
    year: 'Aug 2017 – Aug 2022',
    description: 'Learned programming, data structures, and software engineering.',
  },
]

const contact = {
  email: 'swostikalamichhane61@gmail.com',
}

export { header, about, projects, skillGroups, experience, education, contact }
