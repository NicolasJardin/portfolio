import { keyframes, styled, Typography, TypographyProps } from '@mui/material'

type ColorTextProps = TypographyProps

const ColorTextEffect = keyframes`
  to {
    background-position: 200% center;
  }
`
const ColorTextRoot = styled(Typography, {
  name: 'ColorText',
  slot: 'Root'
})({
  backgroundImage: 'linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)',
  backgroundSize: '200% auto',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  webkitBackgroundClip: 'text',
  webkitTextFillColor: 'transparent',
  animation: `${ColorTextEffect} 2s linear infinite`
})

export default function ColorText({ children, ...props }: ColorTextProps) {
  return <ColorTextRoot {...props}>{children}</ColorTextRoot>
}
