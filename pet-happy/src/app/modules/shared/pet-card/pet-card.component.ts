import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import IPet from 'src/app/interfaces/IPet';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent {
  
  @Input() public dados!: IPet;
  @Input() public redirect: boolean = true;

  constructor(private router: Router) {}

  public redirecionaParaAtualizar(): void {
    if(this.redirect) {
      this.router.navigate([`/pets/${this.dados.id}/form`]);
    }
  }
}
