import { Injectable } from '@angular/core';
import IService from '../interfaces/IService';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import IResponsePaginada from '../interfaces/IResponsePaginada';
import { HttpClient, HttpResponse } from '@angular/common/http';
import IPet from '../interfaces/IPet';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PetsService extends BaseService<IPet> {
  constructor() { super('pets') }
}
