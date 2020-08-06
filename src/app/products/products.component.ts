import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products:Product[];
  constructor(private router:Router) { }

  ngOnInit(): void {
this.products=[
  {ProductId:101,ProductCategory:'Mobile', ProductName:"Samsung Mobile", UnitPrice:10000, StockAvailable:10,CreatedOn:new Date('02-05-2019')},
  {ProductId:102,ProductCategory:'Computer', ProductName:"DELL Laptop", UnitPrice:80000, StockAvailable:7,CreatedOn:new Date('07-03-2018')},
  {ProductId:103,ProductCategory:'Watch', ProductName:"Titan Watch", UnitPrice:30000, StockAvailable:70,CreatedOn:new Date('10-11-2017')}
]
  }

  addNewProduct(){
  this.router.navigate(['addproduct']);
  }

}

export class Product {
  ProductId:number;
  ProductCategory:string;
  ProductName:string;
  UnitPrice:number;
  StockAvailable:number;
  CreatedOn:Date;  
}
