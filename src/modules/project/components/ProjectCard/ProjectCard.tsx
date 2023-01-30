import { Card, CardContent, Stack, styled, Typography } from '@mui/material'
import ColorText from 'modules/animation/components/ColorText/ColorText'
import { useTranslation } from 'react-i18next'

type ProjectCardProps = {
  project?: {
    title: string
    description: string
    image: string
    url?: string
  }
}

const ProjectCardRoot = styled(Card, {
  name: 'ProjectCard',
  slot: 'Root'
})<{ hasUrl: boolean }>(({ theme, hasUrl }) => ({
  transition: theme.transitions.create('transform'),
  height: 300,
  cursor: hasUrl ? 'pointer' : '',

  '&:hover': {
    transform: 'scale(1.02)'
  }
}))

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

const Image = styled('img', { name: 'Image' })({
  width: '100%',
  height: '60%',
  objectFit: 'cover'
})

const Title = styled('div', {
  name: 'Title'
})(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: '100%'
}))

const ProjectContent = styled(Stack, {
  name: 'ProjectContent'
})({
  height: '100%',
  textAlign: 'center'
})

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <ProjectCardRoot
      hasUrl={!!project?.url}
      onClick={() => !!project?.url && window.open(project.url)}
    >
      {project ? (
        <ProjectContent>
          <Image src={project.image} alt="project" />

          <Stack gap={1}>
            <Title>
              <Typography variant="h6">{project.title}</Typography>
            </Title>

            <Typography variant="subtitle1" sx={{ padding: 0.5 }}>
              {project.description}
            </Typography>
          </Stack>
        </ProjectContent>
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
