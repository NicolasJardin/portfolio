import { createContext } from 'react'

export type SkillContextStore = {}

const SkillContext = createContext<SkillContextStore | undefined>(undefined)

export default SkillContext
