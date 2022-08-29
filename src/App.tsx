import { CssBaseline } from '@mui/material'
import ThemeHandler from 'modules/theme/components/ThemeHandler'
import ThemeProvider from 'modules/theme/providers/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider>
        <ThemeHandler>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeHandler>
      </ThemeProvider>
    </div>
  )
}

export default App
