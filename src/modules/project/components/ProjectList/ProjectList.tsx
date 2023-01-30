import { Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ProjectCard from '../ProjectCard'
import letmeaskImage from 'assets/img/letmeask.png'

type ProjectListProps = {}

export default function ProjectList(props: ProjectListProps) {
  const { t } = useTranslation()

  return (
    <Grid container spacing={6}>
      <Grid item xs={4}>
        <ProjectCard
          project={{
            title: 'Letmeask',
            description: t('Projeto desenvolvido durante a Next Level Week Together'),
            image: letmeaskImage,
            url: 'https://letmeask-68024.web.app/'
          }}
        />
      </Grid>

      <Grid item xs={4}>
        <ProjectCard />
      </Grid>
      <Grid item xs={4}>
        <ProjectCard />
      </Grid>

      <Grid item xs={4}>
        <ProjectCard />
      </Grid>

      <Grid item xs={4}>
        <ProjectCard />
      </Grid>

      <Grid item xs={4}>
        <ProjectCard />
      </Grid>
    </Grid>
  )
}
