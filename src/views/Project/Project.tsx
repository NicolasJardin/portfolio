import { styled } from '@mui/material'
import Page from 'modules/layout/components/Page'

type ProjectProps = {}

const ProjectRoot = styled(Page, {
  name: 'Project',
  slot: 'Root'
})({})

export default function Project(props: ProjectProps) {
  return <ProjectRoot>Project</ProjectRoot>
}
