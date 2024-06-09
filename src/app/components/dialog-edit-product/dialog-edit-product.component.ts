import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-edit-product',
  templateUrl: './dialog-edit-product.component.html',
  styleUrl: './dialog-edit-product.component.css'
})
export class DialogEditProductComponent {

  editProductForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogEditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editProductForm = this.formBuilder.group({
      title: [data.title, Validators.required],
      image: [data.image, Validators.required],
      small_description: [data.small_description, Validators.required],
      long_description: [data.long_description, Validators.required],
      price: [data.price, [Validators.required, Validators.min(0)]],
      pitch: [data.pitch, Validators.required],
      feature1:[data.feature1, Validators.required],
      feature2:[data.feature2, Validators.required],
      feature3:[data.feature3, Validators.required]
    })
  }

  // Clic bouton "modifier"
  onEdit(): void {
    if (this.editProductForm.valid) {
      this.dialogRef.close(this.editProductForm.value);
    }
  }

  // Clic bouton "annuler"
  onCancel(): void {
    this.dialogRef.close();
  }


}
