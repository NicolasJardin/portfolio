import { Card, CardContent, styled } from '@mui/material'
import ColorText from 'modules/animation/components/ColorText/ColorText'
import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

//TODO tipar project
type ProjectCardProps = {
  project?: any
}

const ProjectCardRoot = styled(Card, {
  name: 'ProjectCard',
  slot: 'Root'
})({
  height: 300
})

const CardContentWithoutProject = styled(CardContent, {
  name: 'CardContentWithoutProject'
})({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: 0
})

const SoonContent = styled('div', {
  name: 'SoonContent'
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
  width: '100%',
  background: theme.palette.primary.main
}))

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <ProjectCardRoot>
      {project ? (
        <Fragment>TODO</Fragment>
      ) : (
        <CardContentWithoutProject>
          <SoonContent>
            <ColorText>{t('Em breve')}</ColorText>
          </SoonContent>
        </CardContentWithoutProject>
      )}
    </ProjectCardRoot>
  )
}
