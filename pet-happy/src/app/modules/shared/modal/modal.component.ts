import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  
  @Input() public title: string | null = null;

  constructor(private dialogRef: MatDialogRef<ModalComponent>) {}

  public fechar() {
    this.dialogRef.close();
  }
}
