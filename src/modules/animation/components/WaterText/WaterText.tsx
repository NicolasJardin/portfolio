import { keyframes, styled } from '@mui/material'
import { ReactNode } from 'react'

type WaterTextProps = {
  text: ReactNode
}

const WaterTextRoot = styled('div', {
  name: 'WaterText',
  slot: 'Root'
})({
  position: 'relative',
  userSelect: 'none'
})

export const WaterEffect = keyframes`
0%,
100% {
  clip-path: polygon(
    0% 45%,
    16% 44%,
    33% 50%,
    54% 60%,
    70% 61%,
    84% 59%,
    100% 52%,
    100% 100%,
    0% 100%
  );
}

50% {
  clip-path: polygon(
    0% 60%,
    15% 65%,
    34% 66%,
    51% 62%,
    67% 50%,
    84% 45%,
    100% 46%,
    100% 100%,
    0% 100%
  );
}
`
const Text = styled('div', {
  name: 'Text',
  slot: 'Text'
})({
  color: '#fff',
  position: 'absolute',
  top: 0
})

const TransparentText = styled(Text, {
  name: 'TransparentText',
  slot: 'Text'
})(({ theme }) => ({
  color: 'transparent',
  WebkitTextStroke: `2px ${theme.palette.primary.light}`
}))

const InvisibleText = styled('div', {
  name: 'InvisibleText',
  slot: 'Text'
})({
  color: 'transparent'
})

const AnimatedText = styled(Text, {
  name: 'AnimatedText',
  slot: 'Text'
})(({ theme }) => ({
  color: theme.palette.primary.light,
  animation: `${WaterEffect} 4s ease-in-out infinite`
}))

export default function WaterText({ text }: WaterTextProps) {
  return (
    <WaterTextRoot>
      <InvisibleText>{text}</InvisibleText>
      <TransparentText>{text}</TransparentText>
      <AnimatedText>{text}</AnimatedText>
    </WaterTextRoot>
  )
}
