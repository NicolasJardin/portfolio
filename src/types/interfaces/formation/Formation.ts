import { FormationTypeEnum } from 'types/enums/formation/FormationTypeEnum'

export interface Formation {
  type: FormationTypeEnum
  title: string
  completionDate: string
  description: string
  url?: string
}
