import { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { CSSTransition, TransitionStatus } from 'react-transition-group'
import { styled } from '@mui/material'

type ContentWillRenderProps = {
  delay: number
}

const ContentWillRenderRoot = styled('div', {
  name: 'ContentWillRenderRoot'
})<{ state: TransitionStatus }>(({ state, theme }) => ({
  transition: theme.transitions.create(['opacity', 'display']),
  opacity: state === 'entered' ? 1 : 0,
  display: state === 'exited' ? 'none' : ''
}))

export default function ContentWillRender({
  delay,
  ...props
}: PropsWithChildren<ContentWillRenderProps>) {
  const [show, setShow] = useState(false)

  const render = useCallback(() => {
    setTimeout(() => {
      setShow(true)
    }, delay)
  }, [delay])

  useEffect(() => {
    render()
  }, [render])

  return (
    <CSSTransition timeout={300} unmountOnExit in={show}>
      {state => <ContentWillRenderRoot state={state} {...props} />}
    </CSSTransition>
  )
}
