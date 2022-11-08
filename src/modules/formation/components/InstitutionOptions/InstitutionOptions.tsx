import { Avatar, Stack, styled } from '@mui/material'
import alura from 'assets/img/alura.png'
import qi from 'assets/img/qi.png'
import { Dispatch, SetStateAction, useRef } from 'react'
import { CSSTransition, TransitionStatus } from 'react-transition-group'
import { FormationInstitutionEnum } from 'types/enums/formation/FormationInstitutionEnum'

type InstitutionOptionsProps = {
  selectedInstitution: [
    FormationInstitutionEnum | undefined,
    Dispatch<SetStateAction<FormationInstitutionEnum | undefined>>
  ]
}

const StackWithTransition = styled(Stack, {
  name: 'StackWithTransition'
})<{ state: TransitionStatus }>(({ state, theme }) => ({
  transition: theme.transitions.create('opacity'),
  opacity: state === 'entered' ? 1 : 0
}))

const Image = styled(Avatar, {
  name: 'Image'
})(({ theme }) => ({
  height: 120,
  width: 120,
  transition: theme.transitions.create(['transform', 'border']),
  cursor: 'pointer',

  '&:hover': {
    transform: 'scale(1.1)',
    border: `2px solid ${theme.palette.primary.main}`
  }
}))

export default function InstitutionOptions({
  selectedInstitution: [selectedInstitution, setSelectedInstitution]
}: InstitutionOptionsProps) {
  const optionsRef = useRef(null)

  return (
    <CSSTransition unmountOnExit timeout={300} in={!selectedInstitution} nodeRef={optionsRef}>
      {state => (
        <StackWithTransition
          state={state}
          ref={optionsRef}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Image
            src={qi}
            alt="QI"
            onClick={() => setSelectedInstitution(FormationInstitutionEnum.QI)}
          />
          <Image
            src={alura}
            alt="Alura"
            onClick={() => setSelectedInstitution(FormationInstitutionEnum.ALURA)}
          />
        </StackWithTransition>
      )}
    </CSSTransition>
  )
}
