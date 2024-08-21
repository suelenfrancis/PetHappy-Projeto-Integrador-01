import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly TOKEN_KEY: string = 'ACCESS_TOKEN';

  constructor(private cookieService: CookieService) { }

  public salvar(token: string): void {
    this.cookieService.set(
        this.TOKEN_KEY,
        token,
        {
            expires: 24 * 60 * 60,
            path: '/'
        }
    )
  }

  public obter(): string {
      return this.cookieService.get(this.TOKEN_KEY);
  }

  public remover(): void {
    this.cookieService.delete(this.TOKEN_KEY);
  }

  public possuiToken(): boolean {
    return this.cookieService.check(this.TOKEN_KEY);
  }
}
