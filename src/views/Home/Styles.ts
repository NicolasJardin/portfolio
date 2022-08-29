import { styled } from '@mui/material'

export const Teste = styled('div')(({ theme }) => ({
  background: theme.palette.primary.main
}))

export const Teste2 = styled('div')(({ theme }) => ({
  background: theme.palette.primary.light
}))

export const Teste3 = styled('div')(({ theme }) => ({
  background: theme.palette.primary.dark
}))

export const Secondary = styled('div')(({ theme }) => ({
  background: theme.palette.secondary.main
}))

export const Secondary2 = styled('div')(({ theme }) => ({
  background: theme.palette.secondary.light
}))

export const Secondary3 = styled('div')(({ theme }) => ({
  background: theme.palette.secondary.dark
}))
