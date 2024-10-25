import { Component, Input } from '@angular/core';
import IMedicamento from 'src/app/interfaces/IMedicamento';

@Component({
  selector: 'app-medicamento-card',
  templateUrl: './medicamento-card.component.html',
  styleUrls: ['./medicamento-card.component.scss']
})
export class MedicamentoCardComponent {
  @Input() public dados!: IMedicamento;
}
