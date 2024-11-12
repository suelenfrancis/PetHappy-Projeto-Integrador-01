import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageComponent } from './page/page.component';
import { CampoTextoComponent } from './campo-texto/campo-texto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InputAutocompleteComponent } from './input-autocomplete/input-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { InputTextoComponent } from './input-texto/input-texto.component';
import { MultiRegistroComponent } from './multi-registro/multi-registro.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { PetsInputComponent } from './pets-input/pets-input.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { ServicoCardComponent } from './servico-card/servico-card.component';
import { NgxMatDatetimePickerModule, NgxMatNativeDateAdapter, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageComponent,
    CampoTextoComponent,
    ListagemComponent,
    DatePickerComponent,
    DropdownComponent,
    ModalComponent,
    InputAutocompleteComponent,
    InputTextoComponent,
    MultiRegistroComponent,
    PetsInputComponent,
    PetCardComponent,
    ServicoCardComponent,
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
    MatSelectModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageComponent,
    CampoTextoComponent,
    ListagemComponent,
    DatePickerComponent,
    DropdownComponent,
    ModalComponent,
    InputAutocompleteComponent,
    InputTextoComponent,
    MultiRegistroComponent,
    PetsInputComponent,
    PetCardComponent,
    ServicoCardComponent,
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pt-BR'
    },
  ]
})
export class SharedModule { }
