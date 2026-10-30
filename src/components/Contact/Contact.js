import { about, contact } from '../../portfolio'
import { GitHubIcon, LinkedInIcon } from '../icons'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section id='contact' className='contact'>
      <div className='contact__inner'>
        <p className='contact__number'>06 · Contact</p>
        <h2 className='contact__title'>Let&apos;s work together</h2>
        <p className='contact__text'>
          I am open to front end roles in Toronto and remote across Canada.
          If you are building a product and need a developer who cares about
          fast, clear, data heavy interfaces, my inbox is open.
        </p>
        <a className='contact__button' href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        <div className='contact__socials'>
          <a href={about.social.github} target='_blank' rel='noreferrer' aria-label='GitHub'>
            <GitHubIcon />
          </a>
          <a href={about.social.linkedin} target='_blank' rel='noreferrer' aria-label='LinkedIn'>
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
