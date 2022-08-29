import useThemeContext from 'modules/theme/hooks/useThemeContext'
import { useCallback } from 'react'

const useTheme = () => {
  const { activeTheme, setActiveTheme } = useThemeContext()

  const changeTheme = useCallback(() => {
    if (activeTheme === 'main') return setActiveTheme('light')

    return setActiveTheme('main')
  }, [activeTheme, setActiveTheme])

  return {
    changeTheme
  }
}

export default useTheme
