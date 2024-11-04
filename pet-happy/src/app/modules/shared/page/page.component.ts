import {Component, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @Input() incluirCabecalho: boolean = true;

  ngOnInit(): void {
    this.setMaxWidth();
  }

  @HostListener('window:resize')
  onResize() {
    this.setMaxWidth();
  }

  setMaxWidth() {
    const width = window.innerWidth * 0.7; // Calculate 70% of the window width
    this.renderer.setStyle(this.el.nativeElement.querySelector('.schedule'), 'max-width', `${width}px`);
  }
}
