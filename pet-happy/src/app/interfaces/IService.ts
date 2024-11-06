import { Observable } from "rxjs";
import IResponsePaginada from "./IResponsePaginada";

interface IService {
    obterTodos(search: string, page: number): Observable<IResponsePaginada<any>>;
}

export default IService;