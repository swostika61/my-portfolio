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
      'Designed and maintained the ICE Robotics website, ensuring user-friendly navigation and updated content. Developed educational materials for robotics and coding programs, and delivered hands-on robotics and programming workshops for students. Provided technical support for Moodle LMS, assisted with troubleshooting robotics hardware/software, and collaborated with the team to improve the online learning experience and program engagement.',
  },
  {
    title: 'Software Engineer',
    company: 'Numeric Mind',
    location: 'Kathmandu, Nepal',
    period: 'Sep 2022 – Apr 2024',
    overview: 'Built role-based access control, audit trails, and permission systems for a clinical data platform serving 100+ users. Developed React and TypeScript components integrated with REST APIs for clinical workflows. Improved observability using Sentry, reducing issue resolution time by 30%. Built automated tests with Jest and Selenium, improving stability and reducing QA effort by 40%. Designed responsive UIs from Figma for better usability.',

  },
  {
    title: 'Front End Developer',
    company: 'Share Hub',
    location: 'Kathmandu, Nepal',
    period: 'May 2021 – Sep 2022',
    overview:
      'Developed real-time financial dashboards using React and Tailwind CSS for 100,000+ users. Integrated REST APIs and managed state for live data updates. Implemented JWT authentication handling 250,000+ monthly sessions. Improved frontend performance by 25% using optimization techniques and built responsive UI components for web and mobile.'
  },
  {
    title: 'React Developer Intern',
    company: 'Sarobar Technology Pvt. Ltd.',
    location: 'Kathmandu, Nepal',
    period: 'Jan 2021 – Apr 2021',
    overview:
      'Built authentication and order management interfaces using React and Material UI. Integrated REST APIs and implemented JWT-based authentication. Developed client-side routing using React Router for seamless navigation.'
  },
]

export { header, about, projects, skills, contact, experience }
