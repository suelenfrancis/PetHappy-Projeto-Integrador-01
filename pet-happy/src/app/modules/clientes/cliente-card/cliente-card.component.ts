import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import ICliente from 'src/app/interfaces/ICliente';

@Component({
  selector: 'app-cliente-card',
  templateUrl: './cliente-card.component.html',
  styleUrls: ['./cliente-card.component.scss']
})
export class ClienteCardComponent {
  
  @Input() dados!: ICliente;

  constructor(private router: Router){}

  public exibirEndereco() {
    const endereco = this.dados.pessoa.endereco;
    return `${endereco.rua} ${endereco.numero} (${endereco.bairro})`;
  }

  public exibirTelefones() {
    return this.dados.pessoa.telefones.map(tel => tel.numero);
  }

  public redirecionaParaAtualizar() {
    this.router.navigate([`/clientes/${this.dados.id}/form`]);
  }
}
