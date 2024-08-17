import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  @Input() incluirCabecalho: boolean = true;
  @Input() incluirRodape: boolean = true;

}
