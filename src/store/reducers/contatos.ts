import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

const contatosSlice = createSlice({
    name: "contatos",
    initialState: {
        itens: [
            new Contato(
                'Pai', 
                true, 
                '988765432', 
                'contato.pai@gmail.com', 
                1
            ),
            new Contato(
                'Mãe', 
                true, 
                '988765544', 
                'contato.mae@gmail.com', 
                2
            ),
            new Contato(
                'Tio', 
                false, 
                '665165432', 
                'contato.tio@gmail.com', 
                3
            )
        ]
    },
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = [
                ...state.itens.filter((contato) => contato.id !== action.payload)
            ]    
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const indexDoContato = state.itens.findIndex(
                (c) => c.id === action.payload.id
            )

            if (indexDoContato >= 0) {
                state.itens[indexDoContato] = action.payload
            }
        }
    } 
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer