import IFuncionario from "../interfaces/IFuncionario";
import IFuncionarioForm from "../interfaces/IFuncionarioForm";
import Pessoa from "./Pessoa";
import Usuario from "./Usuario";


class Funcionario {

    constructor(
        public readonly id: number | null,
        public readonly pessoa: Pessoa,
        public readonly usuario: Usuario
    ) {}

    public static fromJson(json: IFuncionario): Funcionario {
        return new Funcionario(
            json.id,
            Pessoa.fromJson(json.pessoa),
            Usuario.fromjson(json.usuario)
        );
    }

    public toJson(): IFuncionario {
        return {
            id: this.id,
            pessoa: this.pessoa.toJson(),
            usuario: this.usuario.toJson()
        };
    }
}

export default Funcionario;