import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { SharedModule } from '../shared/shared.module';
import { RouterLink, RouterModule } from '@angular/router';
import { ClienteCardComponent } from './cliente-card/cliente-card.component';
import { MatIconModule } from '@angular/material/icon';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClientesComponent,
    ClienteCardComponent,
    ClienteFormularioComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatIconModule,
  ],
  exports: [
    ClientesComponent
  ]
})
export class ClientesModule { }
