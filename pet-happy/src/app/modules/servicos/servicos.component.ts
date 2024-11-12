import { Component } from '@angular/core';
import { ServicoCardComponent } from '../shared/servico-card/servico-card.component';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent {
  public template = ServicoCardComponent;
}
