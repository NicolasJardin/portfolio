import { GitHub, LinkedIn } from '@mui/icons-material'
import { Divider, keyframes, styled, Typography } from '@mui/material'
import TypingText from 'modules/animation/components/TypingText'
import WaterText from 'modules/animation/components/WaterText'
import { FadeIn } from 'modules/animation/keyframes/FadeIn'
import Button from 'modules/button/Button'
import ButtonContained from 'modules/button/ButtonContained/ButtonContained'
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
  background: '#0e76a8',
  boxShadow: 'inset 0 0 0 0 #fff',

  '&:hover': {
    background: '#0e76a8',
    boxShadow: 'inset 200px 0 0 0 #fff',
    color: '#0e76a8',
    border: `1px solid #0e76a8`
  }
})

const ButtonContainedGithub = styled(ButtonHomeCard, {
  name: 'ButtonContainedGithub'
})({
  background: '#161B22',
  boxShadow: 'inset 0 0 0 0 #fff',

  '&:hover': {
    background: '#161B22',
    boxShadow: 'inset 200px 0 0 0 #fff',
    color: '#161B22',
    border: `1px solid #161B22`
  }
})

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
            Github
          </ButtonContainedGithub>
        </ButtonContent>
      </ButtonsContainer>
    </HomeCardRoot>
  )
}
