import { Button, Card, CardActions, CardContent, Stack, styled, Typography } from '@mui/material'
import useSkillContext from 'modules/skill/hooks/useSkillContext'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { CSSTransition, TransitionStatus } from 'react-transition-group'

type SkillDisplayProps = {}

const SkillDisplayRoot = styled(Card, {
  name: 'SkillDisplay',
  slot: 'Root'
})<{ state: TransitionStatus }>(({ theme, state }) => ({
  flexDirection: 'column',
  justifyContent: 'space-between',
  opacity: state === 'entered' ? 1 : 0,
  transition: theme.transitions.create(['opacity', 'display'])
}))

const TitleAndIcon = styled(Stack, {
  name: 'TitleAndIcon'
})({
  alignItems: 'center',
  justifyContent: 'center',

  '> svg': {
    width: 50,
    height: 50
  }
})

const CardContentStyled = styled(CardContent, {
  name: 'CardContentStyled'
})({
  display: 'flex',
  flexDirection: 'column',
  padding: 25,
  gap: 50
})

const CardActionsStyled = styled(CardActions, {
  name: 'CardActionsStyled'
})(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderTop: `1px solid ${theme.palette.divider}`
}))

export default function SkillDisplay(props: SkillDisplayProps) {
  const { selectedSkill, getSkillIcon, clearSelectedSkill } = useSkillContext()
  const ref = useRef(null)

  const { t } = useTranslation()

  return (
    <CSSTransition timeout={300} unmountOnExit in={!!selectedSkill} nodeRef={ref}>
      {state =>
        !!selectedSkill && (
          <SkillDisplayRoot state={state} ref={ref}>
            <CardContentStyled>
              <TitleAndIcon direction="row" spacing={2}>
                {getSkillIcon(selectedSkill.type)}

                <Typography variant="h4" fontWeight="bold">
                  {t(selectedSkill.type)}
                </Typography>
              </TitleAndIcon>

              <Typography>{t(selectedSkill.description)}</Typography>
            </CardContentStyled>
            <CardActionsStyled>
              <Button onClick={() => clearSelectedSkill(true)}>{t('Fechar')}</Button>

              <Button onClick={() => window.open(selectedSkill.pageUrl, '_blank')}>
                {t('Visitar página')}
              </Button>
            </CardActionsStyled>
          </SkillDisplayRoot>
        )
      }
    </CSSTransition>
  )
}
