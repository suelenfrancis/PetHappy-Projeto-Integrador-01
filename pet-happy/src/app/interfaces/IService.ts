import { Observable } from "rxjs";
import IResponsePaginada from "./IResponsePaginada";

interface IService {
    obterTodos(): Observable<IResponsePaginada<any>>;
}

export default IService;