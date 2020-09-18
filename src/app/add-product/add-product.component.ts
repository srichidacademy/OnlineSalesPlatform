import { Component, OnInit } from '@angular/core';
import { Product } from '../products/products.component';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  newProduct:Product={ ProductId:0, ProductName:'',Category:"0", Description:'',SKU:'',UnitPrice:0, UnitsInStock:0,ImageUrl:'',CreatedOn:'11/09/2020', UpdatedOn:'11/09/2020',IsActive:true};
  errorMessage:string='';
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  SaveProduct(){
   
    this.productService.SaveProduct(this.newProduct).subscribe(
      data=>{
        if(data!=null && data>0){
          this.errorMessage='';
          console.log("Save Success");
        }
        else{
          this.errorMessage='Save Failed.';          
        }
      },
      error=>{
        this.errorMessage='Save Failed!, Please contact Admin!';
        console.log('error');
      }
    );
  }

}



