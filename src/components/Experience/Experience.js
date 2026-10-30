import { experience } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section id='experience' className='section experience'>
      <div className='section__head'>
        <span className='section__number'>04</span>
        <h2 className='section__title'>Experience</h2>
        <span className='section__rule' />
      </div>

      <div className='exp__timeline'>
        {experience.map((item) => (
          <article key={`${item.company}-${item.period}`} className='exp__item'>
            <span className='exp__dot' aria-hidden='true' />
            <p className='exp__period'>{item.period}</p>
            <h3 className='exp__title'>{item.title}</h3>
            <p className='exp__company'>
              {item.company} · {item.location}
            </p>
            <p className='exp__overview'>{item.overview}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
