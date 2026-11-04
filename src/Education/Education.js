import { education } from '../portfolio'
import SectionHeading from '../components/SectionHeading'
import './Education.css'

const Education = () => {
  if (!education.length) return null

  return (
    <section id='education' className='section education'>
      <SectionHeading number='05' title='Education' />

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
