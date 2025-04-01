import Contato from "../../components/Contato"
import { Container } from "./styles"

const ListaDeTarefas = () => (
    <Container>
        <p>Contatos</p>
        <ul>
            <li>
                <Contato />
            </li>
            <li>
                <Contato />
            </li>
            <li>
                <Contato />
            </li>
            <li>
                <Contato />
            </li>
            <li>
                <Contato />
            </li>
        </ul>
    </Container>
)

export default ListaDeTarefas