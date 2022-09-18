import { styled } from '@mui/material'
import { PropsWithChildren } from 'react'

type PageProps = {}

const PageRoot = styled('div', {
  name: 'Page',
  slot: 'Root'
})({
  height: 'calc(100vh - 60px)'
})

export default function Page({ children, ...props }: PropsWithChildren<PageProps>) {
  return <PageRoot {...props}>{children}</PageRoot>
}
