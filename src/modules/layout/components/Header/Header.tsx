import { Typography } from '@mui/material'
import WaterText from 'modules/animation/components/WaterText'
import Link from 'modules/link/Link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { HeaderContainer } from './Styles'

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
