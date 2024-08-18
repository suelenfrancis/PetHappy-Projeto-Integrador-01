import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosComponent } from './funcionarios.component';
import { FuncionarioFormularioComponent } from './funcionario-formulario/funcionario-formulario.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FuncionariosComponent,
    FuncionarioFormularioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    FuncionariosComponent
  ]
})
export class FuncionariosModule { }
