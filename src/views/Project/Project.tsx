import { styled } from '@mui/material'

type ProjectProps = {}

const ProjectRoot = styled('div', {
  name: 'Project',
  slot: 'Root'
})({})

export default function Project(props: ProjectProps) {
  return <ProjectRoot>Project</ProjectRoot>
}
