import { Component, Injector, Input, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import IService from 'src/app/interfaces/IService';
import { ClientesService } from 'src/app/services/clientes.service';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import { PetsService } from 'src/app/services/pets.service';
import { PageEvent } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit, OnDestroy {
  
  @Input() recurso!: 'funcionarios' | 'clientes' | 'pets' | 'servicos';
  @Input() modelo!: 'funcionários' | 'clientes' | 'pets' | 'serviços';
  @Input() cartao!: Type<any>;
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  itens: any[] = [];
  private service?: IService;
  indiceAtual: number = 0;
  totalRegistros: number = 30;
  tamanhoPagina: number = 10;
  buscaControl = new FormControl('');
  INTERVALO = 500;
  serviceSubs?: Subscription;
  buscaSubs?: Subscription;
  
  constructor(private injector: Injector, private loadingService: LoadingService) {}
  
  ngOnInit(): void {
    this.obterServico();
    this.buscarItens();
    this.buscaSubs = this.buscaControl.valueChanges.pipe(
      debounceTime(this.INTERVALO)
    ).subscribe( _ => {
      this.indiceAtual = 0;
      this.buscarItens();
    });
  }

  ngOnDestroy(): void {
    this.buscaSubs?.unsubscribe();
    this.serviceSubs?.unsubscribe();
  }
  
  private obterServico() {
    if(this.recurso == 'clientes') {
      this.service = <ClientesService>this.injector.get(ClientesService);
    } 
    else if (this.recurso == 'funcionarios') {
      this.service = <FuncionariosService>this.injector.get(FuncionariosService);
    }
    else if (this.recurso == 'pets') {
      this.service = <PetsService>this.injector.get(PetsService);
    }
    else if (this.recurso == 'servicos') {
      this.service = <ServicoService>this.injector.get(ServicoService);
    }
  }

  private renderizaItens() {
    this.container.clear();
    this.itens.forEach(item => {
      const componentRef = this.container.createComponent(this.cartao);
      componentRef.instance.dados = item;
    });
  }

  private buscarItens() {
    this.itens = [];
    this.loadingService.start();
    this.serviceSubs = this.service?.listar(this.buscaControl.value ?? '', this.indiceAtual + 1)
    .subscribe({
      next: response => {
        this.itens = response.results;
        this.totalRegistros = response.count;
      },
      complete: () => {
        this.renderizaItens();
        this.loadingService.stop();
      }
    });
  }

  public gerarLinkParaCadastro() {
    return `/${this.recurso}/form/`;
  }

  public gerarMsgBotaoCadastro(): string {
    return `Cadastrar ${this.modelo}`;
  }

  public gerarMsgSemItens(): string {
    return this.buscaControl.value 
      ? `Nenhum registro encontrado para o filtro: "${this.buscaControl.value}"`
      : 'Nenhum registro foi encontrado';
  }

  public eventoMudouPagina(evento: PageEvent) {
    this.indiceAtual = evento.pageIndex;
    this.buscarItens();
  }

}
