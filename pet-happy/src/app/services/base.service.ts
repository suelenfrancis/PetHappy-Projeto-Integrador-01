import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IResponsePaginada from '../interfaces/IResponsePaginada';
import IEntidade from '../interfaces/IEntidade';
import IService from '../interfaces/IService';


export class BaseService<T extends IEntidade> implements IService {

  protected readonly API_URL = `${environment.API_BASE_URL}/${this.recurso}/`;
  protected http = inject(HttpClient);

  constructor(private recurso: string) { }

  public listar(search = '', page = 0): Observable<IResponsePaginada<T>> {
    let params = new HttpParams();
    params = params.set('page', page);
    if (search.length > 0) {
      params = params.set('search', search);
    }
    return this.http.get<IResponsePaginada<T>>(this.API_URL, { params: params });
  }

  public cadastrar(entidade: T): Observable<HttpResponse<T>> {
    return this.http.post<T>(this.API_URL, entidade, { observe: 'response' });
  }

  public obter(id: number): Observable<T> {
    return this.http.get<T>(`${this.API_URL}${id}`);
  }

  public atualizar(entidade: T): Observable<HttpResponse<T>> {
    return this.http.put<T>(
      `${this.API_URL}${entidade.id}/`, 
      entidade, 
      { observe: 'response' }
    );
  }
}
