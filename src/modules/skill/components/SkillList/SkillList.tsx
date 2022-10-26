import { Card, Grid, styled } from '@mui/material'
import useSkillContext from 'modules/skill/hooks/useSkillContext'

type SkillListProps = {}

const SkillListRoot = styled('div', {
  name: 'SkillList',
  slot: 'Root'
})({})

const Skill = styled(Card, {
  name: 'Skill'
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 100,
  cursor: 'pointer',
  transition: theme.transitions.create(['background-color', 'transform']),

  '&:hover': {
    backgroundColor: theme.palette.primary.main
  },

  '> svg': {
    height: 50,
    width: 50
  }
}))

export default function SkillList(props: SkillListProps) {
  const { skills, selectSkill, getSkillIcon } = useSkillContext()

  return (
    <SkillListRoot>
      <Grid container spacing={2}>
        {skills?.map((skill, index) => (
          <Grid key={index} item xs={4}>
            <Skill onClick={() => selectSkill(index)}>{getSkillIcon(skill.type)}</Skill>
          </Grid>
        ))}
      </Grid>
    </SkillListRoot>
  )
}
