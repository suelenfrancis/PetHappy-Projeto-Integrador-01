import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
