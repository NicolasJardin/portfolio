import { CssBaseline } from '@mui/material'
import ThemeHandler from 'modules/theme/components/ThemeHandler'
import ThemeProvider from 'modules/theme/providers/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import { Suspense } from 'react'

//TODO fazer loading para suspense
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeHandler>
          <CssBaseline />
          <BrowserRouter>
            <Suspense>
              <Router />
            </Suspense>
          </BrowserRouter>
        </ThemeHandler>
      </ThemeProvider>
    </div>
  )
}

export default App
