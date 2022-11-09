import { styled } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'

const LayoutRoot = styled('div', {
  name: 'Layout',
  slot: 'Root'
})({})

const LayoutContent = styled('div', {
  name: 'LayoutContent'
})({
  height: '100%'
})

export default function Layout() {
  return (
    <LayoutRoot>
      <Header />
      <LayoutContent>{<Outlet />}</LayoutContent>
      <Footer />
    </LayoutRoot>
  )
}
