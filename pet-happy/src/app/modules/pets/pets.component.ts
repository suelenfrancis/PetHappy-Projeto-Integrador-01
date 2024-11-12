import { Component } from '@angular/core';
import { PetCardComponent } from '../shared/pet-card/pet-card.component';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent {
  public template = PetCardComponent;
}
