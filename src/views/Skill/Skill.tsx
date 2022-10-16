import { styled, Container } from '@mui/material'
import Page from 'modules/layout/components/Page'

type SkillProps = {}

const SkillRoot = styled(Page, {
  name: 'Skill',
  slot: 'Root'
})({})

const SkillContainer = styled(Container, {
  name: 'SkillContainer'
})({
  padding: '50px 0'
})

export default function Skill(props: SkillProps) {
  return (
    <SkillRoot>
      <SkillContainer></SkillContainer>
    </SkillRoot>
  )
}
