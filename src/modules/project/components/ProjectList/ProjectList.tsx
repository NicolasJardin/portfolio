import { Grid } from '@mui/material'
import ProjectCard from '../ProjectCard'

type ProjectListProps = {}

export default function ProjectList(props: ProjectListProps) {
  return (
    <Grid container spacing={6}>
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

      <Grid item xs={4}>
        <ProjectCard />
      </Grid>
    </Grid>
  )
}
