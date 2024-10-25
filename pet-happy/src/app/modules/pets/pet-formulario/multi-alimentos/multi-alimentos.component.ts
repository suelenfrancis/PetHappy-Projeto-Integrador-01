import { Component, Input } from '@angular/core';
import { AlimentosFormularioComponent } from './alimentos-formulario/alimentos-formulario.component';
import { FormControl } from '@angular/forms';
import { AlimentoCardComponent } from '../../alimento-card/alimento-card.component';

@Component({
  selector: 'app-multi-alimentos',
  templateUrl: './multi-alimentos.component.html',
  styleUrls: ['./multi-alimentos.component.scss']
})
export class MultiAlimentosComponent {
  @Input() public control: FormControl = new FormControl();
  public formularioTemplate = AlimentosFormularioComponent;
  public cardTemplate = AlimentoCardComponent;
}
