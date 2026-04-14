const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'SL.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Swostika Lamichhane',
  role: 'Front End Engineer',
  picture: 'https://cdn.dribbble.com/userupload/27544163/file/original-6ce706ca72f98a9e6853562df1f12b3d.png?format=webp&resize=400x300&vertical=center',

  description: 'Front End Engineer focused on building reliable web applications with React, TypeScript and Next js. Experienced in crafting responsive, accessible interfaces with strong performance. Collaborative with cross-functional teams to ship high-quality products and continuously improve engineering practices.',
  resume: `${process.env.PUBLIC_URL}/documents/Swostika_CV.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/swostikalamichhane/',
    github: 'https://github.com/swostika61?tab=overview&from=2026-03-01&to=2026-03-19',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Share Hub',
    description:
      'Share Hub is a platform that provides stock market information, analysis, and tools for NEPSE investors, helping users track shares, IPOs, and manage investments easily.',
    stack: ['SASS', 'TypeScript', 'Next js'],
    livePreview: 'https://sharehubnepal.com/',
    image: 'https://sharehubnepal.com/_next/static/media/sharehub-logo.9c584522.png',
  },
  {
    name: 'Share Samrat',
    description:
      'Share Samrat is a technical analysis platform for the Nepal Stock Exchange (NEPSE) that helps traders make smarter decisions using data instead of guesswork.',
    stack: ['SASS', 'TypeScript', 'Next js'],
    livePreview: 'https://sharesamrat.com',
    image: 'https://sharesamrat.com/logo-horizontal.png',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Tailwind CSS',
  'Git',
  'Next.js',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'swostikalamichhane61@gmail.com',
}



const experience = [
  // experience can be added or removed
  // if there are no experience items, Experience section won't show up
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
    overview: 'Built frontend interfaces for role-based access control (Admin, Analyst, Data Entry), consuming secured REST APIs to enforce permissions. Developed audit log viewer, dataset listings, and upload/edit forms using reusable React and TypeScript components integrated with REST APIs. Integrated Sentry error tracking into React frontend applications, reducing average frontend issue resolution time by 30%. Implemented automated testing for login, audit trails, and eCRF validation using Jest and Selenium, improving release stability.',

  },
  {
    title: 'Front End Developer',
    company: 'Share Hub',
    location: 'Kathmandu, Nepal',
    period: 'May 2021 – Sep 2022',
    overview:
      'Built real-time financial dashboards (Portfolio, Watchlist, Alerts, Orders) for 100K+ users using React, Highcharts, and Tailwind CSS. Integrated TradingView Charting Library for advanced candlestick charting. Connected REST APIs and WebSockets for live market prices, market depth, and technical signals. Implemented client-side JWT authentication flow, including route guards, Axios interceptors, and token refresh, supporting role-based and subscription-based UI access for 250K+ monthly sessions. Improved UI performance of data-intensive views (graphs, floorsheet) by up to 25% through code splitting and rendering optimizations.'
  },
  {
    title: 'React Developer Intern',
    company: 'Sarobar Technology Pvt. Ltd.',
    location: 'Kathmandu, Nepal',
    period: 'Jan 2021 – Apr 2021',
    overview:
      'Built Login and Vendor Sign-Up pages with form validation in React. Translated Figma designs into responsive React components for the orders page of a Logistics Management System.'
  },
]

export { header, about, projects, skills, contact, experience }
