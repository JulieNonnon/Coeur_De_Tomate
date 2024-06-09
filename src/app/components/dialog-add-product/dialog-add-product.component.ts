import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-product',
  templateUrl: './dialog-add-product.component.html',
  styleUrl: './dialog-add-product.component.css'
})
export class DialogAddProductComponent {

  addProductForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogAddProductComponent>
  ) {
    this.addProductForm = this.formBuilder.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      small_description: ['', Validators.required],
      long_description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      pitch: ['', Validators.required],
      feature1:['', Validators.required],
      feature2:['', Validators.required],
      feature3:['', Validators.required]
    })
  }

  // Clic bouton "ajouter"
  onAdd(): void {
    if (this.addProductForm.valid) {
      this.dialogRef.close(this.addProductForm.value);
    }
  }

  // Clic bouton "annuler"
  onCancel(): void {
    this.dialogRef.close();
  }


}
