import { Card, Grid, styled } from '@mui/material'
import useSkillContext from 'modules/skill/hooks/useSkillContext'

type SkillListProps = {}

const SkillListRoot = styled('div', {
  name: 'SkillList',
  slot: 'Root'
})({})

const Skill = styled(Card, {
  name: 'Skill'
})<{ selected: boolean }>(({ theme, selected }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 100,
  cursor: 'pointer',
  transition: theme.transitions.create(['background-color', 'transform']),
  backgroundColor: selected ? theme.palette.primary.dark : '',

  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  },

  '> svg': {
    height: 50,
    width: 50
  }
}))

export default function SkillList(props: SkillListProps) {
  const { skills, selectSkill, getSkillIcon, clearSelectedSkill, selectedSkill } = useSkillContext()

  return (
    <SkillListRoot>
      <Grid container spacing={2}>
        {skills?.map((skill, index) => (
          <Grid key={index} item xs={4}>
            <Skill
              selected={skill.type === selectedSkill?.type}
              onMouseLeave={() => clearSelectedSkill()}
              onMouseEnter={() => selectSkill(index)}
              onClick={() => selectSkill(index, true)}
            >
              {getSkillIcon(skill.type)}
            </Skill>
          </Grid>
        ))}
      </Grid>
    </SkillListRoot>
  )
}
