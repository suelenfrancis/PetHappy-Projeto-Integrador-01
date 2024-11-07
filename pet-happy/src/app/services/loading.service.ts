import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading$ = this._isLoading.asObservable();

  constructor() { }

  public startLoading(): void {
    this._isLoading.next(true);
  }

  public stopLoading(): void {
    this._isLoading.next(false);
  }
}
