import { about } from '../../portfolio'
import SectionHeading from '../SectionHeading'
import './About.css'

const FACTS = [
  { label: 'Based in', value: 'Toronto, Canada' },
  { label: 'Focus', value: 'React, TypeScript, Next.js' },
  { label: 'Best at', value: 'Dashboards and live data interfaces' },
  { label: 'Currently', value: 'Open to new frontend opportunities' },
]

const About = () => (
  <section id='about' className='section about'>
    <SectionHeading number='01' title='About' />

    <div className='about__grid'>
      <div className='about__text'>
        <p>
          I am a front end engineer with 4+ years of experience. At Share Hub
          in Nepal I built real time financial dashboards used by more than
          100,000 people, where prices update every second and the page still
          has to feel instant. At Numeric Mind I built healthcare software,
          where careful, tested code matters because real clinics depend on
          it.
        </p>
        <p>
          In 2024 I moved to Canada and completed a postgraduate diploma in
          Full Stack Software Development at Lambton College in Toronto.
          Since then I have supported a robotics education program here, and
          kept building: my recent projects include a job application tracker
          with user accounts and full CRUD, and a live crypto dashboard in
          Canadian dollars.
        </p>
        <p>
          My strongest side is data heavy interfaces: live updates, charts,
          tables and forms that stay fast and clear. I care about the details
          a user feels, quick load times, honest loading and error states,
          and screens that work for everyone.
        </p>
      </div>

      <dl className='about__facts'>
        {FACTS.map((fact) => (
          <div key={fact.label} className='about__fact'>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
        <div className='about__fact'>
          <dt>Portfolio code</dt>
          <dd>
            <a href={about.social.github} target='_blank' rel='noreferrer'>
              github.com/swostika61
            </a>
          </dd>
        </div>
      </dl>
    </div>
  </section>
)

export default About
