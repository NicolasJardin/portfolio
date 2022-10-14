import { Container, styled } from '@mui/material'
import Page from 'modules/layout/components/Page'
import ProjectList from 'modules/project/components/ProjectList'

type ProjectProps = {}

const ProjectRoot = styled(Page, {
  name: 'Project',
  slot: 'Root'
})({})

const ProjectContainer = styled(Container, {
  name: 'ProjectContainer'
})({
  padding: '50px 0'
})

export default function Project(props: ProjectProps) {
  return (
    <ProjectRoot>
      <ProjectContainer>
        <ProjectList />
      </ProjectContainer>
    </ProjectRoot>
  )
}
