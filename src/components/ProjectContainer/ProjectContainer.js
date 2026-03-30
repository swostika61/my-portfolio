import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectContainer.css'

/**
 * ProjectContainer component - Displays individual project card with details
 * @param {Object} props - Component props
 * @param {Object} props.project - Project data object
 */
const ProjectContainer = ({ project }) => {
  const imageUrl = project.image?.startsWith('http')
    ? project.image
    : `${process.env.PUBLIC_URL}/images/${project.image}`

  return (
    <div className='project'>
      {project.image && (
        <img
          src={imageUrl}
          alt={`${project.name} screenshot`}
          className='project__image'
        />
      )}

      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={`${project.name}-${item}`} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LaunchIcon />
          <span>Live Preview</span>
        </a>
      )}
    </div>
  )
}

export default ProjectContainer
