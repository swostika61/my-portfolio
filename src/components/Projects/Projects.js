import { projects } from '../../portfolio'
import { ExternalIcon } from '../icons'
import './Projects.css'

const ProjectCard = ({ project }) => (
  <article className='project'>
    {project.image ? (
      <div className='project__media'>
        <img src={project.image} alt={`${project.name} screenshot`} loading='lazy' />
      </div>
    ) : (
      <div className='project__media project__media--mono' aria-hidden='true'>
        <span>{project.monogram}</span>
      </div>
    )}

    <div className='project__body'>
      <h3 className='project__name'>{project.name}</h3>
      <p className='project__desc'>{project.description}</p>

      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className='project__links'>
        {project.livePreview && (
          <a href={project.livePreview} target='_blank' rel='noreferrer'>
            Live site <ExternalIcon />
          </a>
        )}
        {project.sourceCode && (
          <a href={project.sourceCode} target='_blank' rel='noreferrer'>
            Code <ExternalIcon />
          </a>
        )}
      </div>
    </div>
  </article>
)

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <div className='section__head'>
        <span className='section__number'>02</span>
        <h2 className='section__title'>Projects</h2>
        <span className='section__rule' />
      </div>

      <p className='projects__intro'>
        My own recent builds first, then the products I helped build at work.
      </p>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
