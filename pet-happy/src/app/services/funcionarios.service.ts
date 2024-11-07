import { Injectable } from '@angular/core';
import IFuncionario from '../interfaces/IFuncionario';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService extends BaseService<IFuncionario> {
  constructor() { super('funcionarios') }
}
