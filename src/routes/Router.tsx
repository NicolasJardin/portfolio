import Layout from 'modules/layout/components/Layout'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('views/Home'))
const Project = lazy(() => import('views/Project'))
const Skill = lazy(() => import('views/Skill'))
const Formation = lazy(() => import('views/Formation'))
const PageNotFound = lazy(() => import('routes/PageNotFound'))

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<PageNotFound />} />

        <Route index element={<Home />} />

        <Route path="project" element={<Project />} />

        <Route path="skill" element={<Skill />} />

        <Route path="formation" element={<Formation />} />
      </Route>
    </Routes>
  )
}

export default Router
