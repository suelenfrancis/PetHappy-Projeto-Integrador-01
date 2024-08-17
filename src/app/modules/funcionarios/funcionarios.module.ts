import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosComponent } from './funcionarios.component';
import { FuncionarioFormularioComponent } from './funcionario-formulario/funcionario-formulario.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FuncionariosComponent,
    FuncionarioFormularioComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FuncionariosComponent
  ]
})
export class FuncionariosModule { }
