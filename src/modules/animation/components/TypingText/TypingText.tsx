import { keyframes, styled, Typography, TypographyProps } from '@mui/material'

type TypingTextProps = TypographyProps

const Typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`
const Cursor = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`
const TypingTextStyled = styled(Typography, {
  name: 'TypingText',
  slot: 'Root'
})({
  overflow: 'hidden',
  borderRight: '.15em solid orange',
  whiteSpace: 'nowrap',
  letterSpacing: '.15em',
  animation: `${Typing} 3.5s steps(40, end), ${Cursor} .75s step-end infinite`
})

const TypingTextRoot = styled('div', {
  name: 'TypingText',
  slot: 'Root'
})({
  display: 'flex'
})

export default function TypingText(props: TypingTextProps) {
  return (
    <TypingTextRoot>
      <TypingTextStyled {...props} />
    </TypingTextRoot>
  )
}
