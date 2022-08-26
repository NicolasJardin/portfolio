import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Ops! Página não encontrada.</h1>
      <button onClick={() => navigate('/', { replace: true })}>Voltar para a home</button>
    </div>
  )
}

export default PageNotFound
