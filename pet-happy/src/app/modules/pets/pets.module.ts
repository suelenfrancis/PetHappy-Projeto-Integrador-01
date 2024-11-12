import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets.component';
import { PetsRoutingModule } from './pets-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PetCardComponent } from '../shared/pet-card/pet-card.component';
import { MatIconModule } from '@angular/material/icon';
import { PetFormularioComponent } from './pet-formulario/pet-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiAlimentosComponent } from './pet-formulario/multi-alimentos/multi-alimentos.component';
import { AlimentosFormularioComponent } from './pet-formulario/multi-alimentos/alimentos-formulario/alimentos-formulario.component';
import { AlimentoCardComponent } from './alimento-card/alimento-card.component';
import { MultiMedicamentosComponent } from './pet-formulario/multi-medicamentos/multi-medicamentos.component';
import { MedicamentosFormularioComponent } from './pet-formulario/multi-medicamentos/medicamentos-formulario/medicamentos-formulario.component';
import { MedicamentoCardComponent } from './medicamento-card/medicamento-card.component';
import { MultiCuidadosEspeciaisComponent } from './pet-formulario/multi-cuidados-especiais/multi-cuidados-especiais.component';
import { CuidadosEspeciaisFormularioComponent } from './pet-formulario/multi-cuidados-especiais/cuidados-especiais-formulario/cuidados-especiais-formulario.component';
import { CuidadoEspecialCardComponent } from './cuidado-especial-card/cuidado-especial-card.component';


@NgModule({
  declarations: [
    PetsComponent,
    PetFormularioComponent,
    MultiAlimentosComponent,
    AlimentosFormularioComponent,
    AlimentoCardComponent,
    MultiMedicamentosComponent,
    MedicamentosFormularioComponent,
    MedicamentoCardComponent,
    MultiCuidadosEspeciaisComponent,
    CuidadosEspeciaisFormularioComponent,
    CuidadoEspecialCardComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatIconModule,
  ],
  exports: [
    PetsComponent,
  ]
})
export class PetsModule {}
