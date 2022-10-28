import InstitutionContent from 'modules/formation/components/InstitutionContent'
import InstitutionOptions from 'modules/formation/components/InstitutionOptions/InstitutionOptions'
import Page from 'modules/layout/components/Page'
import { useState } from 'react'
import { FormationInstitutionEnum } from 'types/enums/formation/FormationInstitutionEnum'

export default function Formation() {
  const [selectedInstitution, setSelectedInstitution] = useState<FormationInstitutionEnum>()

  return (
    <Page>
      <InstitutionOptions selectedInstitution={[selectedInstitution, setSelectedInstitution]} />

      <InstitutionContent selectedInstitution={[selectedInstitution, setSelectedInstitution]} />
    </Page>
  )
}
