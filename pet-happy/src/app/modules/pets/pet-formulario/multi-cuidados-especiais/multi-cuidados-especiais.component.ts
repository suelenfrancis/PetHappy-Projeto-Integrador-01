import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CuidadosEspeciaisFormularioComponent } from './cuidados-especiais-formulario/cuidados-especiais-formulario.component';
import { CuidadoEspecialCardComponent } from '../../cuidado-especial-card/cuidado-especial-card.component';

@Component({
  selector: 'app-multi-cuidados-especiais',
  templateUrl: './multi-cuidados-especiais.component.html',
  styleUrls: ['./multi-cuidados-especiais.component.scss']
})
export class MultiCuidadosEspeciaisComponent {
  @Input() public control: FormControl = new FormControl();
  public formularioTemplate = CuidadosEspeciaisFormularioComponent;
  public cardTemplate = CuidadoEspecialCardComponent;
}
