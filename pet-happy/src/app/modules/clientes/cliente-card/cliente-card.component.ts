import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import ICliente from 'src/app/interfaces/ICliente';

@Component({
  selector: 'app-cliente-card',
  templateUrl: './cliente-card.component.html',
  styleUrls: ['./cliente-card.component.scss']
})
export class ClienteCardComponent {
  
  @Input() cliente!: ICliente;

  constructor(private router: Router){}

  public exibirEndereco() {
    const endereco = this.cliente.pessoa.endereco;
    return `${endereco.rua} ${endereco.numero} (${endereco.bairro})`;
  }

  public exibirTelefones() {
    return this.cliente.pessoa.telefones.map(tel => tel.numero);
  }

  public redirecionaParaAtualizar() {
    this.router.navigate([`/clientes/${this.cliente.id}/form`]);
  }
}
