import { Component, Input } from '@angular/core';
import { CardAgenda } from '../../../models/CardAgenda'

@Component({
  selector: 'app-card-agenda',
  templateUrl: './card-agenda.component.html',
  styleUrls: ['./card-agenda.component.scss']
})
export class CardAgendaComponent {
  @Input() cardModel?: CardAgenda;

  editServico(cardModel?: CardAgenda): void {
    //TODO lidar com o click do serviço
    console.log(cardModel?.nomeServico)
  }
}
