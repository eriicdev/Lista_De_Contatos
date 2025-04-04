import { configureStore } from '@reduxjs/toolkit'

import contatosSlice from './reducers/contatos'
import filtroReducer from './reducers/filtro'

const store = configureStore({
    reducer: {
        contatos: contatosSlice,
        filtro: filtroReducer
        
    }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store