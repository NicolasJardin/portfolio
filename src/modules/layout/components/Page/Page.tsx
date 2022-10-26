import { styled, Container } from '@mui/material'
import { PropsWithChildren } from 'react'

type PageProps = {}

const PageRoot = styled(Container, {
  name: 'Page',
  slot: 'Root'
})({
  minHeight: 'calc(100vh - 60px)',
  padding: '50px 0'
})

export default function Page({ children, ...props }: PropsWithChildren<PageProps>) {
  return <PageRoot {...props}>{children}</PageRoot>
}
