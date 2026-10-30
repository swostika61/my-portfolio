import { education } from '../portfolio'
import './Education.css'

const Education = () => {
  if (!education.length) return null

  return (
    <section id='education' className='section education'>
      <div className='section__head'>
        <span className='section__number'>05</span>
        <h2 className='section__title'>Education</h2>
        <span className='section__rule' />
      </div>

      <div className='edu__grid'>
        {education.map((item) => (
          <article key={item.degree} className='edu__card'>
            <p className='edu__year'>{item.year}</p>
            <h3 className='edu__degree'>{item.degree}</h3>
            <p className='edu__school'>
              {item.school} · {item.location}
            </p>
            <p className='edu__desc'>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
