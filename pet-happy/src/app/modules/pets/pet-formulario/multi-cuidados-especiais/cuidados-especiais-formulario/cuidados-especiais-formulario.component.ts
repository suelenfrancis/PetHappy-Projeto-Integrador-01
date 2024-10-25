import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cuidados-especiais-formulario',
  templateUrl: './cuidados-especiais-formulario.component.html',
  styleUrls: ['./cuidados-especiais-formulario.component.scss']
})
export class CuidadosEspeciaisFormularioComponent {
  
  public formularioCuidadosEspeciais: FormGroup;
  public tipoOpcoes =   [
    {
      chave: 'Outros',
      valor: 'O'
    },
    {
      chave: 'Doença',
      valor: 'D'
    },
    {
      chave: 'Emocional',
      valor: 'E'
    }
  ];

  constructor(private dialogRef: MatDialogRef<CuidadosEspeciaisFormularioComponent>) {
    this.formularioCuidadosEspeciais = new FormGroup({
      descricao: new FormControl('', Validators.required),
      tipo: new FormControl(null, Validators.required),
    });
  }

  public obterControle(formControlName: string): FormControl {
    return this.formularioCuidadosEspeciais.get(formControlName) as FormControl;
  }

  public desabilitarBotao() {
    return !this.formularioCuidadosEspeciais.valid;
  }

  public adicionar() {
    if(this.formularioCuidadosEspeciais.valid) {
      this.dialogRef.close(this.formularioCuidadosEspeciais.value);
    }
  }
}
