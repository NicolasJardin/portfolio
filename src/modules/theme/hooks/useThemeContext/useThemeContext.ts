import { useContext } from 'react'
import ThemeContext, { ThemeContextStore } from '../../contexts/ThemeContext/ThemeContext'

const useThemeContext = () => {
  const themeContext = useContext<ThemeContextStore | undefined>(ThemeContext)

  if (!themeContext) throw new Error('useThemeContext hook must be used inside ThemeProvider.')

  return themeContext
}

export default useThemeContext
