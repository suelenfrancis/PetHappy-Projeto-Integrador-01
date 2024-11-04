import { Component } from '@angular/core';
import {PageComponent} from "../shared/page/page.component";
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { CardAgendaComponent } from "./card-agenda/card-agenda.component";
import { CardAgenda} from "../../models/CardAgenda";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  gridListCols: number = 3;

  constructor(private breakpointObserver: BreakpointObserver) {}

  itens = [
    new CardAgenda(
      "Passeio",
      "Bob",
      "09:30",
      "Ricardo",
      "Ana"
    ),
    new CardAgenda(
      "Passeio",
      "Bob",
      "09:30",
      "Ricardo",
      "Ana"
    ),
    new CardAgenda(
      "Passeio",
      "Bob",
      "09:30",
      "Ricardo",
      "Ana"
    ),
    new CardAgenda(
      "Passeio",
      "Bob",
      "09:30",
      "Ricardo",
      "Ana"
    ),
    new CardAgenda(
      "Passeio",
      "Bob",
      "09:30",
      "Ricardo",
      "Ana"
    ),
  ];

  protected readonly PageComponent = PageComponent;

  ngOnInit(): void {
    // Adjust column count based on breakpoints
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
    ]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        this.gridListCols = 1;
      } else if (state.breakpoints[Breakpoints.Small]) {
        this.gridListCols = 2;
      } else if (state.breakpoints[Breakpoints.Medium]) {
        this.gridListCols = 3;
      } else if (state.breakpoints[Breakpoints.Large]) {
        this.gridListCols = 4;
      } else {
        this.gridListCols = 5; // Extra large screens
      }
    });
  }

  protected readonly CardAgendaComponent = CardAgendaComponent;
}
