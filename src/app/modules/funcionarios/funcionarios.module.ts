import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosComponent } from './funcionarios.component';
import { FuncionarioFormularioComponent } from './funcionario-formulario/funcionario-formulario.component';



@NgModule({
  declarations: [
    FuncionariosComponent,
    FuncionarioFormularioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FuncionariosComponent
  ]
})
export class FuncionariosModule { }
