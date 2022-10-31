import { styled } from '@mui/material'
import { PropsWithChildren, useCallback, useEffect, useState } from 'react'

type ContentWillAppearProps = {
  delay: number
}

const ContentWillAppearRoot = styled('div', {
  name: 'ContentWillAppear',
  slot: 'Root'
})({})

export default function ContentWillAppear({
  delay,
  children
}: PropsWithChildren<ContentWillAppearProps>) {
  const [show, setShow] = useState(false)

  const render = useCallback(() => {
    setTimeout(() => {
      setShow(true)
    }, delay)
  }, [delay])

  useEffect(() => {
    render()
  }, [render])

  return <ContentWillAppearRoot>{show && children}</ContentWillAppearRoot>
}
