import { Button, Card, CardActions, CardContent, Stack, styled, Typography } from '@mui/material'
import { ReactComponent as HtmlIcon } from 'assets/svg/html.svg'

type SkillDisplayProps = {}

const SkillDisplayRoot = styled(Card, {
  name: 'SkillDisplay',
  slot: 'Root'
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}))

const TitleAndIcon = styled(Stack, {
  name: 'TitleAndIcon'
})({
  alignItems: 'center',
  justifyContent: 'center',

  '> svg': {
    width: 50,
    height: 50
  }
})

const CardContentStyled = styled(CardContent, {
  name: 'CardContentStyled'
})({
  display: 'flex',
  flexDirection: 'column',
  padding: 25,
  gap: 50
})

const CardActionsStyled = styled(CardActions, {
  name: 'CardActionsStyled'
})(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderTop: `1px solid ${theme.palette.divider}`
}))

export default function SkillDisplay(props: SkillDisplayProps) {
  return (
    <SkillDisplayRoot>
      <CardContentStyled>
        <TitleAndIcon direction="row" spacing={2}>
          <HtmlIcon />
          <Typography variant="h4" fontWeight="bold">
            HTML
          </Typography>
        </TitleAndIcon>

        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum expedita, voluptate
          atque at dolores, exercitationem amet unde, incidunt sint doloremque perspiciatis ducimus
          quam? Dignissimos amet incidunt delectus exercitationem veniam!
        </Typography>
      </CardContentStyled>
      <CardActionsStyled>
        <Button>Fechar</Button>

        <Button>Visitar página</Button>
      </CardActionsStyled>
    </SkillDisplayRoot>
  )
}
