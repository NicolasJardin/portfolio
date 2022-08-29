import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import { ThemeContextStore } from '../contexts/ThemeContext'

const useThemeContext = () => {
  const themeContext = useContext<ThemeContextStore | undefined>(ThemeContext)

  if (!themeContext) throw new Error('useThemeContext hook must be used inside ThemeProvider.')

  return themeContext
}

export default useThemeContext
