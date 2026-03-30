import { useState, useEffect } from 'react'
import './Education.css'

const education = [
    {
        degree: 'Postgraduate Diploma, Full Stack Software Development',
        school: 'Lambton College',
        location: 'Toronto, ON, Canada',
        year: 'May 2024 – Dec 2025',
        description:
            'Relevant Coursework: React, Node.js, Python, Database Management, UI/UX',
    },
    {
        degree: 'Bachelor of Computer Science',
        school: 'Madan Bhandari Memorial College',
        location: 'Kathmandu, Nepal',
        year: 'Aug 2017 – Aug 2022',
        description:
            'Learned programming, data structures, and software engineering.',
    },
]

const Education = () => {
    const [animate, setAnimate] = useState(false)

    // Trigger animation on mount
    useEffect(() => {
        setAnimate(true)
    }, [])

    return (
        <section id='education' className='section education'>
            <h2 className='section__title'>Education</h2>

            <div className='education__timeline'>
                {education.map((item, index) => (
                    <div
                        key={`${item.school}-${item.year}`}
                        className={`education__item ${animate ? 'animate' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
                    >
                        <div className='education__dot' />
                        <div className='education__content'>
                            <h3 className='education__degree'>{item.degree}</h3>
                            <span className='education__school'>{item.school}</span>
                            <span className='education__year'>{item.year}</span>
                            <p className='education__desc'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education
