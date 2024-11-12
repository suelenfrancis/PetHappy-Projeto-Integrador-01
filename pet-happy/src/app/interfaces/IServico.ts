import StatusServico from "../enums/StatusServico";
import TipoServico from "../enums/TipoServico";
import IEntidade from "./IEntidade";
import IFuncionario from "./IFuncionario";
import IPet from "./IPet";

interface IServico extends IEntidade{
    funcionario?: IFuncionario,
    tipo: TipoServico,
    status: StatusServico,
    data_hora_criacao?: string,
    data_hora_inicio: string,
    data_hora_fim?: string,
    pets?: IPet[],
    funcionario_id?: number,
    pets_ids?: number[],
}

export default IServico;