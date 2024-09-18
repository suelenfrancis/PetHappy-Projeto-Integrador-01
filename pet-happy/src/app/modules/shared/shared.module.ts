import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageComponent } from './page/page.component';
import { CampoTextoComponent } from './campo-texto/campo-texto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { ClientesModule } from '../clientes/clientes.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageComponent,
    CampoTextoComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageComponent,
    CampoTextoComponent,
    ListagemComponent
  ]
})
export class SharedModule { }
