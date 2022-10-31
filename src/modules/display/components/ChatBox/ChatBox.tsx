import { styled } from '@mui/material'
import { PropsWithChildren } from 'react'

type ChatBoxProps = {}

const ChatBoxRoot = styled('div', {
  name: 'ChatBox',
  slot: 'Root'
})({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  padding: 20,
  background: '#1E1E1E',
  boxShadow: '0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2)',
  borderRadius: 6,

  '&::before': {
    content: "''",
    position: 'absolute',
    width: 0,
    height: 0,
    bottom: '100%',
    left: '1.5em',
    border: '.75rem solid transparent',
    borderTop: 'none',
    borderBottomColor: '#1E1E1E',
    filter: 'drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, .1))'
  }
})

export default function ChatBox(props: PropsWithChildren<ChatBoxProps>) {
  return <ChatBoxRoot {...props} />
}
