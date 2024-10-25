import { Component, Input } from '@angular/core';
import ICuidadoEspecial from 'src/app/interfaces/ICuidadoEspecial';

@Component({
  selector: 'app-cuidado-especial-card',
  templateUrl: './cuidado-especial-card.component.html',
  styleUrls: ['./cuidado-especial-card.component.scss']
})
export class CuidadoEspecialCardComponent {
 @Input() public dados!: ICuidadoEspecial;
}
