import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  SvgIconComponent,
  WhatsApp
} from '@mui/icons-material'
import { Link, styled, Typography } from '@mui/material'

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

const SocialMediaContent = styled('div', {
  name: 'SocialMediaContent'
})({
  display: 'flex',
  alignItems: 'center',
  gap: 50
})

const getSocialMedia = (icon: SvgIconComponent, hoverColor: string) => {
  return styled(icon, {
    name: 'SocialMedia'
  })(({ theme }) => ({
    height: 40,
    width: 40,
    transition: theme.transitions.create('color'),

    '&:hover': {
      color: hoverColor
    }
  }))
}

const FacebookIcon = getSocialMedia(Facebook, '#3b5998')

const InstagramIcon = getSocialMedia(Instagram, '#FD1D1D')

const LinkedInIcon = getSocialMedia(LinkedIn, '#0e76a8')

const GitHubIcon = getSocialMedia(GitHub, '#171515')

const WhatsAppIcon = getSocialMedia(WhatsApp, '#25D366')

const LinkStyled = styled(Link, {
  name: 'LinkStyled'
})({
  color: 'unset'
})

const CopyRight = styled(Typography, {
  name: 'CopyRight'
})({
  fontStyle: 'italic'
})

const LeftFooter = styled('div', {
  name: 'LeftFooter'
})({
  display: 'flex',
  flexDirection: 'column',
  gap: 10
})

const RightFooter = styled('div', {
  name: 'RightFooter'
})({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 10
})

const Circle = styled('div', {
  name: 'Circle'
})(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: 100,
  background: theme.palette.grey[200],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const Info = styled('div', {
  name: 'Info'
})({
  display: 'flex',
  alignItems: 'center',
  gap: 20
})

export default function Footer(props: FooterProps) {
  return (
    <FooterRoot>
      <LeftFooter>
        <Info>
          <Circle>
            <LocationOn />
          </Circle>

          <Typography>Canoas, RS, Brasil</Typography>
        </Info>

        <Info>
          <Circle>
            <Phone />
          </Circle>

          <Typography>+55 51 99373-6233</Typography>
        </Info>

        <Info>
          <Circle>
            <Email />
          </Circle>

          <Typography>Nicolasjdev@gmail.com</Typography>
        </Info>

        <CopyRight variant="caption">Copyright © 2022 Nicolas Jardin dos Santos</CopyRight>
      </LeftFooter>

      <RightFooter>
        <SocialMediaContent>
          <LinkStyled
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100017057856641"
          >
            <FacebookIcon />
          </LinkStyled>

          <LinkStyled target="_blank" href="https://www.instagram.com/nicolas_jardiin/">
            <InstagramIcon />
          </LinkStyled>

          <LinkStyled target="_blank" href="https://www.linkedin.com/in/jardin-nicolas/">
            <LinkedInIcon />
          </LinkStyled>

          <LinkStyled target="_blank" href="https://github.com/NicolasJardin">
            <GitHubIcon />
          </LinkStyled>

          <LinkStyled target="_blank" href="https://wa.me/5551993736233">
            <WhatsAppIcon />
          </LinkStyled>
        </SocialMediaContent>
      </RightFooter>
    </FooterRoot>
  )
}
