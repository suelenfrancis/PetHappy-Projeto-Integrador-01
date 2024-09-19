import { Observable } from "rxjs";

interface IService {
    obterTodos(): Observable<any[]>;
}

export default IService;