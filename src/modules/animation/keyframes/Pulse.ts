import { keyframes } from '@mui/material'

export const Pulse = (color: string) => keyframes`
0% {
  transform: scale(0.95);
  box-shadow: 0 0 0 0 ${color};
}

70% {
  transform: scale(1);
  box-shadow: 0 0 0 4px ${color};
}

100% {
  transform: scale(0.95);
  box-shadow: 0 0 0 0 ${color};
}
`
