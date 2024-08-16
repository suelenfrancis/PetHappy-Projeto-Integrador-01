import IPessoa from "./IPessoa";
import IUsuario from "./IUsuario";

interface IFuncionario {
    id: number | null,
    pessoa: IPessoa,
    usuario: IUsuario
}

export default IFuncionario;