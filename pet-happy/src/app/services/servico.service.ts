import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import IServico from '../interfaces/IServico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService extends BaseService<IServico> {

  constructor() { super('servicos') }

}
