const SectionHeading = ({ number, title }) => (
  <div className='section__head'>
    <span className='section__number'>{number}</span>
    <h2 className='section__title'>{title}</h2>
    <span className='section__rule' />
  </div>
)

export default SectionHeading
