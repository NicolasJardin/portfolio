import { useState } from 'react'
import { ReactFCWithChildren } from 'types/interfaces/base/ReactFCWithChildren'
import { Theme } from 'types/interfaces/theme/Theme'
import ThemeContext from '../../contexts/ThemeContext/ThemeContext'

type ThemeProviderProps = {}

const ThemeProvider: ReactFCWithChildren<ThemeProviderProps> = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<Theme>('main')

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
