import Link from 'modules/link/Link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { HeaderContainer } from './Styles'

const Header: FC = () => {
  const { t } = useTranslation()

  return (
    <HeaderContainer>
      <Link href="#">{t('Inicio')}</Link>
      <Link>{t('Sobre mim')}</Link>
      <Link>{t('ALGO LEGAL')}</Link>
      <Link>{t('Projetos')}</Link>
      <Link>{t('Habilidades')}</Link>
    </HeaderContainer>
  )
}

export default Header
