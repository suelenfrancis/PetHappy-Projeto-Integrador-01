import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosComponent } from './funcionarios.component';



@NgModule({
  declarations: [
    FuncionariosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FuncionariosComponent
  ]
})
export class FuncionariosModule { }
