import { useState, PropsWithChildren } from 'react'
import { Theme } from 'types/interfaces/theme/Theme'
import ThemeContext from '../../contexts/ThemeContext/ThemeContext'

type ThemeProviderProps = {}

export default function ThemeProvider({ children }: PropsWithChildren<ThemeProviderProps>) {
  const [activeTheme, setActiveTheme] = useState<Theme>('main')

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
