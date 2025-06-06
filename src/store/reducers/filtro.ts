import { PayloadAction ,createSlice } from "@reduxjs/toolkit"

type FiltroState = {
    termo?: string
    criterio: 'favorito' | 'todas'
}

const initialState: FiltroState = {
    termo: '',
    criterio: 'todas'
}

const filtroSlice = createSlice({
    name: 'filtro',
    initialState,
    reducers: {
        alterarTermo: (state, action: PayloadAction<string>) => {
            state.termo = action.payload
        },
        alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
            state.criterio = action.payload.criterio
        }
    }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer