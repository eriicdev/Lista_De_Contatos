import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover } from '../../store/reducers/contatos'

import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({email, favorito, numero, titulo, id}: Props) => {
    const dispatch = useDispatch()
    const [estaeditando, setEstaeditando] = useState(false)
    
    return (
        <S.Card>
            <S.TituloETag_D_flex>
                <S.Titulo>{titulo}</S.Titulo>
                    {favorito ? (
                        <S.TagFavorito>⭐ Favorito</S.TagFavorito>
                    ) : (
                        <S.TagNaoFavorito>Não Favoritado</S.TagNaoFavorito>
                    )}
            </S.TituloETag_D_flex>
            <S.Email type="email" value={email}/>
            <S.NumeroTelefone type="number" value={numero}/>
            <S.BarraAcoes>
                {estaeditando ? (
                    <>
                        <S.BotaoSalvar>Salvar</S.BotaoSalvar>
                        <S.BotaoCancelarRemover onClick={() => setEstaeditando(false)}>
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