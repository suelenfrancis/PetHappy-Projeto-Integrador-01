import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    // Verifica se tem token, caso tenha, adiciona o token no header da requisição
    if(this.tokenService.possuiToken()) {
      const token = this.tokenService.obter();
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      });
    }
    
    // Remove o token e redireciona para login caso o server respondas com 401
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.tokenService.remover();
          this.router.navigate(['/login']);
        }
        return throwError(() => new Error(error.message));
      })
    );
  }
}
