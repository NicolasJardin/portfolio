import { styled } from '@mui/material'

const FlexCenter = styled('div', {
  name: 'FlexCenter',
  slot: 'Root'
})({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export default FlexCenter
