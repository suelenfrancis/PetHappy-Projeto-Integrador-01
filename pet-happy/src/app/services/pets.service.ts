import { Injectable } from '@angular/core';
import IPet from '../interfaces/IPet';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PetsService extends BaseService<IPet> {
  constructor() { super('pets') }
}
