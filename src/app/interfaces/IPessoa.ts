import IEndereco from "./IEndereco";
import ITelefone from "./ITelefone";


interface IPessoa {
    id?: number,
    nome: string,
    endereco: IEndereco,
    telefones: ITelefone[]
}

export default IPessoa;