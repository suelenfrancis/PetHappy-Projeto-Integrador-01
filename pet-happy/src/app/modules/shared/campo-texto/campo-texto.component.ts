import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-campo-texto',
  templateUrl: './campo-texto.component.html',
  styleUrls: ['./campo-texto.component.scss'],
})
export class CampoTextoComponent {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() isPassword: boolean = false;
  @Input() maxLength: number = 300;
  @Input() control: FormControl = new FormControl();
}
