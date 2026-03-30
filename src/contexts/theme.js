import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('themeName')

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(getInitialTheme)

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleThemeChange = event => {
      if (!localStorage.getItem('themeName')) {
        setThemeName(event.matches ? 'dark' : 'light')
      }
    }

    darkMediaQuery.addEventListener('change', handleThemeChange)

    return () => darkMediaQuery.removeEventListener('change', handleThemeChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeName(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      localStorage.setItem('themeName', nextTheme)
      return nextTheme
    })
  }, [])

  const contextValue = useMemo(
    () => [{ themeName, toggleTheme }],
    [themeName, toggleTheme]
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
