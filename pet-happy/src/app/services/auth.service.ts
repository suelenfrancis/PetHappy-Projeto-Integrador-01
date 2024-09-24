import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import IAutenticacao from '../interfaces/IAutenticacao';
import IToken from '../interfaces/IToken';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_URL: string = 'http://localhost:8000/token/';

  constructor(
    private http: HttpClient, 
    private tokenService: TokenService
  ) {}

  public login(autenticacao: IAutenticacao): Observable<HttpResponse<IToken>> {
    return this.http.post<IToken>(
      this.API_URL, 
      autenticacao, 
      { observe: 'response' }).pipe(
        tap( response => {
          const token = response.body?.access ??  '';
          this.tokenService.salvar(token);
        })
      );
  }

  public logout(): void {
    this.tokenService.remover();
  }

}