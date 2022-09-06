import Link from 'modules/link/Link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { HeaderContainer, LeftContent, Name, RightContent, WaveContainer, WaveIcon } from './Styles'

const Header: FC = () => {
  const { t } = useTranslation()

  return (
    <HeaderContainer>
      <WaveContainer>
        <WaveIcon />
      </WaveContainer>

      <LeftContent>
        <Name>Nicolas</Name>
      </LeftContent>
      <RightContent>
        <Link href="#">{t('Inicio')}</Link>
        <Link>{t('Sobre mim')}</Link>
        <Link>{t('Projetos')}</Link>
        <Link>{t('Habilidades')}</Link>
      </RightContent>
    </HeaderContainer>
  )
}

export default Header
