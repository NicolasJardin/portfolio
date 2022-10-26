import SkillContext from 'modules/skill/contexts/SkillContext'
import { SkillContextStore } from 'modules/skill/contexts/SkillContext/SkillContext'
import { useContext } from 'react'

export default function useSkillContext() {
  const context = useContext<SkillContextStore | undefined>(SkillContext)

  if (!context) throw new Error('useSkillContext hook must be used inside SkillProvider.')

  return context
}
