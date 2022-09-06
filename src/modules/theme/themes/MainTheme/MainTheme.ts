import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#352728',
      light: '#323232',
      dark: '#1b1b1b'
    },
    secondary: {
      main: '#8E5D52',
      light: '#C4A484	',
      dark: '#6F4E37'
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)'
    },
    background: {
      default: '#352728'
    }
  }
})

export default theme
