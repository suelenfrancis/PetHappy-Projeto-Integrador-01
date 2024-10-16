import { Component, ComponentFactoryResolver, Injector, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import IService from 'src/app/interfaces/IService';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClienteCardComponent } from '../../clientes/cliente-card/cliente-card.component';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  
  @Input() recurso!: 'funcionarios' | 'clientes' | 'pets' | 'servicos';
  @Input() modelo!: 'funcionários' | 'clientes' | 'pets' | 'serviços';
  @Input() cartao!: Type<any>;
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  itens: any[] = [];
  private service?: IService;
  
  constructor(private injector: Injector) {}
  
  ngOnInit(): void {
    this.obterServico();
    this.service?.obterTodos()
    .subscribe({
      next: response => this.itens = response.results,
      complete: () => this.renderizaItens()
    });
  }
  
  private obterServico() {
    if(this.recurso == 'clientes') {
      this.service = <ClientesService>this.injector.get(ClientesService);
    } 
    else if (this.recurso == 'funcionarios') {
      this.service = <FuncionariosService>this.injector.get(FuncionariosService);
    }
  }

  private renderizaItens() {
    this.container.clear();
    this.itens.forEach(item => {
      const componentRef = this.container.createComponent(this.cartao);
      componentRef.instance.dados = item;
    });
  }

  public gerarLinkParaCadastro() {
    return `/${this.recurso}/form/`;
  }

  public gerarMsgBotaoCadastro(): string {
    return `Cadastrar ${this.modelo}`;
  }

  public gerarMsgSemItens(): string {
    return `Nenhum ${this.modelo} cadastrado`;
  }


}
