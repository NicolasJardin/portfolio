import { Typography, styled } from '@mui/material'
import WaterText from 'modules/animation/components/WaterText'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled('header', { name: 'HeaderContainer' })(({ theme }) => ({
  width: '100%',
  height: 60,
  alignItems: 'center',
  background: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
}))

const LinkStyled = styled(Link, {
  name: 'LinkStyled'
})(({ theme }) => ({
  justifySelf: 'center',
  color: theme.palette.primary.light,
  textDecoration: 'none',

  '&:hover': {
    color: theme.palette.primary.main,
    textDecoration: 'underline'
  }
}))

const Header: FC = () => {
  const { t } = useTranslation()

  return (
    <HeaderContainer>
      <LinkStyled to="/">{t('Sobre mim')}</LinkStyled>
      <LinkStyled to="/">{t('Formações')}</LinkStyled>
      <LinkStyled to="/">
        <WaterText text={<Typography variant="h4">NJ</Typography>} />
      </LinkStyled>
      <LinkStyled to="/skill">{t('Habilidades')}</LinkStyled>
      <LinkStyled to="/project">{t('Projetos')}</LinkStyled>
    </HeaderContainer>
  )
}

export default Header
