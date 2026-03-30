import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

/**
 * Header component - Stylish header section with introduction
 */
const Header = () => {
  const { title } = header

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


    </header>
  )
}

export default Header
