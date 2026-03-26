import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'
import { about } from '../../portfolio'
import './About.css'

const useStyles = makeStyles(() => ({
  customTooltip: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4), 0 4px 12px rgba(0, 0, 0, 0.15)',
    fontSize: '0.9rem',
    fontWeight: 600,
    letterSpacing: '0.3px',
    padding: '10px 16px',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 12px 40px rgba(102, 126, 234, 0.5)',
    },
  },
  customArrow: {
    color: '#667eea',
    filter: 'drop-shadow(0 2px 6px rgba(102, 126, 234, 0.3))',
    '&::before': {
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    },
  },
}))

/**
 * About component - Displays user profile, bio, and social links
 */
const About = () => {
  const classes = useStyles()
  const { name, role, description, resume, social, picture } = about

  return (
    <div className='about center'>
      <div className='about__header'>
        {picture && (
          <img
            src={
              picture.startsWith('http')
                ? picture
                : `${process.env.PUBLIC_URL}/images/${picture}`
            }
            alt={name}
            className='about__picture'
          />
        )}

    <div className='about__intro'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>
      </div>
      </div>

      <div className='about__contact center'>
        {resume && (
          <Tooltip
            title='Download Resume'
            arrow
            classes={{
              tooltip: classes.customTooltip,
              arrow: classes.customArrow,
            }}
            enterDelay={300}
          >
            <a href={resume} download='Swostika_CV.pdf'>
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          </Tooltip>
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
    </div>
  )
}

export default About
