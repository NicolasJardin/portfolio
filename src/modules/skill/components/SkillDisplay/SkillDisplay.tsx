import { Button, Card, CardActions, CardContent, Stack, styled, Typography } from '@mui/material'
import { FadeIn } from 'modules/animation/keyframes/FadeIn'
import { FadeOut } from 'modules/animation/keyframes/FadeOut'
import useSkillContext from 'modules/skill/hooks/useSkillContext'
import { Fragment, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { CSSTransition } from 'react-transition-group'
import { SkillTypeEnumLabel } from 'types/enums/skill/SkillTypeEnum'

const SkillDisplayRoot = styled(Card, {
  name: 'SkillDisplay',
  slot: 'Root'
})<{ selected: boolean }>(({ theme, selected }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  visibility: selected ? 'visible' : 'hidden',
  animation: `${selected ? FadeIn : FadeOut} 0.3s linear`,
  transition: 'visibility 0.3s linear'
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

export default function SkillDisplay() {
  const { selectedSkill, getSkillIcon, clearSelectedSkill } = useSkillContext()

  const { t } = useTranslation()

  const ref = useRef(null)

  return (
    <CSSTransition timeout={300} unmountOnExit in={!!selectedSkill} nodeRef={ref}>
      <SkillDisplayRoot selected={!!selectedSkill} ref={ref}>
        {!!selectedSkill && (
          <Fragment>
            <CardContentStyled>
              <TitleAndIcon direction="row" spacing={2}>
                {getSkillIcon(selectedSkill.type)}

                <Typography variant="h4" fontWeight="bold">
                  {SkillTypeEnumLabel[selectedSkill.type]}
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
          </Fragment>
        )}
      </SkillDisplayRoot>
    </CSSTransition>
  )
}
