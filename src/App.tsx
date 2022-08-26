import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
