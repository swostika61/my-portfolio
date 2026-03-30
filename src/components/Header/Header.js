import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

/**
 * Header component - Main header with site title and navigation
 */
const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3 className='header__brand'>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
