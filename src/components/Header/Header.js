import { about, contact } from '../../portfolio'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../icons'
import './Header.css'

const Header = () => {
  const { name, role, location, description, resume, social, stats } = about

  return (
    <header className='hero'>
      <div className='hero__inner'>
        <p className='hero__eyebrow rise'>
          {role} · {location}
        </p>
        <h1 className='hero__name rise rise--1'>{name}</h1>
        <p className='hero__tagline rise rise--2'>
          I build fast, data heavy web apps with <em>React</em>,{' '}
          <em>TypeScript</em> and <em>Next.js</em>.
        </p>
        <p className='hero__desc rise rise--2'>{description}</p>

        <div className='hero__actions rise rise--3'>
          <a className='btn btn--solid' href='#projects'>
            See my projects
          </a>
          <a className='btn btn--outline' href={resume} download>
            Download resume
          </a>
        </div>

        <div className='hero__socials rise rise--3'>
          <a href={social.github} target='_blank' rel='noreferrer' aria-label='GitHub'>
            <GitHubIcon />
          </a>
          <a href={social.linkedin} target='_blank' rel='noreferrer' aria-label='LinkedIn'>
            <LinkedInIcon />
          </a>
          <a href={`mailto:${contact.email}`} aria-label='Email'>
            <MailIcon />
          </a>
        </div>

        <dl className='hero__stats rise rise--4'>
          {stats.map((stat) => (
            <div key={stat.label} className='hero__stat'>
              <dt className='hero__stat-label'>{stat.label}</dt>
              <dd className='hero__stat-value'>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  )
}

export default Header
