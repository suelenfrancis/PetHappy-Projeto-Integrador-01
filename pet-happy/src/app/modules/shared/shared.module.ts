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
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageComponent,
    CampoTextoComponent,
    ListagemComponent,
    DatePickerComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageComponent,
    CampoTextoComponent,
    ListagemComponent,
    DatePickerComponent,
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pt-BR'
    },
  ]
})
export class SharedModule { }
