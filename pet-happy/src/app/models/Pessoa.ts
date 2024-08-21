import IEndereco from "../interfaces/IEndereco";
import IPessoa from "../interfaces/IPessoa";
import ITelefone from "../interfaces/ITelefone";


class Telefone {
    constructor(
        public readonly id: number | null,
        public readonly numero: string,
        public readonly isContatoEmergencia: boolean
    ){}

    public static fromJson(json: ITelefone): Telefone {
        return new Telefone(json.id, json.numero, json.is_contato_emergencia);
    }

    public toJson(): ITelefone {
        return {
            id: this.id,
            numero: this.numero,
            is_contato_emergencia: this.isContatoEmergencia
        };
    }
}

class Endereco {
    constructor(
        public readonly id:number | null,
        public readonly cidade: string,
        public readonly bairro: string,
        public readonly rua: string,
        public readonly numero: string,
        public readonly complemento: string
    ){}

    public static fromJson(json: IEndereco): Endereco {
        return new Endereco(
            json.id,
            json.cidade,
            json.bairro,
            json.rua,
            json.numero,
            json.complemento
        );
    }

    public toJson(): IEndereco {
        return {
            id: this.id,
            cidade: this.cidade,
            bairro: this.bairro,
            rua: this.rua,
            numero: this.numero,
            complemento: this.complemento
        };
    }
}

class Pessoa {

    constructor(
        public readonly id: number | null,
        public readonly nome: string,
        public readonly endereco: Endereco,
        public readonly telefones: Telefone[]
    ) {}
    
    public static fromJson(json: IPessoa): Pessoa {
        return new Pessoa(
            json.id,
            json.nome,
            Endereco.fromJson(json.endereco),
            json.telefones.map(telefoneJson => Telefone.fromJson(telefoneJson))
        );
    }

    public toJson(): IPessoa {
        return {
            id: this.id,
            nome: this.nome,
            endereco: this.endereco.toJson(),
            telefones: this.telefones.map(telefone => telefone.toJson())
        };
    }
    
}

export default Pessoa;