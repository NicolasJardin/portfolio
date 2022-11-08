import { GitHub, LinkedIn } from '@mui/icons-material'
import { Card, CardContent, Divider, styled, Typography } from '@mui/material'
import TypingText from 'modules/animation/components/TypingText'
import WaterText from 'modules/animation/components/WaterText'
import { FadeIn } from 'modules/animation/keyframes/FadeIn'
import ButtonContained from 'modules/button/ButtonContained/ButtonContained'
import { useTranslation } from 'react-i18next'

type HomeCardProps = {}

const HomeCardRoot = styled(Card, {
  name: 'HomeCard',
  slot: 'Root'
})(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  padding: '20px 30px',
  height: 400,
  width: 700,
  animation: `${FadeIn} 2s ease`
}))

const ButtonsContainer = styled('div', {
  name: 'ButtonsContainer'
})({
  display: 'grid',
  gridTemplateColumns: '1fr 2px 1fr',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50%'
})

const ButtonContent = styled('div', {
  name: 'ButtonContent'
})({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const DividerWithMargin = styled(Divider, {
  name: 'DividerWithMargin'
})({
  margin: '20px 0'
})

const ButtonHomeCard = styled(ButtonContained, {
  name: 'ButtonHomeCard'
})({
  height: 60,
  width: 200,
  fontSize: '20px',
  transition: `ease-out 0.3s`
})

const ButtonContainedLinkedin = styled(ButtonHomeCard, {
  name: 'ButtonContainedLinkedin'
})({
  boxShadow: 'inset 0 0 0 0 #fff',

  '&:hover': {
    boxShadow: 'inset 200px 0 0 0 #fff',
    color: '#0e76a8',
    border: `1px solid #0e76a8`
  }
})

const ButtonContainedGithub = styled(ButtonHomeCard, {
  name: 'ButtonContainedGithub'
})({
  boxShadow: 'inset 0 0 0 0 #fff',
  '&:hover': {
    boxShadow: 'inset 200px 0 0 0 #fff',
    color: '#161B22',
    border: `1px solid #161B22`
  }
})

const FlexCenter = styled('div', {
  name: 'FlexCenter',
  slot: 'Root'
})({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export default function HomeCard(props: HomeCardProps) {
  const { t } = useTranslation()

  return (
    <HomeCardRoot variant="outlined">
      <CardContent sx={{ height: '100%' }}>
        <FlexCenter>
          <WaterText text={<Typography variant="h1">Nicolas Jardin</Typography>} />
        </FlexCenter>

        <FlexCenter>
          <TypingText
            animation={{
              steps: 40,
              time: 3.5
            }}
            variant="h5"
          >
            {t('Desenvolvedor Front-end')}
          </TypingText>
        </FlexCenter>

        <DividerWithMargin />

        <ButtonsContainer>
          <ButtonContent>
            <ButtonContainedLinkedin
              onClick={() => window.open('https://www.linkedin.com/in/jardin-nicolas/')}
              startIcon={<LinkedIn />}
            >
              <Typography variant="h6">Linkedin</Typography>
            </ButtonContainedLinkedin>
          </ButtonContent>

          <Divider orientation="vertical" />

          <ButtonContent>
            <ButtonContainedGithub
              onClick={() => window.open('https://github.com/NicolasJardin')}
              startIcon={<GitHub />}
            >
              <Typography variant="h6">GITHUB</Typography>
            </ButtonContainedGithub>
          </ButtonContent>
        </ButtonsContainer>
      </CardContent>
    </HomeCardRoot>
  )
}
