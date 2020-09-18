import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../Services/shared.service';
import {ProductService} from '../Services/product.service';
import { SessionService } from '../Services/session.service';
import { Cart } from '../cart/cart.component';
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products:Product[];
 filterData:Product[];
 selectedCategory: number=1;
 loggedInCustomerId:number;
 loggedInFullName:string;
 customerCartCount:number;
  constructor(private router:Router,private customerService:CustomerService,private sharedService:SharedService,private sessionService:SessionService,private productService:ProductService) { }

  ngOnInit(): void {
    
    this.sessionService.sharedMessage.subscribe(message => 
      {
        this.loggedInCustomerId=message.CustomerId;
        this.loggedInFullName=message.FullName;
        this.customerCartCount=message.CartProducts;
      }
     );
    
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

  AddtoCart(ProductId)
  {
    this.sessionService.ChangeLoginStatus({FullName:this.loggedInFullName,CustomerId:this.loggedInCustomerId,CartProducts:this.customerCartCount+1});         
    var newCart:Cart={CartId:0 ,CustomerId:this.loggedInCustomerId, Product:ProductId,Qty:1};
    this.customerService.SaveProductsTothCart(newCart).subscribe(
      data=>{
        if(data!=null && data>0){
          
          console.log("Save Success");
        }
        else{
          console.log("Save Failed");
         //this.errorMessage='Save Failed.';          
        }
      },
      error=>{
        // this.errorMessage='Save Failed!, Please contact Admin!';
        console.log('error');
      }
    );
    //logic to save in DB    
  }

}

export class Product {
  ProductId:number;
  Category:string;
  ProductName:string;
  UnitPrice:number;
  UnitsInStock:number;
  CreatedOn:string;  
  Description:string;
  ImageUrl:string;
  IsActive:boolean;
  SKU:string;
  UpdatedOn:string;
}


