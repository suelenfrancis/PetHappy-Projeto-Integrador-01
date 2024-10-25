import { Component, Input } from '@angular/core';
import { MedicamentosFormularioComponent } from './medicamentos-formulario/medicamentos-formulario.component';
import { FormControl } from '@angular/forms';
import { MedicamentoCardComponent } from '../../medicamento-card/medicamento-card.component';

@Component({
  selector: 'app-multi-medicamentos',
  templateUrl: './multi-medicamentos.component.html',
  styleUrls: ['./multi-medicamentos.component.scss']
})
export class MultiMedicamentosComponent {
  @Input() public control: FormControl = new FormControl();
  public formularioTemplate = MedicamentosFormularioComponent;
  public cardTemplate = MedicamentoCardComponent;
}
