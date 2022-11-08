import { Avatar, Button, Stack, styled, Typography } from '@mui/material'
import TypingText from 'modules/animation/components/TypingText'
import { FadeIn } from 'modules/animation/keyframes/FadeIn'
import ChatBox from 'modules/display/components/ChatBox'
import ContentWillAppear from 'modules/display/components/ContentWillRender'
import SocialMediaList from 'modules/display/components/SocialMediaList'
import Page from 'modules/layout/components/Page'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import useGetAboutMeMessages from 'services/aboutMe/queries/useGetAboutMeMessages'
import photo from 'assets/img/photo.jpeg'

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
    () => messages?.filter((_, index) => index <= step),
    [messages, step]
  )

  const nextStep = useCallback(() => setStep(prevValue => prevValue + 1), [])

  const lastMessageIndex = useMemo(() => (messages?.length ? messages.length - 1 : 0), [messages])

  return (
    <AboutMeRoot>
      <Stack direction="row" spacing={5}>
        <AboutMeAvatar src={photo} />

        <Stack spacing={1}>
          <Typography variant="h3" fontWeight="bold">
            Nicolas Jardin dos Santos
          </Typography>

          <Typography variant="h4" color="primary.main">
            {t('Desenvolvedor Front-end')}
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={2}>
        {chatMessages?.map((message, index) => (
          <ChatBoxWithButton key={index} firstMessage={index === 0}>
            <TypingText
              variant="body2"
              animation={{
                disabled: index < step,
                steps: 100,
                time: 4
              }}
            >
              {t(message.content)}
            </TypingText>

            {step === index && (
              <ContentWillAppear delay={4000}>
                {lastMessageIndex > index ? (
                  <ChatBoxButton onClick={nextStep} variant="outlined">
                    {t(`${message.answer || 'Próximo'}`)}
                  </ChatBoxButton>
                ) : (
                  <SocialMediaList direction="row" spacing={2} />
                )}
              </ContentWillAppear>
            )}
          </ChatBoxWithButton>
        ))}
      </Stack>
    </AboutMeRoot>
  )
}
