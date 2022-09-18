import { Link, styled } from '@mui/material'

export const LinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: theme.transitions.create('color'),
  borderBottom: '2px solid transparent',

  '&:hover': {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main
  }
}))
