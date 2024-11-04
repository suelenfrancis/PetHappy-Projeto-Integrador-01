import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { HomeRoutingModule } from './home-routing.module';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatGridListModule} from "@angular/material/grid-list";
import { CardAgendaComponent } from './card-agenda/card-agenda.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardAgendaComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        MatIconModule,
        HomeRoutingModule,
        MatExpansionModule,
        MatGridListModule
    ]
})
export class HomeModule { }
