import FiltragemCards from "../../components/FiltragemCards"
import * as S from './styles'

const BarraLateral = () => (
    <S.Aside>
        <div>
            <S.CampoPesquisa type="text" placeholder="Buscar" />
            <div>
                <FiltragemCards 
                    legenda="Contatos"
                    contador={5}
                />
                <FiltragemCards 
                    legenda="Favoritos"
                    contador={3}
                    ativo
                />
            </div>
        </div>
    </S.Aside>
)

export default BarraLateral