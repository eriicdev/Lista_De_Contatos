import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

const contatosSlice = createSlice({
    name: "contatos",
    initialState: {
        itens: [
            new Contato(
                1,
                'Pai', 
                true, 
                '988765432', 
                'contato.pai@gmail.com', 
            ),
            new Contato(
                2,
                'Mãe', 
                true, 
                '988765544', 
                'contato.mae@gmail.com', 
            ),
            new Contato(
                3,
                'Tio', 
                false, 
                '665165432', 
                'contato.tio@gmail.com', 
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
        },
        cadastrar: (state, action: PayloadAction<Contato>) => {
            const contatoJaExiste = state.itens.find(
                (contato) => 
                    contato.titulo.toLocaleLowerCase() === action.payload.titulo.toLocaleLowerCase()
            )

            if (contatoJaExiste) {
                alert('Este contato já está adicionado a sua lista')
            } else {
                state.itens.push(action.payload)
            }
        }
    } 
})

export const { remover, editar, cadastrar} = contatosSlice.actions

export default contatosSlice.reducer