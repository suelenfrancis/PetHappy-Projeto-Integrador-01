import { Component, OnInit } from '@angular/core';
import IFuncionario from 'src/app/interfaces/IFuncionario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent {

  public template = FuncionarioCardComponent;
  
  constructor() {}

}
