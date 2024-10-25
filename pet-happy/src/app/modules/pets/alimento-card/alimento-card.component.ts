import { Component, Input } from '@angular/core';
import IAlimento from 'src/app/interfaces/IAlimento';

@Component({
  selector: 'app-alimento-card',
  templateUrl: './alimento-card.component.html',
  styleUrls: ['./alimento-card.component.scss']
})
export class AlimentoCardComponent {
  @Input() public dados!: IAlimento;
}
