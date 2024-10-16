import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import IFuncionario from 'src/app/interfaces/IFuncionario';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.scss']
})
export class FuncionarioCardComponent {
  
  @Input() dados!: IFuncionario;

  constructor(private router: Router) {}

  public exibirEndereco() {
    const endereco = this.dados.pessoa.endereco;
    return `${endereco.rua} ${endereco.numero} (${endereco.bairro})`;
  }

  public exibirTelefones() {
    return this.dados.pessoa.telefones.map(tel => tel.numero);
  }

  public redirecionaParaAtualizar() {
    this.router.navigate([`/funcionarios/${this.dados.id}/form`]);
  }
}
