import { keyframes, styled, Typography } from '@mui/material'

const Typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`
const Cursor = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`
const TypingText = styled(Typography, {
  name: 'TypingText',
  slot: 'Root'
})({
  overflow: 'hidden',
  borderRight: '.15em solid orange',
  whiteSpace: 'nowrap',
  letterSpacing: '.15em',
  animation: `${Typing} 3.5s steps(40, end), ${Cursor} .75s step-end infinite`
})

export default TypingText
