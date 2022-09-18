import { styled } from '@mui/material'
import HomeCard from 'modules/home/HomeCard'
import Page from 'modules/layout/components/Page'

const HomeRoot = styled(Page, {
  name: 'Home',
  slot: 'Root'
})({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center'
})

export default function Home() {
  return (
    <HomeRoot>
      <HomeCard />
    </HomeRoot>
  )
}
