import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefas'
import { Container } from './style'

import { RootReducer } from '../../store'

const ListaDeTaredas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtros)

  const filtrarTarefas = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>2 tarefas marcadas como: &quot;categoria&quot;, &quot;{termo}&quot;</p>
      <ul>
        {filtrarTarefas().map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
              titulo={t.titulo}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTaredas
