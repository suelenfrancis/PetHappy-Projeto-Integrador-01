import FuncionariosScreen from "../../src/screens/FuncionariosScreen/FuncionariosScreen";
import FuncionarioService from '../../src/services/FuncionarioService';


export async function getServerSideProps() {
    const funcionarios = await new FuncionarioService().obterTodos();
    return { props: { funcionarios } }
}

export default FuncionariosScreen;