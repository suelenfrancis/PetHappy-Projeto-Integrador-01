import { Injectable } from '@angular/core';
import IService from '../interfaces/IService';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import IResponsePaginada from '../interfaces/IResponsePaginada';
import { HttpClient, HttpResponse } from '@angular/common/http';
import IPet from '../interfaces/IPet';

@Injectable({
  providedIn: 'root'
})
export class PetsService implements IService {

  private readonly API_URL = `${environment.API_BASE_URL}/pets/`;

  constructor(private http: HttpClient) { }

  public obterTodos(): Observable<IResponsePaginada<IPet>> {
    return this.http.get<IResponsePaginada<IPet>>(this.API_URL);
  }

  public cadastrar(pet: IPet): Observable<HttpResponse<IPet>> {
    return this.http.post<IPet>(this.API_URL, pet, { observe: 'response' });
  }

  public obterPeloId(id: number): Observable<IPet> {
    return this.http.get<IPet>(`${this.API_URL}${id}`);
  }

  public atualizar(pet: IPet): Observable<HttpResponse<IPet>> {
    return this.http.put<IPet>(
      `${this.API_URL}${pet.id}/`, 
      pet, 
      { observe: 'response' }
    );
  }
}
