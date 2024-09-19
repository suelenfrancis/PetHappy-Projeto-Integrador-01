import { Component } from '@angular/core';
import { ClienteCardComponent } from './cliente-card/cliente-card.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {

  public template = ClienteCardComponent;

  constructor() {}

}
