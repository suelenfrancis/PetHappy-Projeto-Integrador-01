import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-texto',
  templateUrl: './input-texto.component.html',
  styleUrls: ['./input-texto.component.scss']
})
export class InputTextoComponent {
  @Input() public control: FormControl = new FormControl();
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
}
