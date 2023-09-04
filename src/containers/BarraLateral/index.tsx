import { useDispatch, useSelector } from 'react-redux'

import FiltroCard from '../../components/FiltroCard'
import * as S from './style'

import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reduces/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtros)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtro>
          <FiltroCard legenda="Pendentes" contador={1} />
          <FiltroCard legenda="Concluidas" contador={2} />
          <FiltroCard legenda="Urgentes" contador={3} />
          <FiltroCard legenda="Importantes" contador={4} />
          <FiltroCard legenda="Normais" contador={5} />
          <FiltroCard legenda="Todas" contador={6} ativo />
        </S.Filtro>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
