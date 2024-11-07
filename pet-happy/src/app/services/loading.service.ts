import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading$ = this._isLoading.asObservable();

  constructor() { }

  public start(): void {
    this._isLoading.next(true);
  }

  public stop(): void {
    this._isLoading.next(false);
  }
}
