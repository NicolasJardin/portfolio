import SkillContext from 'modules/skill/contexts/SkillContext'
import { PropsWithChildren } from 'react'

type SkillProviderProps = {}

export default function SkillProvider({
  children,
  ...props
}: PropsWithChildren<SkillProviderProps>) {
  return <SkillContext.Provider value={{}}>{children}</SkillContext.Provider>
}
