abstract class BaseService<T> {

    constructor(
        protected readonly recurso: string
    ){}

    public abstract obterTodos(): Promise<T[]>;
    public abstract obter(id: number): Promise<T>;
    public abstract cadastrar(modelo: T): Promise<void>;
    public abstract atualizar(modelo: T): Promise<void>;
    public abstract remover(modelo: T): Promise<void>;
}

export default BaseService;