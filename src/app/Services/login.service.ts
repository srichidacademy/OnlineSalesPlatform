import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../sign-in/sign-in.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
Url:string="https://localhost:44387/api/";
  constructor(private http:HttpClient) { }

  Login(loginDetails:LoginModel){
    return this.http.post<LoginModel>(this.Url+'Login/PostLoginDetails', loginDetails);
}
}
