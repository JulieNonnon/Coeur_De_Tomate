import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-confirm',
  templateUrl: './dialog-delete-confirm.component.html',
  styleUrl: './dialog-delete-confirm.component.css'
})
export class DialogDeleteConfirmComponent {

  constructor(
    private dialogRef: MatDialogRef<DialogDeleteConfirmComponent>
  ) {}

  // Clic bouton "supprimer"
  onConfirm(): void {
    this.dialogRef.close(true);
  }

  // Clic bouton "annuler"
  onCancel(): void {
    this.dialogRef.close(false);
  }
}
