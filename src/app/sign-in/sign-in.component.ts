import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';
import { SessionService } from '../Services/session.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  errorMessage:string='';
  loginDetail:LoginModel={ Email:'', Password:'', FullName:'', CustomerId:0};
  constructor(private loginService:LoginService,private router:Router,private sessionService:SessionService) { }

  ngOnInit(): void {
  }

  Login(){
   
    this.loginService.Login(this.loginDetail).subscribe(
      data=>{
        if(data!=null && data.CustomerId>0){
          this.errorMessage='';
          this.sessionService.ChangeLoginStatus({FullName:data.FullName,CustomerId:data.CustomerId,CartProducts:0 });         
          this.router.navigate(['customerdashboard']);
        }
        else{
          this.errorMessage='Entered credentials are not correct!! Try again.';
          this.loginDetail.Password='';
          console.log('Login Failed');
        }
      },
      error=>{
        this.errorMessage='Login Failed!, Please contact Admin!';
        console.log('error');
      }
    );
  }

}

export class LoginModel{
  Email:string;
  Password:string;
  FullName:string;
  CustomerId:number;
}
export class LoggedInDetails{
  FullName:string;
  CustomerId:number;
  CartProducts:number;
}
