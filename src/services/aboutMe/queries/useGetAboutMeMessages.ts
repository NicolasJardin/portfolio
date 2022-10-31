import aboutMe from 'mocks/aboutMe/about-me.json'
import { useCallback, useMemo } from 'react'
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { Message } from 'types/interfaces/aboutMe/Message'

type Data = Message[]
type useGetAboutMeMessagesOptions = UseQueryOptions<Data>
type useGetAboutMeMessagesResult = UseQueryResult<Data>

export default function useGetAboutMeMessages(
  options?: useGetAboutMeMessagesOptions
): useGetAboutMeMessagesResult {
  const queryKey = useMemo(() => [['about-me']], [])

  const queryFn = useCallback(() => aboutMe as Data, [])

  return useQuery<Data>(queryKey, queryFn, options)
}
