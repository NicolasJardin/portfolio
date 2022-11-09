import skills from 'mocks/skill/skills.json'
import { useCallback, useMemo } from 'react'
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { Skill } from 'types/interfaces/skill/Skill'

type Data = Skill[]
type UseGetSkillsOptions = UseQueryOptions<Data>
type UseGetSkillsResult = UseQueryResult<Data>

export default function useGetSkills(options?: UseGetSkillsOptions): UseGetSkillsResult {
  const queryKey = useMemo(() => ['skills'], [])

  const queryFn = useCallback(() => skills as Data, [])

  return useQuery<Data>(queryKey, queryFn, options)
}
