import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'

import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
    email: emailOriginal, 
    favorito: favoritoOriginal, 
    numero: numeroOriginal, 
    titulo,
    id
    }: Props) => {
    const dispatch = useDispatch()
    const [estaeditando, setEstaeditando] = useState(false)
    const [email, setEmail] = useState('')
    const [numero, setNumero] = useState('')
    const [favorito, setFavorito] = useState(false)
    
    useEffect(() => {
        if (emailOriginal.length > 0) {
            setEmail(emailOriginal)
        }
    }, [emailOriginal])

    useEffect(() => {
        if (numeroOriginal.length > 0) {
            setNumero(numeroOriginal)
        }
    }, [numeroOriginal])

    useEffect(() => {
        setFavorito(favoritoOriginal)
    }, [favoritoOriginal])

    function cancelarEdicao() {
        setEstaeditando(false)
        setEmail(emailOriginal)
        setNumero(numeroOriginal)
        setFavorito(favoritoOriginal)
    }

    return (
        <S.Card>
            <S.TituloETag_D_flex>
                <S.Titulo>
                    {estaeditando ? <em>Editando: </em>: ''}
                    {titulo}
                </S.Titulo>
                    {estaeditando ? (
                        <S.ContainerEditaFavorito>
                            <input type="checkbox" 
                            checked={favorito}
                            onChange={(e) => setFavorito(e.target.checked)}/>
                            <S.EditarFavorito>Favoritar</S.EditarFavorito>
                        </S.ContainerEditaFavorito>
                    ): favorito ? (
                        <S.TagFavorito>⭐ Favorito</S.TagFavorito>
                    ): (
                        <S.TagNaoFavorito>Não Favoritado</S.TagNaoFavorito>
                    )}
            </S.TituloETag_D_flex>
            <S.Email type="email" 
                disabled={!estaeditando}
                value={email} 
                onChange={evento => setEmail(evento.target.value)}
            />
            <S.NumeroTelefone type="number" 
                disabled={!estaeditando}
                value={numero}
                onChange={evento => setNumero(evento.target.value)}
            />
            <S.BarraAcoes>
                {estaeditando ? (
                    <>
                        <S.BotaoSalvar onClick={() => {
                            dispatch(
                                editar({
                                id,
                                titulo,
                                email,
                                numero,
                                favorito
                            })
                        )
                        setEstaeditando(false)
                        }}>Salvar</S.BotaoSalvar>
                        <S.BotaoCancelarRemover onClick={cancelarEdicao}>
                            Cancelar
                        </S.BotaoCancelarRemover>
                    </>
                ) : (
                    <>
                        <S.Botoes onClick={() => setEstaeditando(true)}>
                            Editar
                        </S.Botoes>
                        <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>Remover</S.BotaoCancelarRemover>
                    </>
                )}
            </S.BarraAcoes>
        </S.Card>
    )
}

export default Contato