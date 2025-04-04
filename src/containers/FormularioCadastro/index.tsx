import { useState } from 'react'
import { useDispatch} from 'react-redux'

import {MainContainer, TituloPgCadastro} from '../../styles'
import { CampoPesquisa, CampoEmail } from "../../styles"
import { CampoFavorito, Form, BotaoCadastrar, Label } from './styles'

import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
    const dispatch = useDispatch()

    const [titulo, setTitulo] = useState('')
    const [email, setemail] = useState('')
    const [numero, setNumero] = useState('')
    const [favorito, setfavorito] = useState(false)


    const handlerSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const novoContato = new Contato(
            Date.now(),
            titulo,
            favorito,
            numero,
            email,
        )

        dispatch(cadastrar(novoContato))
    }
    
    return (
        <MainContainer>
            <TituloPgCadastro>Adicionar Contato</TituloPgCadastro>
            <Form onSubmit={handlerSubmit}>
                <CampoPesquisa 
                    value={titulo}
                    onChange={(evento) => setTitulo(evento.target.value)}
                    type="text" 
                    placeholder="Titulo"
                />
                <CampoEmail 
                    value={email}
                    onChange={(evento) => setemail(evento.target.value)}
                    type="email" 
                    placeholder="Insira o e-mail"
                />
                <CampoPesquisa 
                    value={numero}
                    onChange={(evento) => setNumero(evento.target.value)}
                    type="number" 
                    placeholder="Insira o Número"
                />
                <div>
                    <CampoFavorito 
                        name="favorito" 
                        type="radio" 
                        id="favorito"
                        checked={favorito === true}
                        onChange={() => setfavorito(true)}
                        value="true"
                    /> 
                    <Label htmlFor="favorito">Favorito</Label>
                </div>
                <div>
                    <CampoFavorito 
                        name="nao-favorito" 
                        type="radio" 
                        id="nao-favorito"
                        checked={favorito === false}
                        onChange={() => setfavorito(false)}
                        value="false"
                    /> 
                    <Label htmlFor="nao-favorito">Não Favorito</Label>
                </div>
                <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
            </Form>
        </MainContainer>
    )
}

export default Formulario