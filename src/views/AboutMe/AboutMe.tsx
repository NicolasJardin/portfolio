import { Avatar, Button, Stack, styled, Typography } from '@mui/material'
import TypingText from 'modules/animation/components/TypingText'
import { FadeIn } from 'modules/animation/keyframes/FadeIn'
import ChatBox from 'modules/display/components/ChatBox'
import ContentWillAppear from 'modules/display/components/ContentWillAppear'
import Page from 'modules/layout/components/Page'
import { useTranslation } from 'react-i18next'
import useGetAboutMeMessages from 'services/aboutMe/queries/useGetAboutMeMessages'
import { useMemo, useState, useCallback } from 'react'

const AboutMeAvatar = styled(Avatar, {
  name: 'AboutMeAvatar'
})({
  height: 150,
  width: 150
})

const AboutMeRoot = styled(Page, {
  name: 'AboutMeRoot',
  slot: 'Root'
})({
  display: 'flex',
  flexDirection: 'column',
  gap: 40
})

const ChatBoxWithButton = styled(ChatBox, {
  name: 'ChatBoxWithButton'
})({
  justifyContent: 'space-between',
  minHeight: 80
})

const ChatBoxButton = styled(Button, {
  name: 'ChatBoxButton'
})({
  animation: `${FadeIn} 2s ease`
})

export default function AboutMe() {
  const { t } = useTranslation()

  const { data: messages } = useGetAboutMeMessages()

  const [step, setStep] = useState<number>(0)

  const chatMessages = useMemo(
    () => messages?.filter((message, index) => index <= step),
    [messages, step]
  )

  const nextStep = useCallback(() => setStep(prevValue => prevValue + 1), [])

  return (
    <AboutMeRoot>
      <Stack direction="row" spacing={5}>
        <AboutMeAvatar />

        <Stack spacing={1}>
          <Typography variant="h3" fontWeight="bold">
            Nicolas Jardin dos Santos
          </Typography>

          <Typography variant="h4" color="primary.main">
            Desenvolvedor Front-end
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={4}>
        {chatMessages?.map((message, index) => (
          <ChatBoxWithButton key={index}>
            <TypingText
              animation={{
                disabled: index < step,
                steps: 100,
                time: 5
              }}
            >
              {t(message.content)}
            </TypingText>

            {step === index && (
              <ContentWillAppear delay={6000}>
                <ChatBoxButton onClick={nextStep} variant="outlined">
                  {t(`${message.answer || 'Próximo'}`)}
                </ChatBoxButton>
              </ContentWillAppear>
            )}
          </ChatBoxWithButton>
        ))}
      </Stack>
    </AboutMeRoot>
  )
}
