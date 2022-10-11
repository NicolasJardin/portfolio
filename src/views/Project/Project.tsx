import { styled } from '@mui/material'
import Page from 'modules/layout/components/Page'
import ProjectList from 'modules/project/components/ProjectList'

type ProjectProps = {}

const ProjectRoot = styled(Page, {
  name: 'Project',
  slot: 'Root'
})({
  padding: 50
})

export default function Project(props: ProjectProps) {
  return (
    <ProjectRoot>
      <ProjectList />
    </ProjectRoot>
  )
}
