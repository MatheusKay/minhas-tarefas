import Tarefa from '../../components/Tarefas'
import { Container } from './style'

const tarefas = [
  {
    titulo: 'Usar drogas',
    descricao: 'Muito pó',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Vender drogas',
    descricao: 'Boca de fumo 3',
    prioridade: 'urgente',
    status: 'pendente'
  },
  {
    titulo: 'Matar policiais',
    descricao: 'Levar o Zé gotinhas e dois parafall',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTaredas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot;, &quot;pesquisa&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
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

export default ListaDeTaredas
