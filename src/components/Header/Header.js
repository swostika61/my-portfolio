import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

/**
 * Header component - Main header with site title and navigation
 */
const Header = () => {
  const { title } = header

  return (
    <header id='header' className='header center'>
      <h3 className='header__brand'>
        <a href='#header' className='link'>
          {title}
        </a>
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
