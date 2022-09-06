import { Link, styled } from '@mui/material'

export const LinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: theme.transitions.create('color'),

  '&:hover': {
    color: theme.palette.text.secondary
  }
}))
