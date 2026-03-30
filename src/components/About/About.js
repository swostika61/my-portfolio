import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

/**
 * About component - Displays user profile, bio, and social links
 */
const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <section className='about'>
      <div className='about__header'>
        <div className='about__intro'>
          {name && (
            <h1 className='about__title'>
              Hi, I am <span className='about__name'>{name}.</span>
            </h1>
          )}

          {role && <h2 className='about__role'>{role}</h2>}
          {description && <p className='about__desc'>{description}</p>}
        </div>
      </div>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} download='Swostika_CV.pdf'>
            <span type='button' className='btn btn--outline'>
              Download Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default About
