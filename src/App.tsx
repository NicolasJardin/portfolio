import { CssBaseline } from '@mui/material'
import ThemeHandler from 'modules/theme/components/ThemeHandler'
import ThemeProvider from 'modules/theme/providers/ThemeProvider'
import { Suspense } from 'react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import queryClient from './services/base/queryClient'

//TODO fazer loading para suspense
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </div>
  )
}

export default App
