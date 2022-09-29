import { ThemeProvider as ThemeProviderMui } from '@mui/material'
import useThemeContext from 'modules/theme/hooks/useThemeContext'
import MainTheme from 'modules/theme/themes/MainTheme'
import { PropsWithChildren, useMemo } from 'react'
import LightTheme from '../../themes/LightTheme'

type ThemeHandlerProps = {}

export default function ThemeHandler({ children }: PropsWithChildren<ThemeHandlerProps>) {
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
