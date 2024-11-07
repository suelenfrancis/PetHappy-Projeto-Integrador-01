import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ICliente from '../interfaces/ICliente';
import { environment } from 'src/environments/environment';
import IResponsePaginada from '../interfaces/IResponsePaginada';
import IService from '../interfaces/IService';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesService extends BaseService<ICliente> {
  constructor() { super('clientes') }
}
