import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import IFuncionario from 'src/app/interfaces/IFuncionario';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.scss']
})
export class FuncionarioCardComponent {
  
  @Input() funcionario!: IFuncionario;

  constructor(private router: Router) {}

  public exibirEndereco() {
    const endereco = this.funcionario.pessoa.endereco;
    return `${endereco.rua} ${endereco.numero} (${endereco.bairro})`;
  }

  public exibirTelefones() {
    return this.funcionario.pessoa.telefones.map(tel => tel.numero);
  }

  public redirecionaParaAtualizar() {
    this.router.navigate([`/funcionarios/${this.funcionario.id}/form`]);
  }
}
