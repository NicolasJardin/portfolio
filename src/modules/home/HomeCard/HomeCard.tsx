import { styled, Typography } from '@mui/material'
import TypingText from 'modules/animation/components/TypingText'
import WaterText from 'modules/animation/components/WaterText'
import { FadeIn } from 'modules/animation/keyframes/FadeIn'
import FlexCenter from 'modules/styles/FlexCenter'
import { useTranslation } from 'react-i18next'

type HomeCardProps = {}

const HomeCardRoot = styled('div', {
  name: 'HomeCard',
  slot: 'Root'
})(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  padding: '20px 30px',
  height: 400,
  width: 700,
  boxShadow: '6px 13px 23px 7px rgba(0,0,0,0.43)',
  borderRadius: 3,
  animation: `${FadeIn} 2s ease`
}))

export default function HomeCard(props: HomeCardProps) {
  const { t } = useTranslation()

  return (
    <HomeCardRoot>
      <FlexCenter>
        <WaterText text={<Typography variant="h1">Nicolas Jardin</Typography>} />
      </FlexCenter>

      <FlexCenter>
        <TypingText variant="h5" maxWidth={350}>
          {t('Desenvoldedor Front-end')}
        </TypingText>
      </FlexCenter>

      <Typography>Linkedin</Typography>
      <Typography>Github</Typography>
    </HomeCardRoot>
  )
}
