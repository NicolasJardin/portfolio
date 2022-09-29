import Layout from 'modules/layout/components/Layout'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('views/Home'))
const Project = lazy(() => import('views/Project'))
const PageNotFound = lazy(() => import('routes/PageNotFound'))

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<PageNotFound />} />

        <Route index element={<Home />} />

        <Route path="project" element={<Project />} />
      </Route>
    </Routes>
  )
}

export default Router
