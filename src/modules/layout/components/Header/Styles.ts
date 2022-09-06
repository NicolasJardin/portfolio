import { keyframes, styled } from '@mui/material'
import { ReactComponent as WaveIconSVG } from 'assets/svg/wave.svg'
import Link from 'modules/link/Link'

const FadeIn = keyframes`
0%{
  opacity:0;
 }

100% {
  opacity:1;
 }
`

const Move = keyframes`
 from {
   transform: translateX(-20px)
 }
`

export const HeaderContainer = styled('div', { name: 'HeaderContainer' })({
  width: '100%',
  height: 80,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  animation: `${FadeIn} 1s ease`
})

export const WaveContainer = styled('div', { name: 'WaveContainer' })({
  animation: `${Move} 3s ease-in-out infinite alternate`,
  position: 'absolute',
  top: 0
})

export const WaveIcon = styled(WaveIconSVG, { name: 'WaveIcon' })({
  transform: 'rotate(180deg)',
  width: '120vw'
})

export const LeftContent = styled('div', { name: 'LeftContent' })({
  zIndex: 1,
  flex: 1,
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center'
})

export const Name = styled(Link, { name: 'Name' })({
  fontFamily: 'Dancing Script, cursive',
  fontWeight: 500,
  fontSize: '40px'
})

export const RightContent = styled('div', { name: 'RightContent' })({
  zIndex: 1,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly'
})
