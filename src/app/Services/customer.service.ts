import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart, CustomerCart } from '../cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url:string='http://localhost/onlinesalesbackendapi/api/Product/';
  constructor(private http:HttpClient) { }
  // getAllProducts()
  // {
  //   return this.http.get<Product[]>(this.url+'GetAllProducts');
  // }

  getCustomerCart(custmerId:number)
  {
    return this.http.get<CustomerCart[]>('https://localhost:44387/api/Cart/GetCustomerCart/'+custmerId);
  }

  SaveProductsTothCart(newCart:Cart){
    return this.http.post<number>('https://localhost:44387/api/Cart/AddProductTotheCart', newCart);
}
}
