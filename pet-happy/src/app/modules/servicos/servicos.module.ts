import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosComponent } from './servicos.component';
import { ServicosRoutingModule } from './servicos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ServicoCardComponent } from '../shared/servico-card/servico-card.component';
import { ServicoFormComponent } from './servico-form/servico-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ServicosComponent,
    ServicoFormComponent,
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    ServicosComponent,
  ]
})
export class ServicosModule { }
