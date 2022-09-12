import { styled } from '@mui/material'
import { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

type LayoutProps = {}

const LayoutRoot = styled('div', {
  name: 'Layout',
  slot: 'Root'
})({})

const LayoutContent = styled('div', {
  name: 'LayoutContent'
})({
  height: '100%'
})

export default function Layout({ children }: PropsWithChildren<LayoutProps>) {
  return (
    <LayoutRoot>
      <Header />
      <LayoutContent>{<Outlet />}</LayoutContent>
    </LayoutRoot>
  )
}
