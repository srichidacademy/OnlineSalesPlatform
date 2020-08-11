import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products:Product[];
 filterData:Product[];
 selectedCategory: string;
  constructor(private router:Router,private sharedService:SharedService) { }

  ngOnInit(): void {
this.products=[
  {ProductId:101,ProductCategory:'Mobile', ProductName:"Samsung Mobile", UnitPrice:10000, StockAvailable:10,CreatedOn:new Date('02-05-2019')},
  {ProductId:102,ProductCategory:'Computer', ProductName:"DELL Laptop", UnitPrice:80000, StockAvailable:7,CreatedOn:new Date('07-03-2018')},
  {ProductId:103,ProductCategory:'Watch', ProductName:"Titan Watch", UnitPrice:30000, StockAvailable:70,CreatedOn:new Date('10-11-2017')},
  {ProductId:104,ProductCategory:'Mobile', ProductName:"Redmi Mobile", UnitPrice:14000, StockAvailable:10,CreatedOn:new Date('02-05-2019')},
  {ProductId:105,ProductCategory:'Computer', ProductName:"SAMSUNG Laptop", UnitPrice:90000, StockAvailable:7,CreatedOn:new Date('07-03-2018')},
  {ProductId:106,ProductCategory:'Watch', ProductName:"Apple Watch", UnitPrice:50000, StockAvailable:70,CreatedOn:new Date('10-11-2017')},
  {ProductId:105,ProductCategory:'Tv', ProductName:"SAMSUNG TV", UnitPrice:60000, StockAvailable:7,CreatedOn:new Date('07-03-2018')},
  {ProductId:106,ProductCategory:'Tv', ProductName:"ONEDA TV", UnitPrice:150000, StockAvailable:70,CreatedOn:new Date('10-11-2017')}
]
this.sharedService.sharedMessage.subscribe(message => this.selectedCategory = message);
this.filterData=this.products;

  }
  applyFilter(){
    this.filterData= this.products.filter(i=> i.ProductCategory.toLowerCase().includes(this.selectedCategory.toLowerCase()));

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
