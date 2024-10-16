import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import IFuncionario from '../interfaces/IFuncionario';
import { environment } from 'src/environments/environment';
import IService from '../interfaces/IService';
import IResponsePaginada from '../interfaces/IResponsePaginada';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService implements IService {

  private readonly API_URL = `${environment.API_BASE_URL}/funcionarios/`;

  constructor(private http: HttpClient) { }

  public obterTodos(): Observable<IResponsePaginada<IFuncionario>> {
    return this.http.get<IResponsePaginada<IFuncionario>>(this.API_URL);
  }

  public cadastrar(funcionario: IFuncionario): Observable<HttpResponse<IFuncionario>> {
    return this.http.post<IFuncionario>(this.API_URL, funcionario, { observe: 'response' });
  }

  public obterPeloId(id: number): Observable<IFuncionario> {
    return this.http.get<IFuncionario>(`${this.API_URL}${id}`);
  }

  public atualizar(funcionario: IFuncionario): Observable<HttpResponse<IFuncionario>> {
    return this.http.put<IFuncionario>(
      `${this.API_URL}${funcionario.id}/`, 
      funcionario, 
      { observe: 'response' }
    );
  }
}
