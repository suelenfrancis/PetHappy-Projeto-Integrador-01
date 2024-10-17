import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets.component';
import { PetsRoutingModule } from './pets-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PetCardComponent } from './pet-card/pet-card.component';
import { MatIconModule } from '@angular/material/icon';
import { PetFormularioComponent } from './pet-formulario/pet-formulario.component';



@NgModule({
  declarations: [
    PetsComponent,
    PetCardComponent,
    PetFormularioComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    SharedModule,
    MatIconModule,
  ],
  exports: [
    PetsComponent
  ]
})
export class PetsModule {}
