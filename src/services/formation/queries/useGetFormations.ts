import formations from 'mocks/formation/formations.json'
import { useCallback, useMemo } from 'react'
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { Formation } from 'types/interfaces/formation/Formation'

type Data = Formation[]
type UseGetFormationsOptions = UseQueryOptions<Data>
type UseGetFormationsResult = UseQueryResult<Data>

export default function useGetFormations(
  options?: UseGetFormationsOptions
): UseGetFormationsResult {
  const queryKey = useMemo(() => [['formation']], [])

  const queryFn = useCallback(() => formations as Data, [])

  return useQuery<Data>(queryKey, queryFn, options)
}
