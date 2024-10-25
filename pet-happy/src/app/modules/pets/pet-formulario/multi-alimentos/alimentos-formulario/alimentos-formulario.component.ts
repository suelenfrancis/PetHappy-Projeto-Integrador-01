import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alimentos-formulario',
  templateUrl: './alimentos-formulario.component.html',
  styleUrls: ['./alimentos-formulario.component.scss']
})
export class AlimentosFormularioComponent {
  
  public formularioAlimento: FormGroup;

  constructor(private dialogRef: MatDialogRef<AlimentosFormularioComponent>) {
    this.formularioAlimento = new FormGroup({
      descricao: new FormControl('', Validators.required),
      quantidade: new FormControl('', Validators.required),
      periodo: new FormControl('', Validators.required),
      local: new FormControl('', Validators.required),
      observacoes: new FormControl(''),
    });
  }

  public obterControle(formControlName: string): FormControl {
    return this.formularioAlimento.get(formControlName) as FormControl;
  }

  public desabilitarBotao() {
    return !this.formularioAlimento.valid;
  }

  public adicionar() {
    if(this.formularioAlimento.valid) {
      this.dialogRef.close(this.formularioAlimento.value);
    }
  }


}
