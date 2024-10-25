import { Component } from '@angular/core';
import { Router } from '@angular/router';
import IPet from 'src/app/interfaces/IPet';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent {
  public dados!: IPet;

  constructor(private router: Router) {}

  public redirecionaParaAtualizar(): void {
    this.router.navigate([`/pets/${this.dados.id}/form`]);
  }
}
