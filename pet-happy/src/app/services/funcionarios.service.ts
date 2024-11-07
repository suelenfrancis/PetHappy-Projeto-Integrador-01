import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import IFuncionario from '../interfaces/IFuncionario';
import { environment } from 'src/environments/environment';
import IService from '../interfaces/IService';
import IResponsePaginada from '../interfaces/IResponsePaginada';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService extends BaseService<IFuncionario> {
  constructor() { super('funcionarios') }
}
