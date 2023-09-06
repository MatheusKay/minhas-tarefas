import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import * as S from './style'
import * as enums from '../../utils/enums/Tarefa'
import { Botao, Campo } from '../../styles'

import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reduces/filtro'

type Props = {
  mostraFiltro: boolean
}

const BarraLateral = ({ mostraFiltro }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtros)

  return (
    <S.Aside>
      <div>
        {mostraFiltro ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtro>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="Pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="Concluidas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="Urgentes"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="Importantes"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="Normais"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtro>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
