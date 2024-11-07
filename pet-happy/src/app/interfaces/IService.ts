import { Observable } from "rxjs";
import IResponsePaginada from "./IResponsePaginada";

interface IService {
    listar(search: string, page: number): Observable<IResponsePaginada<any>>;
}

export default IService;