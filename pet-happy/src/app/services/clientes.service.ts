import { Injectable } from '@angular/core';
import ICliente from '../interfaces/ICliente';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesService extends BaseService<ICliente> {
  constructor() { super('clientes') }
}
