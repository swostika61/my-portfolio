import { skillGroups } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skillGroups.length) return null

  return (
    <section id='skills' className='section skills'>
      <div className='section__head'>
        <span className='section__number'>03</span>
        <h2 className='section__title'>Skills</h2>
        <span className='section__rule' />
      </div>

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
