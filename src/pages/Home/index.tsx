import BotaoAdicionar from "../../components/BotaoAdicionar/Index"
import BarraLateral from "../../containers/BarraLateral"
import ListaDeTarefas from "../../containers/ListaDeTarefas"

const Home = () => {
    return (
        <>
            <BarraLateral mostrarFiltros={true}/>
            <ListaDeTarefas />
            <BotaoAdicionar />
        </>
    )
}

export default Home