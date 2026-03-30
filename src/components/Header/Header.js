import { header, about } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

/**
 * Header component - Stylish header section with introduction
 */
const Header = () => {
  const { title } = header
  const { name, role } = about

  return (
    <header id='header' className='header'>
      <nav className='header__nav'>
        <h3 className='header__brand'>
          <a href='#header' className='link'>
            {title}
          </a>
        </h3>
        <Navbar />
      </nav>

      <div className='header__content'>
        <h1 className='header__title'>{name}</h1>
        <p className='header__subtitle'>{role}</p>
        <p className='header__description'>
          Passionate Front End Engineer crafting beautiful, responsive web experiences
        </p>
      </div>
    </header>
  )
}

export default Header
