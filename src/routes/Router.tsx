import Layout from 'modules/layout/components/Layout'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('views/Home'))
const PageNotFound = lazy(() => import('routes/PageNotFound'))

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Router
