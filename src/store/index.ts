import { configureStore } from '@reduxjs/toolkit'

import contatosSlice from './reducers/contatos'

const store = configureStore({
    reducer: {
        contatos: contatosSlice
    }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store