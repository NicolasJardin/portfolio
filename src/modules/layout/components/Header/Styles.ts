import { styled } from '@mui/material'
import { FadeIn } from 'modules/animation/keyframes/FadeIn'

export const HeaderContainer = styled('header', { name: 'HeaderContainer' })(({ theme }) => ({
  width: '100%',
  height: 60,
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  animation: `${FadeIn} 1s ease`,
  background: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`
}))
