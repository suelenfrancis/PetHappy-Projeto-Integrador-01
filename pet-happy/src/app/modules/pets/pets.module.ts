import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets.component';
import { PetsRoutingModule } from './pets-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PetCardComponent } from './pet-card/pet-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PetFormularioComponent } from './pet-formulario/pet-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiAlimentosComponent } from './pet-formulario/multi-alimentos/multi-alimentos.component';
import { AlimentosFormularioComponent } from './pet-formulario/multi-alimentos/alimentos-formulario/alimentos-formulario.component';
import { AlimentoCardComponent } from './alimento-card/alimento-card.component';


@NgModule({
  declarations: [
    PetsComponent,
    PetCardComponent,
    PetFormularioComponent,
    MultiAlimentosComponent,
    AlimentosFormularioComponent,
    AlimentoCardComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatIconModule,
  ],
  exports: [
    PetsComponent
  ]
})
export class PetsModule {}
