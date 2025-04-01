import * as S from './styles'

const Contato = () => {
    return (
        <S.Card>
            <S.TituloETag_D_flex>
                <S.Titulo>Nome do Contato</S.Titulo>
                <S.TagFavorito>⭐ Favorito</S.TagFavorito>
            </S.TituloETag_D_flex>
            <S.Email type="email" />
            <S.NumeroTelefone type="number"/>
            <S.BarraAcoes>
                <S.Botoes>Editar</S.Botoes>
                <S.Botoes>Remover</S.Botoes>
            </S.BarraAcoes>
        </S.Card>
    )
}

export default Contato