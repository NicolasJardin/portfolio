import { createContext } from 'react'
import { Theme } from 'types/interfaces/theme/Theme'

export type ThemeContextStore = {
  activeTheme: Theme
  setActiveTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextStore | undefined>(undefined)

export default ThemeContext
