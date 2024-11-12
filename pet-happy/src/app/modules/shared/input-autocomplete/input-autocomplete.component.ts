import { Component, Injector, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, map, Observable, switchMap, tap, throwError } from 'rxjs';
import ICliente from 'src/app/interfaces/ICliente';
import IFuncionario from 'src/app/interfaces/IFuncionario';
import IService from 'src/app/interfaces/IService';
import { ClientesService } from 'src/app/services/clientes.service';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss']
})
export class InputAutocompleteComponent implements OnInit {
  
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public control: FormControl = new FormControl();
  @Input() public recurso: 'clientes' | 'funcionarios' = 'clientes';
  private service?: IService;
  public filtrados: Observable<ICliente[] | IFuncionario[] > = new Observable();
  private readonly INTERVALO: number = 500;
  
  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.obterServico();
    this.filtrados = this.control.valueChanges.pipe(
      debounceTime(this.INTERVALO),
      tap(termoBusca => console.log(`Buscando por ${termoBusca} ...`)),
      switchMap(termoBusca => this.service!.listar(termoBusca, 1)),
      map(response => response.results),
      catchError(erro => {
        console.log(erro);
        return throwError(() => new Error('Ocorreu um erro durante a busca.'))
      })
    );
  }

  private obterServico() {
    if(this.recurso === 'clientes') {
      this.service = this.injector.get(ClientesService);
    } else {
      this.service = this.injector.get(FuncionariosService);
    }
  }

  exibirItens(item: ICliente | IFuncionario): string {
    return item && item.pessoa ? item.pessoa.nome : '';
  }
  
}
