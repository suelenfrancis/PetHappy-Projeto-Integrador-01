import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosComponent } from './funcionarios.component';
import { FuncionarioFormularioComponent } from './funcionario-formulario/funcionario-formulario.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    FuncionariosComponent,
    FuncionarioFormularioComponent,
    FuncionarioCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    MatIconModule,
  ],
  exports: [
    FuncionariosComponent
  ]
})
export class FuncionariosModule { }
