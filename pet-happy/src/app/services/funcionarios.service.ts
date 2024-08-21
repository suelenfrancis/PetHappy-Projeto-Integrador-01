import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import IFuncionario from '../interfaces/IFuncionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private readonly API_URL = 'http://localhost:8000/funcionarios/';

  constructor(private http: HttpClient) { }

  public obterTodos(): Observable<IFuncionario[]> {
    return this.http.get<IFuncionario[]>(this.API_URL);
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
