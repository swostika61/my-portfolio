import { experience } from '../../portfolio'
import './Experience.css'

/**
 * Experience component - Displays work experience and job history
 * Returns null if no experience data available
 */
const Experience = () => {
  if (!experience.length) return null

  return (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>Experience</h2>

      <div className='experience__container'>
        {experience.map((job) => (
          <article
            key={`${job.title}-${job.company}`}
            className='experience__item'
          >
            <div className='experience__header'>
              <h3 className='experience__title'>{job.title}</h3>
              <p className='experience__period'>{job.period}</p>
            </div>

            <div className='experience__company'>
              <p className='experience__company-name'>{job.company}</p>
              <p className='experience__location'>{job.location}</p>
            </div>

            <p className='experience__overview'>
              {job.overview || (Array.isArray(job.description)
                ? job.description.join(' ')
                : job.description)}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
