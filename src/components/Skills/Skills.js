import { skillGroups } from '../../portfolio'
import SectionHeading from '../SectionHeading'
import './Skills.css'

const Skills = () => {
  if (!skillGroups.length) return null

  return (
    <section id='skills' className='section skills'>
      <SectionHeading number='03' title='Skills' />

      <div className='skills__grid'>
        {skillGroups.map((group) => (
          <div key={group.title} className='skills__group'>
            <h3 className='skills__group-title'>{group.title}</h3>
            <ul className='skills__list'>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
