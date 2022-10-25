import SkillContext from 'modules/skill/contexts/SkillContext'
import { SkillContextStore } from 'modules/skill/contexts/SkillContext/SkillContext'
import { useContext } from 'react'

export default function useSkillContext() {
  return useContext<SkillContextStore | undefined>(SkillContext)
}
