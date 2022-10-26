import { SkillTypeEnum } from 'types/enums/skill/SkillTypeEnum'

export interface Skill {
  type: SkillTypeEnum
  pageUrl: string
  description: string
}
