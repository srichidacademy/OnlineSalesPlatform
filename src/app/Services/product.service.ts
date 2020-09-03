import { Injectable } from '@angular/core';
import {HttpClient,HttpParams,HttpHeaders} from '@angular/common/http';
import { Product } from '../products/products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url:string='https://localhost:44387/api/Product/';
  constructor(private http:HttpClient) { }
  getAllProducts()
  {
    return this.http.get<Product[]>(this.url+'GetAllProducts');
  }

  getProductsByCategory(categoryId:number)
  {
    return this.http.get<Product[]>(this.url+'GetProuductsByCategory/'+categoryId);
  }

}
