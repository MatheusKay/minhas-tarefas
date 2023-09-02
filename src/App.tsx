import EstiloGlobal, { Container } from './styles'

import BarraLateral from './containers/BarraLateral'
import ListaDeTaredas from './containers/ListaDeTarefas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTaredas />
      </Container>
    </>
  )
}

export default App
