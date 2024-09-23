import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { SharedModule } from '../shared/shared.module';
import { RouterLink, RouterModule } from '@angular/router';
import { ClienteCardComponent } from './cliente-card/cliente-card.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ClientesComponent,
    ClienteCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    MatIconModule,
  ],
  exports: [
    ClientesComponent
  ]
})
export class ClientesModule { }
