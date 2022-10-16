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
  return (
    <SkillListRoot>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Skill>
            <HtmlIcon />
          </Skill>
        </Grid>
        <Grid item xs={4}>
          <Skill>
            <CssIcon />
          </Skill>
        </Grid>
        <Grid item xs={4}>
          <Skill>
            <JavascriptIcon />
          </Skill>
        </Grid>
        <Grid item xs={4}>
          <Skill>
            <GitIcon />
          </Skill>
        </Grid>
        <Grid item xs={4}>
          <Skill>
            <ReactIcon />
          </Skill>
        </Grid>
        <Grid item xs={4}>
          <Skill>
            <MaterialUiIcon />
          </Skill>
        </Grid>
        <Grid item xs={4}>
          <Skill>
            <ReactQueryIcon />
          </Skill>
        </Grid>
        <Grid item xs={4}>
          <Skill>
            <ReduxIcon />
          </Skill>
        </Grid>
        <Grid item xs={4}>
          <Skill>
            <StyledComponentsIcon />
          </Skill>
        </Grid>

        <Grid item xs={4}>
          <Skill>
            <SassIcon />
          </Skill>
        </Grid>
      </Grid>
    </SkillListRoot>
  )
}
