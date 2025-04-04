import { useSelector } from "react-redux"
import Contato from "../../components/Contato"

import { Titulo } from "./styles"
import { MainContainer} from '../../styles/index'
import { RootReducer } from "../../store"


const ListaDeTarefas = () => {
    const { itens } = useSelector((state: RootReducer) => state.contatos)
    const { termo, criterio } = useSelector((state: RootReducer) => state.filtro)

    const filtraTarefas = () => {
        let tarefasFiltradas = itens;

        if (termo !== undefined) {
            tarefasFiltradas = tarefasFiltradas.filter(
                (item)=> item.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
            );
        }
        if (criterio === 'favorito') {
            return tarefasFiltradas.filter(item => item.favorito)
        }
        return tarefasFiltradas
    }
    
    return (
        <MainContainer>
        <ul>
            <Titulo>LISTA TELEFÔNICA 📞</Titulo>
            {filtraTarefas().map((c) => (
                <li key={c.titulo}>
                    <Contato  
                    id={c.id}
                    titulo={c.titulo}
                    favorito={c.favorito}
                    numero={c.numero}
                    email={c.email} 
                    />
                </li>
            ))}
        </ul>
    </MainContainer>
    )
}

export default ListaDeTarefas