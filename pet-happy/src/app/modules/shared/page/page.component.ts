import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent  {

  @Input() public incluirCabecalho: boolean = true;
  public estaCarregando$: Observable<boolean> = new Observable<boolean>();

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.estaCarregando$ = this.loadingService.isLoading$;
  }

}
