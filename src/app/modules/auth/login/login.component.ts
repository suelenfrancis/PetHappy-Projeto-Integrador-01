import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formulario: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.formulario = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  public mostrarErros(campo: string): boolean {
    return (this.formulario.get(campo)?.errors && this.formulario.get(campo)?.touched)!;
  }

  public fazerLogin(): void {
    if(this.formulario.valid) {
      this.authService.login(this.formulario.value).subscribe({
        next: (response) => {
          this.router.navigate(['/funcionarios']);
        },
        error: (response) => {
          if(response.status === 401) {
            alert('Usuário e/ou senha inválidos!');
          }
        }
      });
    }
  }
}
