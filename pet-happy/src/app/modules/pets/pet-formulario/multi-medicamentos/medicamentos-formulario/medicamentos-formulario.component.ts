import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-medicamentos-formulario',
  templateUrl: './medicamentos-formulario.component.html',
  styleUrls: ['./medicamentos-formulario.component.scss']
})
export class MedicamentosFormularioComponent {
  
  public formularioMedicamento: FormGroup;

  constructor(private dialogRef: MatDialogRef<MedicamentosFormularioComponent>) {
    this.formularioMedicamento = new FormGroup({
      nome: new FormControl('', Validators.required),
      posologia: new FormControl('', Validators.required),
      observacoes: new FormControl(''),
    });
  }

  public obterControle(formControlName: string): FormControl {
    return this.formularioMedicamento.get(formControlName) as FormControl;
  }

  public desabilitarBotao() {
    return !this.formularioMedicamento.valid;
  }

  public adicionar() {
    if(this.formularioMedicamento.valid) {
      this.dialogRef.close(this.formularioMedicamento.value);
    }
  }
}
