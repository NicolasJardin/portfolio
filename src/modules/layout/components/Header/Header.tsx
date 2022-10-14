import { Typography, styled } from '@mui/material'
import WaterText from 'modules/animation/components/WaterText'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled('header', { name: 'HeaderContainer' })(({ theme }) => ({
  width: '100%',
  height: 60,
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  background: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: 20
}))

const LinkStyled = styled(Link, {
  name: 'LinkStyled'
})(({ theme }) => ({
  color: theme.palette.primary.light,
  textDecoration: 'none',

  '&:hover': {
    color: theme.palette.primary.main,
    textDecoration: 'underline'
  }
}))

//TODO AJUSTAR LINKS
const Header: FC = () => {
  const { t } = useTranslation()

  return (
    <HeaderContainer>
      <LinkStyled to="/">{t('Inicio')}</LinkStyled>
      <LinkStyled to="/">{t('Sobre mim')}</LinkStyled>

      <LinkStyled to="/">
        <WaterText text={<Typography variant="h4">NJ</Typography>} />
      </LinkStyled>
      <LinkStyled to="/project">{t('Projetos')}</LinkStyled>
      <LinkStyled to="/">{t('Habilidades')}</LinkStyled>
    </HeaderContainer>
  )
}

export default Header
