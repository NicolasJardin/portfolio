import { LinkBaseProps } from '@mui/material'
import { FC } from 'react'
import { LinkStyled } from './Styles'

type LinkProps = LinkBaseProps

const Link: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <LinkStyled variant="body1" underline="none" {...props}>
      {children}
    </LinkStyled>
  )
}

export default Link
