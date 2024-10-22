import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import ICliente from 'src/app/interfaces/ICliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss']
})
export class InputAutocompleteComponent implements OnInit {
  
  @Input() public label: string = '';
  @Input() public control: FormControl = new FormControl();
  public itens: ICliente[] = [];
  public temMais: boolean = false;

  constructor(private clientesService: ClientesService) {}
  
  ngOnInit(): void {
    this.clientesService.obterTodos().subscribe(
      response => {
        this.itens = response.results;
        this.temMais = response.next != null;
      }
    );
  }

  filtrar() {
    if(this.control.value.length > 3) {
      console.log('filtrando...');
    };
  }

  exibirItens(item: ICliente): string {
    return item && item.pessoa ? item.pessoa.nome : '';
  }
  
}
