import StatusServico from "../enums/StatusServico";
import TipoServico from "../enums/TipoServico";
import IFuncionario from "./IFuncionario";
import IPet from "./IPet";

interface IServicoForm {
    funcionario: IFuncionario,
    tipo: TipoServico,
    status: StatusServico,
    data_hora_inicio: string,
    data_hora_fim?: string,
    pets?: IPet[],
}

export default IServicoForm;