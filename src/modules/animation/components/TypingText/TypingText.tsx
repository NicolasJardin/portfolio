import { keyframes, styled, Typography, TypographyProps, useTheme } from '@mui/material'

type Animation = { time: number; steps: number; disabled?: boolean }

type TypingTextProps = TypographyProps & {
  animation: Animation
}

const Typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`

const TypingTextRoot = styled('div', {
  name: 'TypingText',
  slot: 'Root'
})({
  display: 'flex'
})

export default function TypingText(props: TypingTextProps) {
  const { palette } = useTheme()

  const Cursor = keyframes`
  from, to { border-color: transparent }
  50% { border-color: ${palette.primary.main}; }
`

  const TypingTextStyled = styled(Typography, {
    name: 'TypingText',
    slot: 'Root',
    shouldForwardProp: prop => prop !== 'animation'
  })<{ animation: Animation }>(({ animation }) => ({
    overflow: 'hidden',
    borderRight: !animation.disabled ? `.15em solid ${palette.primary.main}` : '',
    whiteSpace: 'nowrap',
    letterSpacing: '.15em',
    animation: !animation.disabled
      ? `${Typing} ${animation.time}s steps(${animation.steps}, end), ${Cursor} .75s step-end infinite`
      : ''
  }))

  return (
    <TypingTextRoot>
      <TypingTextStyled {...props} />
    </TypingTextRoot>
  )
}
