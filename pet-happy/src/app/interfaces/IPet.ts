import IAlimento from "./IAlimento";
import ICategoria from "./ICategoria";
import ICliente from "./ICliente";
import ICuidadoEspecial from "./ICuidadoEspecial";
import IMedicamento from "./IMedicamento";
import IPorte from "./IPorte";
import IVeterinario from "./IVeterinario";

interface IPet {
    id?: number,
    tutor?: ICliente,
    veterinario?: IVeterinario,
    nome: string,
    data_nascimento: Date,
    sexo: string,
    raca: string,
    categoria?: ICategoria,
    porte?: IPorte,
    medicamentos?: string,
    alimentos?: string,
    cuidados_especiais?: string,
    tutor_id?: number,
    categoria_id?: number,
    porte_id?: number
}

export default IPet;