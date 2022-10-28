import { FormationInstitutionEnum } from 'types/enums/formation/FormationInstitutionEnum'

export interface Formation {
  institution: FormationInstitutionEnum
  title: string
  completionDate: string
  description: string
  url?: string
}
