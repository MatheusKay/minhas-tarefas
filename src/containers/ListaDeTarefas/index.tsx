import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefas'
import * as S from './style'

import { RootReducer } from '../../store'

const ListaDeTaredas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtros
  )

  const filtrarTarefas = () => {
    let tarefasFiltradas = itens

    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidadeTarefas: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidadeTarefas} tarefa(s) marcada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidadeTarefas} tarefa(s) marcada(s) como: "${valor}" ${complementacao}`
    }

    return mensagem
  }

  const tarefas = filtrarTarefas()
  const mensagemFiltrada = exibeResultadoFiltragem(tarefas.length)

  return (
    <S.Container>
      <S.Resultado>{mensagemFiltrada}</S.Resultado>
      <ul>
        {tarefas.map((t) => (
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
    </S.Container>
  )
}

export default ListaDeTaredas
