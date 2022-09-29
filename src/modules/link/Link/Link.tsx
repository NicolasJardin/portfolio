import { LinkBaseProps, Link as LinkMui, styled } from '@mui/material'
import { FC } from 'react'

type LinkProps = LinkBaseProps

export const LinkStyled = styled(LinkMui)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: theme.transitions.create('color'),
  borderBottom: '2px solid transparent',

  '&:hover': {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main
  }
}))

const Link: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <LinkStyled variant="body1" underline="none" {...props}>
      {children}
    </LinkStyled>
  )
}

export default Link
