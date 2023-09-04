import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reduces/tarefa'
import filtroReducer from './reduces/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtros: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
