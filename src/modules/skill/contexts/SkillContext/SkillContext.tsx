import { createContext } from 'react'
import { SkillTypeEnum } from 'types/enums/skill/SkillTypeEnum'
import { Skill } from 'types/interfaces/skill/Skill'

export type SkillContextStore = {
  skills: Skill[] | undefined
  selectSkill: (index: number, fixed?: boolean) => void
  selectedSkill: Skill | undefined
  getSkillIcon: (skillType: SkillTypeEnum) => JSX.Element
  clearSelectedSkill: (clearFixed?: boolean) => void
  skillIsFixed: boolean
}

const SkillContext = createContext<SkillContextStore | undefined>(undefined)

export default SkillContext
