import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar React',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'Focar nas estruturas de pastas',
      1
    ),
    new Tarefa(
      'Estudar TypeScript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Relembrar coisas importantes sobre typeScript',
      2
    ),
    new Tarefa(
      'Estudar VueJs',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'Fazer uma revisao do conteudo do vue',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
