import { skills } from '../../portfolio'
import './Skills.css'

const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    match: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux'],
  },
  {
    id: 'ui',
    title: 'Styling and UI',
    match: ['SASS', 'Tailwind CSS', 'Material UI'],
  },
  {
    id: 'quality',
    title: 'Testing and Tools',
    match: ['Git', 'Jest', 'Enzyme'],
  },
]

/**
 * Skills component - Displays list of technical skills
 * Returns null if no skills data available
 */
const Skills = () => {
  if (!skills.length) return null

  const groupedSkills = skillGroups
    .map((group) => ({
      ...group,
      items: skills.filter((skill) => group.match.includes(skill)),
    }))
    .filter((group) => group.items.length > 0)

  const remainingSkills = skills.filter(
    (skill) => !skillGroups.some((group) => group.match.includes(skill))
  )

  if (remainingSkills.length > 0) {
    groupedSkills.push({
      id: 'other',
      title: 'Other',
      items: remainingSkills,
    })
  }

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>

      <p className='skills__intro'>
        Technologies I use to build scalable, accessible, and production-ready web applications.
      </p>

      <div className='skills__groups'>
        {groupedSkills.map((group) => (
          <article key={group.id} className='skills__group'>
            <h3 className='skills__group-title'>{group.title}</h3>
            <ul className='skills__list'>
              {group.items.map((skill) => (
                <li key={skill} className='skills__list-item'>
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
