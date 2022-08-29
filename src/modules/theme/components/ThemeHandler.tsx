import { ThemeProvider as ThemeProviderMui } from '@mui/material'
import useThemeContext from 'modules/theme/hooks/useThemeContext'
import MainTheme from 'modules/theme/themes/MainTheme'
import { useMemo } from 'react'
import { ReactFCWithChildren } from 'types/interfaces/base/ReactFCWithChildren'
import LightTheme from '../themes/LightTheme'

const ThemeHandler: ReactFCWithChildren = ({ children }) => {
  const { activeTheme } = useThemeContext()

  const theme = useMemo(() => {
    switch (activeTheme) {
      case 'light':
        return LightTheme
    }

    return MainTheme
  }, [activeTheme])

  return <ThemeProviderMui theme={theme}>{children}</ThemeProviderMui>
}

export default ThemeHandler
