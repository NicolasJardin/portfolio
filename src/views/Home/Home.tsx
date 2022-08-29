import { Button, Typography } from '@mui/material'
import useTheme from '../../modules/theme/hooks/useTheme/useTheme'
import { Secondary, Secondary2, Secondary3, Teste, Teste2, Teste3 } from './Styles'

const Home = () => {
  const { changeTheme } = useTheme()

  return (
    <>
      <Teste>
        <Typography variant="h6">Duvidei me testar</Typography>
        <Button color="secondary" onClick={changeTheme}>
          Clique aqui para trocar de tema
        </Button>
      </Teste>

      <Teste2>
        <Typography variant="h6">Duvidei me testar</Typography>
        <Button color="secondary" onClick={changeTheme}>
          Clique aqui para trocar de tema
        </Button>
      </Teste2>

      <Teste3>
        <Typography variant="h6">Duvidei me testar</Typography>
        <Button color="secondary" onClick={changeTheme}>
          Clique aqui para trocar de tema
        </Button>
      </Teste3>

      <Secondary>
        <Typography variant="h6">Duvidei me testar</Typography>
        <Button color="secondary" onClick={changeTheme}>
          Clique aqui para trocar de tema
        </Button>
      </Secondary>

      <Secondary2>
        <Typography variant="h6">Duvidei me testar</Typography>
        <Button color="secondary" onClick={changeTheme}>
          Clique aqui para trocar de tema
        </Button>
      </Secondary2>

      <Secondary3>
        <Typography variant="h6">Duvidei me testar</Typography>
        <Button color="secondary" onClick={changeTheme}>
          Clique aqui para trocar de tema
        </Button>
      </Secondary3>
    </>
  )
}

export default Home
