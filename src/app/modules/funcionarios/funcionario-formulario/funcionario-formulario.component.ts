import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import IFuncionario from 'src/app/interfaces/IFuncionario';
import IFuncionarioForm from 'src/app/interfaces/IFuncionarioForm';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-funcionario-formulario',
  templateUrl: './funcionario-formulario.component.html',
  styleUrls: ['./funcionario-formulario.component.scss']
})
export class FuncionarioFormularioComponent {

  public formularioFuncionario: FormGroup;

  constructor(
    private funcionariosService: FuncionariosService,
    private router: Router
  ) {
    this.formularioFuncionario = new FormGroup({
      nome: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      rua: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      complemento: new FormControl('', Validators.required),
      telefonePrincipal: new FormControl('', Validators.required),
      telefoneAlternativo: new FormControl(''),
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  public obterControle(formControlName: string): FormControl {
    return this.formularioFuncionario.get(formControlName) as FormControl;
  }

  public cadastrar(): void {
    if(this.formularioFuncionario.valid) {
      console.log(this.formularioFuncionario.value); 
      const dadosFormulario: IFuncionarioForm = this.formularioFuncionario.value;
      const funcionarioCadastro: IFuncionario = {
        pessoa: {
          nome: dadosFormulario.nome,
          endereco: {
            cidade: dadosFormulario.cidade,
            bairro: dadosFormulario.bairro,
            rua: dadosFormulario.rua,
            numero: dadosFormulario.numero,
            complemento: dadosFormulario.complemento
          },
          telefones: [
            {
              numero: dadosFormulario.telefonePrincipal,
              is_contato_emergencia: true
            },
          ]
        },
        usuario: {
          username: dadosFormulario.username,
          password: dadosFormulario.password,
          email: dadosFormulario.email
        }
      }
      if(dadosFormulario.telefoneAlternativo) {
        funcionarioCadastro.pessoa.telefones.push({
          numero: dadosFormulario.telefoneAlternativo,
          is_contato_emergencia: false
        });
      }
      this.funcionariosService.cadastrar(funcionarioCadastro).subscribe({
        next: (response) => {
          alert('Funcionário cadastrado com sucesso!')
          this.router.navigate(['/funcionarios']);
        },
        error: (response) => {
          if(response.status === 500) {
            alert('Ocorreu um erro inesperado.');
          }
        }
      })
    }
  }

}
