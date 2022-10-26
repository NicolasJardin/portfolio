import { Container, Divider, styled } from '@mui/material'
import Page from 'modules/layout/components/Page'
import SkillDisplay from 'modules/skill/components/SkillDisplay'
import SkillList from 'modules/skill/components/SkillList'
import SkillProvider from 'modules/skill/providers/SkillProvider'

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
    <SkillProvider>
      <SkillRoot>
        <SkillContainer>
          <SkillList />

          <Divider orientation="vertical" flexItem />

          <SkillDisplay />
        </SkillContainer>
      </SkillRoot>
    </SkillProvider>
  )
}
