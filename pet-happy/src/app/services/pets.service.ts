import { Injectable } from '@angular/core';
import IService from '../interfaces/IService';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import IResponsePaginada from '../interfaces/IResponsePaginada';
import { HttpClient } from '@angular/common/http';
import IPet from '../interfaces/IPet';

@Injectable({
  providedIn: 'root'
})
export class PetsService implements IService {

  private readonly API_URL = `${environment.API_BASE_URL}/pets/`;

  constructor(private http: HttpClient) { }

  obterTodos(): Observable<IResponsePaginada<IPet>> {
    return this.http.get<IResponsePaginada<IPet>>(this.API_URL);
  }
}
