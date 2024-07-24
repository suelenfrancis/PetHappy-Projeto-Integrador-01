import FuncionariosScreen from "../../src/screens/FuncionariosScreen/FuncionariosScreen";
import FuncionarioService from '../../src/services/FuncionarioService';

export async function getServerSideProps() {
    const funcionarios = await FuncionarioService.obterTodos();

    return { props: { funcionarios } }
}

export default FuncionariosScreen;