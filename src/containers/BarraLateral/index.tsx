import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import FiltragemCards from "../../components/FiltragemCards"

import { RootReducer } from "../../store"
import { alterarTermo } from "../../store/reducers/filtro"

import * as S from './styles'
import { CampoPesquisa } from "../../styles"

type Props = {
    mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { termo } = useSelector((state: RootReducer) => state.filtro)

    return(
        <S.Aside>
            <div>
                {mostrarFiltros ? (
                    <>
                <CampoPesquisa 
                    type="text" 
                    placeholder="Buscar" 
                    value={termo}
                    onChange={evento => dispatch(alterarTermo(evento.target.value))}
                />
                <div>
                    <FiltragemCards 
                        criterio="todas"
                        legenda="Contatos"
                    />
                    <FiltragemCards 
                        criterio="favorito"
                        legenda="Favoritos"
                    />
                </div>
                    </>
                ): (
                    <S.BotaoVoltar type="button" onClick={() => navigate('/')}>
                        Voltar a lista de Contatos
                    </S.BotaoVoltar>
                )}
            </div>
        </S.Aside>
    )
}

export default BarraLateral