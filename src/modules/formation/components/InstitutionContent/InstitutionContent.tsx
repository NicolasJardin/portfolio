import { ArrowBack, OpenInNew } from '@mui/icons-material'
import { Button, List, ListItem, Stack, styled, Typography } from '@mui/material'
import moment from 'moment'
import 'moment/locale/pt-br'
import { Dispatch, SetStateAction, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { CSSTransition, TransitionStatus } from 'react-transition-group'
import useGetFormations from 'services/formation/queries/useGetFormations'
import { FormationInstitutionEnum } from 'types/enums/formation/FormationInstitutionEnum'

moment.locale('pt-br')

type InstitutionContentProps = {
  selectedInstitution: [
    FormationInstitutionEnum | undefined,
    Dispatch<SetStateAction<FormationInstitutionEnum | undefined>>
  ]
}

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

const InstitutionContentRoot = styled('div', {
  name: 'InstitutionContentRoot'
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

    '&:not(:first-of-type)': {
      marginTop: 20
    }
  }
})

const ButtonCertificate = styled(Button, {
  name: 'ButtonCertificate'
})({
  alignSelf: 'flex-start'
})

export default function InstitutionContent({
  selectedInstitution: [selectedInstitution, setSelectedInstitution]
}: InstitutionContentProps) {
  const { t } = useTranslation()

  const { data: formations } = useGetFormations()

  const contentRef = useRef(null)

  const selectedInstitutionFormations = useMemo(
    () => formations?.filter(({ institution }) => institution === selectedInstitution),
    [formations, selectedInstitution]
  )

  const title = useMemo(() => {
    if (selectedInstitution === FormationInstitutionEnum.ALURA)
      return t('Cursos online de tecnologia Alura')

    return t('Escolas e Faculdades QI')
  }, [selectedInstitution, t])

  return (
    <CSSTransition timeout={300} in={!!selectedInstitution} nodeRef={contentRef}>
      {state => (
        <InstitutionContentRoot
          state={state}
          hasInstitution={!!selectedInstitution}
          ref={contentRef}
        >
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
        </InstitutionContentRoot>
      )}
    </CSSTransition>
  )
}
