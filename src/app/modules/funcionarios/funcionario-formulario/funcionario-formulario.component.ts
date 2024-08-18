import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import IFuncionario from 'src/app/interfaces/IFuncionario';

@Component({
  selector: 'app-funcionario-formulario',
  templateUrl: './funcionario-formulario.component.html',
  styleUrls: ['./funcionario-formulario.component.scss']
})
export class FuncionarioFormularioComponent {

  public formularioFuncionario: FormGroup;

  constructor() {
    this.formularioFuncionario = new FormGroup({
      nome: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      rua: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
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
    console.log(this.formularioFuncionario.value);
  }

}
