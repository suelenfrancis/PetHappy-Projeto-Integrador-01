import FuncionarioFormularioScreen from "../../../src/screens/FuncionarioFormularioScreen/FuncionarioFormularioScreen";
import FuncionarioService from "../../../src/services/FuncionarioService";

export async function getServerSideProps(context) {
    const id = context.query.id;
    const funcionario = await FuncionarioService.obterPeloId(id);
    return { props: { funcionario } };
}

export default FuncionarioFormularioScreen;