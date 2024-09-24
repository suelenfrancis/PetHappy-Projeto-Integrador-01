import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ICliente from '../interfaces/ICliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API_URL = `${environment.API_BASE_URL}/clientes/`;

  constructor(private http: HttpClient) { }

  public obterTodos(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>(this.API_URL);
  }

  public cadastrar(cliente: ICliente): Observable<HttpResponse<ICliente>> {
    return this.http.post<ICliente>(this.API_URL, cliente, { observe: 'response' });
  }
}
