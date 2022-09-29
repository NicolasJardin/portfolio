import { Typography, styled } from '@mui/material'
import WaterText from 'modules/animation/components/WaterText'
import Link from 'modules/link/Link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const HeaderContainer = styled('header', { name: 'HeaderContainer' })(({ theme }) => ({
  width: '100%',
  height: 60,
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  background: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`
}))

const Header: FC = () => {
  const { t } = useTranslation()

  return (
    <HeaderContainer>
      <Link href="/">{t('Inicio')}</Link>
      <Link>{t('Sobre mim')}</Link>

      <Link href="/">
        <WaterText text={<Typography variant="h4">NJ</Typography>} />
      </Link>
      <Link href="/project">{t('Projetos')}</Link>
      <Link>{t('Habilidades')}</Link>
    </HeaderContainer>
  )
}

export default Header
