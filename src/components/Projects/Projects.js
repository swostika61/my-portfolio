import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

/**
 * Projects component - Displays grid of project cards
 * Returns null if no projects data available
 */
const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
