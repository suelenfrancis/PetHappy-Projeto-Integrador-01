import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import ICategoria from '../interfaces/ICategoria';
import IResponsePaginada from '../interfaces/IResponsePaginada';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly API_URL: string = `${environment.API_BASE_URL}/categorias/` 

  constructor(private http: HttpClient) { }

  public obterTodas(): Observable<IResponsePaginada<ICategoria>> {
    return this.http.get<IResponsePaginada<ICategoria>>(this.API_URL);
  }

}
