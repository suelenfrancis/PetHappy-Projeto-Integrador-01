import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, map, Observable, switchMap, tap, throwError } from 'rxjs';
import ICliente from 'src/app/interfaces/ICliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss']
})
export class InputAutocompleteComponent implements OnInit {
  
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public control: FormControl = new FormControl();
  public filtrados: Observable<ICliente[]> = new Observable();
  private readonly INTERVALO: number = 500;
  
  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.filtrados = this.control.valueChanges.pipe(
      debounceTime(this.INTERVALO),
      tap(termoBusca => console.log(`Buscando por ${termoBusca} ...`)),
      switchMap(termoBusca => this.clientesService.obterTodos(termoBusca)),
      map(response => response.results),
      catchError(erro => {
        console.log(erro);
        return throwError(() => new Error('Ocorreu um erro durante a busca.'))
      })
    );
  }

  exibirItens(item: ICliente): string {
    return item && item.pessoa ? item.pessoa.nome : '';
  }
  
}
