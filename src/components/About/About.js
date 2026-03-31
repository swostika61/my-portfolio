import { useMemo } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

/**
 * About component - Displays user profile, bio, and social links.
 */
const About = () => {
  const { name, role, description, resume, social } = about
  const highlights = useMemo(() => (
    description
      ? description
        .split('.')
        .map((item) => item.trim())
        .filter(Boolean)
      : []
  ), [description])
  const introLine = highlights[0] || ''
  const detailLines = highlights.slice(1)

  return (
    <section className='about'>
      <div className='about__panel'>
        <div className='about__content'>
          <p className='about__eyebrow'>About Me</p>

          {name && (
            <h1 className='about__title'>
              Hi, I am <span className='about__name'>{name}</span>
            </h1>
          )}

          {role && <h2 className='about__role'>{role}</h2>}
          {introLine && <p className='about__lead'>{introLine}.</p>}

          {detailLines.length > 0 && (
            <ul className='about__highlights'>
              {detailLines.map((item) => (
                <li key={item} className='about__desc'>
                  {item}.
                </li>
              ))}
            </ul>
          )}

          <div className='about__contact'>
            {resume && (
              <a href={resume} download='Swostika_CV.pdf'>
                <span type='button' className='btn btn--outline'>
                  Download Resume
                </span>
              </a>
            )}

            {social?.github && (
              <a
                href={social.github}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='github'
                className='link link--icon about__social-link'
              >
                <GitHubIcon />
              </a>
            )}

            {social?.linkedin && (
              <a
                href={social.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='linkedin'
                className='link link--icon about__social-link'
              >
                <LinkedInIcon />
              </a>
            )}
          </div>
        </div>

        <aside className='about__visual'>
          <div className='about__info-card'>
            <p className='about__card-label'>Currently focused on</p>
            <h3 className='about__card-title'>Building fast, accessible, and reliable user interfaces</h3>

            <div className='about__card-grid'>
              <div className='about__card-item'>
                <span className='about__card-key'>Based in</span>
                <span className='about__card-value'>Canada</span>
              </div>

              <div className='about__card-item'>
                <span className='about__card-key'>Availability</span>
                <span className='about__card-value'>Open to opportunities</span>
              </div>

              <div className='about__card-item'>
                <span className='about__card-key'>Work Style</span>
                <span className='about__card-value'>Clean architecture, reusable components, and team collaboration</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default About
