import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTaredas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral />
    <ListaDeTaredas />
    <BotaoAdicionar />
  </>
)

export default Home
