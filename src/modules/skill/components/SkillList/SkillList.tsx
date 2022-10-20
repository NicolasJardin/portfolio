import { Card, Grid, styled } from '@mui/material'
import { ReactComponent as CssIcon } from 'assets/svg/css.svg'
import { ReactComponent as GitIcon } from 'assets/svg/git.svg'
import { ReactComponent as HtmlIcon } from 'assets/svg/html.svg'
import { ReactComponent as JavascriptIcon } from 'assets/svg/javascript.svg'
import { ReactComponent as ReactQueryIcon } from 'assets/svg/react-query.svg'
import { ReactComponent as ReactIcon } from 'assets/svg/react.svg'
import { ReactComponent as StyledComponentsIcon } from 'assets/svg/styled-components.svg'
import { ReactComponent as ReduxIcon } from 'assets/svg/redux.svg'
import { ReactComponent as MaterialUiIcon } from 'assets/svg/material-ui.svg'
import { ReactComponent as SassIcon } from 'assets/svg/sass.svg'
import { useMemo } from 'react'

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
  const skills = useMemo(
    () => [
      <HtmlIcon />,
      <CssIcon />,
      <JavascriptIcon />,
      <GitIcon />,
      <ReactIcon />,
      <MaterialUiIcon />,
      <ReactQueryIcon />,
      <ReduxIcon />,
      <StyledComponentsIcon />,
      <SassIcon />
    ],
    []
  )

  return (
    <SkillListRoot>
      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid key={index} item xs={4}>
            <Skill>{skill}</Skill>
          </Grid>
        ))}
      </Grid>
    </SkillListRoot>
  )
}
