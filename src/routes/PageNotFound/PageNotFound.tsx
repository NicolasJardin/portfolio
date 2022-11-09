import Page from 'modules/layout/components/Page'
import { useNavigate } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const PageNotFound = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <Page>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Typography variant="h2">{t('Ops! Página não encontrada.')}</Typography>
        <Button onClick={() => navigate('/', { replace: true })}>
          {t('Voltar para o início')}
        </Button>
      </Stack>
    </Page>
  )
}

export default PageNotFound
