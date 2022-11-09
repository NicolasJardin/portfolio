import { CssBaseline, ThemeProvider } from '@mui/material'
import MainTheme from 'modules/theme/themes/MainTheme'
import { Suspense } from 'react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import queryClient from './services/base/queryClient'

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={MainTheme}>
          <CssBaseline />
          <BrowserRouter>
            <Suspense>
              <Router />
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
