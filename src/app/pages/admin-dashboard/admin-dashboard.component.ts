import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../mocks/product.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddProductComponent } from '../../components/dialog-add-product/dialog-add-product.component';
import { DialogEditProductComponent } from '../../components/dialog-edit-product/dialog-edit-product.component';
import { DialogDeleteConfirmComponent } from '../../components/dialog-delete-confirm/dialog-delete-confirm.component';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{

  products: Product[] = [];


  constructor(
    private productService : ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
  this.loadProducts();
  }

  loadProducts(): void{
    this.productService.getProducts().subscribe(products => {
    this.products = products;
    console.log(this.products);
    });
  }

  // OPEN ADD PRODUCT FORM DIALOG
  openAddDialog(): void {
    const dialogRef = this.dialog.open(DialogAddProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.addProduct(result).subscribe(() => {
          this.loadProducts();
        });
      }
    });
  }

  // OPEN EDIT PRODUCT FORM DIALOG
  openEditDialog(product: Product): void {
    const dialogRef = this.dialog.open(DialogEditProductComponent, {
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.updateProduct(result).subscribe(() => {
          this.loadProducts();
        });
      }
    });
  }

  // OPEN DELETE PRODUCT CONFIRMATION DIALOG
  openDeleteConfirmDialog(productId: number): void {
    const dialogRef = this.dialog.open(DialogDeleteConfirmComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.deleteProduct(productId).subscribe(() => {
          this.loadProducts();
        });
      }
    });
  }



}