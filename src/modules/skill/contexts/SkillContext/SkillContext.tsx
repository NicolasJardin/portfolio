import { createContext } from 'react'
import { SkillTypeEnum } from 'types/enums/skill/SkillTypeEnum'
import { Skill } from 'types/interfaces/skill/Skill'

export type SkillContextStore = {
  skills: Skill[] | undefined
  selectSkill: (index: number) => void
  selectedSkill: Skill | undefined
  getSkillIcon: (skillType: SkillTypeEnum) => JSX.Element
  clearSelectedSkill: () => void
}

const SkillContext = createContext<SkillContextStore | undefined>(undefined)

export default SkillContext
