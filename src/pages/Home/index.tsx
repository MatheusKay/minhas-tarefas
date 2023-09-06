import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTaredas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostraFiltro />
    <ListaDeTaredas />
    <BotaoAdicionar />
  </>
)

export default Home
