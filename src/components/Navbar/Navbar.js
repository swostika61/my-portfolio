import { useContext, useState, useEffect, useCallback } from 'react'
import Brightness2Icon from '@mui/icons-material/Brightness2'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact, experience } from '../../portfolio'
import './Navbar.css'

const navItems = [
  { id: 'projects', label: 'Projects', show: () => projects.length > 0 },
  { id: 'skills', label: 'Skills', show: () => skills.length > 0 },
  { id: 'education', label: 'Education', show: () => true },
  { id: 'experience', label: 'Experience', show: () => experience.length > 0 },
  { id: 'contact', label: 'Contact', show: () => Boolean(contact.email) },
]

/**
 * Navbar component - Main navigation with theme toggle and mobile menu
 */
const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const visibleNavItems = navItems.filter((item) => item.show())

  const toggleNavList = useCallback(() => setShowNavList(prev => !prev), [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', showNavList)

    return () => document.body.classList.remove('nav-open')
  }, [showNavList])

  return (
    <nav className='center nav'>
      <ul className={`nav__list ${showNavList ? 'nav__list--open' : ''}`}>
        {visibleNavItems.map((item) => (
          <li key={item.id} className='nav__list-item'>
            <a
              href={`#${item.id}`}
              onClick={toggleNavList}
              className='link link--nav'
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
