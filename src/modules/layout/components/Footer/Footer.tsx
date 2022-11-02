import { Email, LocationOn, Phone } from '@mui/icons-material'
import { Stack, styled, Typography } from '@mui/material'
import SocialMediaList from 'modules/display/components/SocialMediaList'

type FooterProps = {}

const FooterRoot = styled('div', {
  name: 'Footer',
  slot: 'Root'
})(({ theme }) => ({
  padding: '20px 40px',
  borderTop: `1px solid ${theme.palette.divider}`,
  width: '100%',
  background: theme.palette.background.default,
  display: 'flex',
  justifyContent: 'space-between'
}))

const Circle = styled('div', {
  name: 'Circle'
})(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: 100,
  background: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: theme.transitions.create('transform'),

  '&:hover': {
    transform: 'scale(1.2)'
  }
}))

export default function Footer(props: FooterProps) {
  return (
    <FooterRoot>
      <Stack spacing={2}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Circle>
            <LocationOn />
          </Circle>

          <Typography>Canoas, RS, Brasil</Typography>
        </Stack>

        <Stack direction="row" spacing={3} alignItems="center">
          <Circle>
            <Phone />
          </Circle>

          <Typography>+55 51 99373-6233</Typography>
        </Stack>

        <Stack direction="row" spacing={3} alignItems="center">
          <Circle>
            <Email />
          </Circle>

          <Typography>Nicolasjdev@gmail.com</Typography>
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="center" justifyContent="center">
        <SocialMediaList direction="row" spacing={4} iconSize={40} />
        <Typography fontStyle="italic" variant="caption">
          Typography © 2022 Nicolas Jardin dos Santos
        </Typography>
      </Stack>
    </FooterRoot>
  )
}
