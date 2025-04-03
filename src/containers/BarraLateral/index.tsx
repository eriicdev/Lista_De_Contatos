import { useDispatch, useSelector } from "react-redux"
import FiltragemCards from "../../components/FiltragemCards"
import * as S from './styles'
import { RootReducer } from "../../store"
import { alterarTermo } from "../../store/reducers/filtro"

const BarraLateral = () => {
    const dispatch = useDispatch()
    const { termo } = useSelector((state: RootReducer) => state.filtro)

    return(
        <S.Aside>
            <div>
                <S.CampoPesquisa 
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
            </div>
        </S.Aside>
    )
}

export default BarraLateral