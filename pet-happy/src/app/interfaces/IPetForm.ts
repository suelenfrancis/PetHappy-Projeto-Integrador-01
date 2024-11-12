import IAlimento from "./IAlimento";
import ICliente from "./ICliente";
import ICuidadoEspecial from "./ICuidadoEspecial";
import IMedicamento from "./IMedicamento";

interface IPetForm {
    tutor: ICliente,
    nome: string,
    porte_id: number,
    categoria_id: number,
    sexo: string,
    raca: string,
    data_nascimento: Date,
    alimentos: string,
    cuidados_especiais: string,
    medicamentos: string
}

export default IPetForm;