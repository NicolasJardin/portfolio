import { ArrowBack } from '@mui/icons-material'
import { Stack, styled, Typography } from '@mui/material'
import alura from 'assets/png/alura.png'
import qi from 'assets/png/qi.png'
import Page from 'modules/layout/components/Page'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CSSTransition, TransitionStatus } from 'react-transition-group'

const Image = styled('img', {
  name: 'Image'
})(({ theme }) => ({
  height: 120,
  width: 120,
  objectFit: 'cover',
  borderRadius: 100,
  transition: theme.transitions.create(['transform', 'border']),
  cursor: 'pointer',

  '&:hover': {
    transform: 'scale(1.1)',
    border: `2px solid ${theme.palette.primary.main}`
  }
}))

const Icon = styled('div', {
  name: 'Icon'
})({
  cursor: 'pointer'
})

const ArrowBackIcon = styled(ArrowBack, {
  name: 'ArrowBackIcon'
})(({ theme }) => ({
  transition: theme.transitions.create(['color', 'transform']),

  '&:hover': {
    transform: 'translateX(-2px)',
    color: theme.palette.primary.light
  }
}))

const StackWithTransition = styled(Stack, {
  name: 'StackWithTransition'
})<{ state: TransitionStatus }>(({ state, theme }) => ({
  transition: theme.transitions.create('opacity'),
  opacity: state === 'entered' ? 1 : 0
}))

type Institution = 'qi' | 'alura'

export default function Formation() {
  const { t } = useTranslation()

  const [selectedInstitution, setSelectedInstitution] = useState<Institution>()

  const contentRef = useRef(null)
  const optionsRef = useRef(null)

  return (
    <Page>
      <CSSTransition unmountOnExit timeout={300} in={!selectedInstitution} nodeRef={optionsRef}>
        {state => (
          <StackWithTransition
            state={state}
            ref={optionsRef}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Image src={qi} alt="QI" onClick={() => setSelectedInstitution('qi')} />
            <Image src={alura} alt="Alura" onClick={() => setSelectedInstitution('alura')} />
          </StackWithTransition>
        )}
      </CSSTransition>

      <CSSTransition timeout={300} in={!!selectedInstitution} nodeRef={contentRef}>
        {state => (
          <StackWithTransition
            style={{ display: !selectedInstitution ? 'none' : '' }}
            ref={contentRef}
            state={state}
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Icon onClick={() => setSelectedInstitution(undefined)}>
              <ArrowBackIcon />
            </Icon>
            <Typography variant="h4">{t('Escolas e Faculdades QI')}</Typography>
          </StackWithTransition>
        )}
      </CSSTransition>
    </Page>
  )
}
