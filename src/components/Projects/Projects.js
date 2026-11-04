import { projects } from '../../portfolio'
import { ExternalIcon } from '../icons'
import SectionHeading from '../SectionHeading'
import './Projects.css'

const ProjectCard = ({
  project: { name, description, stack, image, monogram, livePreview, sourceCode },
}) => (
  <article className='project'>
    {image ? (
      <div className='project__media'>
        <img src={image} alt={`${name} screenshot`} loading='lazy' />
      </div>
    ) : (
      <div className='project__media project__media--mono' aria-hidden='true'>
        <span>{monogram}</span>
      </div>
    )}

    <div className='project__body'>
      <h3 className='project__name'>{name}</h3>
      <p className='project__desc'>{description}</p>

      <ul className='project__stack'>
        {stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className='project__links'>
        {livePreview && (
          <a href={livePreview} target='_blank' rel='noreferrer'>
            Live site <ExternalIcon />
          </a>
        )}
        {sourceCode && (
          <a href={sourceCode} target='_blank' rel='noreferrer'>
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
      <SectionHeading number='02' title='Projects' />

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
