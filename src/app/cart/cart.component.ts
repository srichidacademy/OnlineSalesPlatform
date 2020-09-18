import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Services/customer.service';
import { SessionService } from '../Services/session.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  FullName:string;
  CustomerId:number;
  CustomerCartCount:number;
  CustomerCart:CustomerCart[];
  constructor(private sessionService:SessionService,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.sessionService.sharedMessage.subscribe(message => 
      {
        this.FullName = message.FullName;
        this.CustomerId=message.CustomerId;
        this.CustomerCartCount=message.CartProducts;

        this.customerService.getCustomerCart(message.CustomerId).subscribe(data=>{
          this.CustomerCart=data;
         });

      }
     );

  }

  

}

export class Cart{
  CartId:number;
Product:number;
CustomerId:number;
Qty:number
}

export class CustomerCart{
  CartId:number;
ProductId:number;
CustomerId:number;
Qty:number;
ProductName:string;
UnitPrice:number;
Description:string;
Category:string;
}
