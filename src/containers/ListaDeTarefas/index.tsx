import { useSelector } from "react-redux"
import Contato from "../../components/Contato"
import { Container } from "./styles"
import { RootReducer } from "../../store"

const ListaDeTarefas = () => {
    const {itens} = useSelector((state: RootReducer) => state.contatos)
    
    return (
        <Container>
        <ul>
            {itens.map((c) => (
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
    </Container>
    )
}

export default ListaDeTarefas