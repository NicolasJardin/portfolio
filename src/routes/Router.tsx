import { lazy } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

const Home = lazy(() => import('views/Home'))
const PageNotFound = lazy(() => import('routes/PageNotFound'))

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />

      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default Router
