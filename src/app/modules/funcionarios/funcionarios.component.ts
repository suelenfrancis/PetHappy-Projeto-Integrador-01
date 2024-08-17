import { Component } from '@angular/core';
import IFuncionario from 'src/app/interfaces/IFuncionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent {

  funcionarios: IFuncionario[] = [];
  
}
