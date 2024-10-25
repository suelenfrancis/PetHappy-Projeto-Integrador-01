import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IResponsePaginada from '../interfaces/IResponsePaginada';
import IPorte from '../interfaces/IPorte';

@Injectable({
  providedIn: 'root'
})
export class PorteService {

  private readonly API_URL: string = `${environment.API_BASE_URL}/portes/` 

  constructor(private http: HttpClient) { }

  public obterTodos(): Observable<IResponsePaginada<IPorte>> {
    return this.http.get<IResponsePaginada<IPorte>>(this.API_URL);
  }
}
