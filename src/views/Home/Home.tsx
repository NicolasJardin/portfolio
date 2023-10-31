import { Link, Typography, styled } from '@mui/material'
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
    <div>
      <Typography variant="body2" sx={{ ml: 1, mt: 1 }}>
        Este projeto não está mais sendo atualizado, para dados mais atualizados acesse{' '}
        <Link href="https://www.linkedin.com/in/jardin-nicolas/">
          https://www.linkedin.com/in/jardin-nicolas/
        </Link>
      </Typography>
      <HomeRoot>
        <HomeCard />
      </HomeRoot>
    </div>
  )
}
