import { contact } from '../../portfolio'
import './Contact.css'

/**
 * Contact component - Displays email contact section
 * Returns null if no email is configured
 */
const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact
