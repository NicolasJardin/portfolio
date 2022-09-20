import { ButtonProps, styled } from '@mui/material'
import Button from '../Button/Button'

type ButtonContainedProps = ButtonProps

const ButtonContainedRoot = styled(Button, {
  name: 'ButtonContained',
  slot: 'Root'
})({})

export default function ButtonContained({ children, ...props }: ButtonContainedProps) {
  return (
    <ButtonContainedRoot {...props} variant="contained">
      {children}
    </ButtonContainedRoot>
  )
}
