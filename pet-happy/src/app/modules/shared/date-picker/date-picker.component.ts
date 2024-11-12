import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  @Input() public label: string = '';
  @Input() public hint: string = '';
  @Input() public control: FormControl = new FormControl();
  @Input() public incluirHora: boolean = false;
  @Input() public dataMinima?: Date;
  @Input() public dataMaxima?: Date;
  
}
