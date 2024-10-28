import { ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, filter, map, Observable, of, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public paginaAtual: string = '';

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.paginaAtual = this.router.url.replace('/', '');
  }

  public selecionado(item: string) {
    return this.paginaAtual === item
      ? {'color': 'var(--selected-menu-item)'}
      : {};
  }
}
