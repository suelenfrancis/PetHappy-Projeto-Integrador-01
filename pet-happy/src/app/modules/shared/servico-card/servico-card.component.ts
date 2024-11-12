import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import TipoServico from 'src/app/enums/TipoServico';
import IServico from 'src/app/interfaces/IServico';

@Component({
  selector: 'app-servico-card',
  templateUrl: './servico-card.component.html',
  styleUrls: ['./servico-card.component.scss', '../../../styles/card.scss']
})
export class ServicoCardComponent {
  @Input() public dados!: IServico;
  @Input() public redirect: boolean = true;

  private tipoServico = {
    H: 'Hospedagem',
    P: 'Passeio',
    V: 'Visita'
  }

  private statusServico = {
    A: 'Agendado',
    B: 'Em Andamento',
    C: 'Concluído',
    D: 'Cancelado'
  }

  constructor(private router: Router) {}

  public redirecionaParaAtualizar(): void {
    if(this.redirect) {
      this.router.navigate([`/servicos/${this.dados.id}/form`]);
    }
  }
  public mostrarDataHora() {
    const dataHora = new Date( Date.parse(this.dados.data_hora_inicio) );
    return `${dataHora.toLocaleDateString('pt-BR')} ${dataHora.toLocaleTimeString('pt-BR')}`;
  }

  public mostrarTipo() {
    return this.tipoServico[this.dados.tipo];
  }

  public mostrarStatus() {
    return this.statusServico[this.dados.status];
  }
}
