import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../Services/shared.service';
import {ProductService} from '../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products:Product[];
 filterData:Product[];
 selectedCategory: number=1;
  constructor(private router:Router,private sharedService:SharedService,private productService:ProductService) { }

  ngOnInit(): void {
    
    
this.sharedService.sharedMessage.subscribe(message => 
  {
    this.selectedCategory = message;
    this.getProductsByCategory(Number(this.selectedCategory));
  }
 );
this.filterData=this.products;

  }

  getAllProducts()
  {
    this.productService.getAllProducts().subscribe(data=>{
      this.filterData=data;      
    });    
  }

  getProductsByCategory(categoryId:number)
  {
    this.productService.getProductsByCategory(categoryId).subscribe(data=>{
     this.filterData=data;
    });
  }

  // applyFilter(){
  //   this.filterData= this.products.filter(i=> i.Category.toLowerCase().includes(this.selectedCategory.toLowerCase()));
  // }

  addNewProduct(){
  this.router.navigate(['addproduct']);
  }

}

export class Product {
  ProductId:number;
  Category:string;
  ProductName:string;
  UnitPrice:number;
  UnitsInStock:number;
  CreatedOn:Date;  
  Description:string;
  ImageUrl:string;
  IsActive:boolean;
  SKU:string;
  UpdatedOn:Date;
}
