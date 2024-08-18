import { Component, OnInit } from '@angular/core';
import IFuncionario from 'src/app/interfaces/IFuncionario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {

  funcionarios: IFuncionario[] = [];
  
  constructor(private funcionariosService: FuncionariosService) {}
  
  ngOnInit(): void {
    
    this.funcionariosService.obterTodos()
      .subscribe(funcionarios => this.funcionarios = funcionarios);
  
  }

  
}
