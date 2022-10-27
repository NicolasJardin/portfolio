import { ArrowBack, OpenInNew } from '@mui/icons-material'
import { Avatar, Button, List, ListItem, Stack, styled, Typography } from '@mui/material'
import alura from 'assets/png/alura.png'
import qi from 'assets/png/qi.png'
import Page from 'modules/layout/components/Page'
import moment from 'moment'
import 'moment/locale/pt-br'
import { useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CSSTransition, TransitionStatus } from 'react-transition-group'
import { FormationTypeEnum } from 'types/enums/formation/FormationTypeEnum'
import useGetFormations from '../../services/formation/queries/useGetFormations'

moment.locale('pt-br')

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

const InstitutionContent = styled('div', {
  name: 'InstitutionContent'
})<{ hasInstitution: boolean; state: TransitionStatus }>(({ hasInstitution, state, theme }) => ({
  display: !hasInstitution ? 'none' : 'flex',
  transition: theme.transitions.create('opacity'),
  opacity: state === 'entered' ? 1 : 0,
  flexDirection: 'column',
  gap: 30
}))

const BulletedList = styled(List, {
  name: 'BulletedList'
})({
  listStyleType: 'disc',
  pl: 2,
  '& .MuiListItem-root': {
    display: 'list-item',

    '&:not(:first-child)': {
      marginTop: 20
    }
  }
})

const ButtonCertificate = styled(Button, {
  name: 'ButtonCertificate'
})({
  alignSelf: 'flex-start'
})

export default function Formation() {
  const { t } = useTranslation()

  const { data: formations } = useGetFormations()

  const [selectedInstitution, setSelectedInstitution] = useState<FormationTypeEnum>()

  const contentRef = useRef(null)
  const optionsRef = useRef(null)

  const selectedInstitutionFormations = useMemo(
    () => formations?.filter(({ type }) => type === selectedInstitution),
    [formations, selectedInstitution]
  )

  const title = useMemo(() => {
    if (selectedInstitution === FormationTypeEnum.ALURA)
      return t('Cursos online de tecnologia Alura')

    return t('Escolas e Faculdades QI')
  }, [selectedInstitution, t])

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
            <Image src={qi} alt="QI" onClick={() => setSelectedInstitution(FormationTypeEnum.QI)} />
            <Image
              src={alura}
              alt="Alura"
              onClick={() => setSelectedInstitution(FormationTypeEnum.ALURA)}
            />
          </StackWithTransition>
        )}
      </CSSTransition>

      <CSSTransition timeout={300} in={!!selectedInstitution} nodeRef={contentRef}>
        {state => (
          <InstitutionContent state={state} hasInstitution={!!selectedInstitution} ref={contentRef}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Icon onClick={() => setSelectedInstitution(undefined)}>
                <ArrowBackIcon />
              </Icon>
              <Typography variant="h4">{title}</Typography>
            </Stack>

            <BulletedList>
              {selectedInstitutionFormations?.map((formation, index) => (
                <ListItem key={index}>
                  <Stack spacing={1} maxWidth={500}>
                    <Typography fontWeight="bold">{t(formation.title)}</Typography>

                    <Typography variant="caption" color="text.disabled">
                      {t('formationDate', {
                        formattedDate: moment(formation.completionDate).locale('pt-br').format('LL')
                      })}
                    </Typography>

                    <Typography variant="body2">{t(formation.description)}</Typography>

                    {!!formation.url && (
                      <ButtonCertificate
                        onClick={() => window.open(formation.url, '_blank')}
                        startIcon={<OpenInNew />}
                      >
                        {t('Abrir certificado')}
                      </ButtonCertificate>
                    )}
                  </Stack>
                </ListItem>
              ))}
            </BulletedList>
          </InstitutionContent>
        )}
      </CSSTransition>
    </Page>
  )
}
