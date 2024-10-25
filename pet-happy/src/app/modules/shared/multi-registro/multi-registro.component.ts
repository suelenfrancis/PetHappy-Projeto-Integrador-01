import { Component, forwardRef, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-multi-registro',
  templateUrl: './multi-registro.component.html',
  styleUrls: ['./multi-registro.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiRegistroComponent),
      multi: true,
    }
  ]
})
export class MultiRegistroComponent implements ControlValueAccessor, OnInit {

  @Input() public formControl!: FormControl;
  @Input() public formularioComponente: any = ModalComponent;
  @Input() public cardComponente!: Type<any>;
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  private value: any[] = [];
  private disabled: boolean = false;

  constructor(private dialog: MatDialog){}
  
  ngOnInit(): void {
    this.renderizaItens();
  }

  onChange = (value: any[]) => {}

  onTouch = () => {}

  writeValue(value: any[]): void {
    this.value = [...value];
    this.renderizaItens();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private renderizaItens() {
    this.container.clear();
    this.value.forEach(item => {
      const componentRef = this.container.createComponent(this.cardComponente);
      componentRef.instance.dados = item;
    });
  }

  abrirModal() {
    const ref = this.dialog.open(this.formularioComponente);
    ref.afterClosed().subscribe(result => {
      if (result != null) {
        this.value.push(result);
        this.onChange(this.value);
        this.onTouch();
      }
    });
  }
}
