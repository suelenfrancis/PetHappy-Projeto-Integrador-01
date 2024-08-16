import IUsuario from "../interfaces/IUsuario";

class Usuario {
    constructor(
        public readonly id: number | null,
        public readonly username: string,
        public readonly email: string,
    ){}

    public static fromjson(json: IUsuario): Usuario {
        return new Usuario(
            json.id,
            json.username,
            json.email
        );
    }

    public toJson(): IUsuario {
        return {
            id: this.id,
            username: this.username,
            email: this.email
        };
    }
}

export default Usuario;