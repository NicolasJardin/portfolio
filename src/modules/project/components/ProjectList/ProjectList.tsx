import { Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ProjectCard from '../ProjectCard'
import letmeaskImage from 'assets/img/letmeask.png'
import petwayImage from 'assets/img/petway.png'
import workstationImage from 'assets/img/workstation.png'

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
        <ProjectCard
          project={{
            title: 'Petway',
            description: t(
              'Projeto desenvolvido como projeto final da faculdade de Sistemas para Internet'
            ),
            image: petwayImage,
            url: 'https://github.com/NicolasJardin/petway'
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <ProjectCard
          isHighlighted
          project={{
            title: 'Workstation',
            description: t(
              'Pomodoro com foco na personalização e customização - Projeto pessoal em desenvolvimento'
            ),
            image: workstationImage,
            url: 'https://workstation-gray.vercel.app/'
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
    </Grid>
  )
}
