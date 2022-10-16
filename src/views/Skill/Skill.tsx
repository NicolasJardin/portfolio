import { Container, Divider, styled } from '@mui/material'
import Page from 'modules/layout/components/Page'
import SkillList from 'modules/skill/components/SkillList'

type SkillProps = {}

const SkillRoot = styled(Page, {
  name: 'Skill',
  slot: 'Root'
})({})

const SkillContainer = styled(Container, {
  name: 'SkillContainer'
})({
  padding: '50px 0',
  display: 'grid',
  gridTemplateColumns: '1fr 1px 1fr',
  gap: 30
})

export default function Skill(props: SkillProps) {
  return (
    <SkillRoot>
      <SkillContainer>
        <SkillList />

        <Divider orientation="vertical" flexItem />
      </SkillContainer>
    </SkillRoot>
  )
}
