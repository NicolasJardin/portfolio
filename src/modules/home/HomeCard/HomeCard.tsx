import { styled, Typography } from '@mui/material'
import WaterText from 'modules/animation/components/WaterText'
import { FadeIn } from 'modules/animation/keyframes/FadeIn'
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

const Name = styled('div', {
  name: 'Name',
  slot: 'Info'
})({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export default function HomeCard(props: HomeCardProps) {
  const { t } = useTranslation()

  return (
    <HomeCardRoot>
      <Name>
        <WaterText text={<Typography variant="h1">Nicolas Jardin</Typography>} />
      </Name>
      {/* <Typography>Desenvolvedor Front-end</Typography>
      <Typography>Linkedin</Typography>
      <Typography>Github</Typography> */}
    </HomeCardRoot>
  )
}
