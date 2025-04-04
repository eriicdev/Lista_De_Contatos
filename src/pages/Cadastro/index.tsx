import BarraLateral from "../../containers/BarraLateral"
import Formulario from "../../containers/FormularioCadastro"

const Cadastro = () => {
    return (
        <>
        <BarraLateral mostrarFiltros={false}/>
        <Formulario/>
        </>
    )
}

export default Cadastro