import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  SvgIconComponent,
  WhatsApp
} from '@mui/icons-material'
import { Link, Stack, StackProps, styled } from '@mui/material'

type SocialMediaListProps = StackProps & {
  iconSize?: number
}

const SocialMediaListRoot = styled(Stack, {
  name: 'SocialMediaListRoot',
  slot: 'Root'
})<{ iconSize?: number }>(({ iconSize }) => ({
  svg: {
    height: iconSize || 30,
    width: iconSize || 30
  }
}))

const LinkStyled = styled(Link, {
  name: 'LinkStyled'
})({
  color: 'unset'
})

const getSocialMedia = (icon: SvgIconComponent, hoverColor: string) => {
  return styled(icon, {
    name: 'SocialMedia'
  })(({ theme }) => ({
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

export default function SocialMediaList(props: SocialMediaListProps) {
  return (
    <SocialMediaListRoot {...props}>
      <LinkStyled target="_blank" href="https://www.facebook.com/profile.php?id=100017057856641">
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
    </SocialMediaListRoot>
  )
}
