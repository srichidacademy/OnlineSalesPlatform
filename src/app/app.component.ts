import { Component } from '@angular/core';
import { SessionService } from './Services/session.service';
import { Router } from '@angular/router';
import { CustomerService } from './Services/customer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
FullName:string;
CustomerId:number;
CustomerCartCount:number;
  title = 'OnlineSalesPlatform';

  constructor(private sessionService:SessionService,private customerService:CustomerService,private router:Router) { }

  logout(){
    this.sessionService.ChangeLoginStatus({FullName:'',CustomerId:0,CartProducts:0});         
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    
    
    this.sessionService.sharedMessage.subscribe(message => 
      {
        this.FullName = message.FullName;
        this.CustomerId=message.CustomerId;
        this.CustomerCartCount=message.CartProducts;

        this.customerService.getCustomerCart(message.CustomerId).subscribe(data=>{
          this.CustomerCartCount=data.length;
         });

      }
     );

   
    
      }

      Navegate(to:string){
        if(to=='home')
        {
          this.router.navigate(['/home']);
        }
        else if(to=='products')
        {
          this.router.navigate(['/products']);
        }
        else if(to=='contactus')
        {
          this.router.navigate(['/contactus']);
        }
        else if(to=='aboutus')
        {
          this.router.navigate(['/aboutus']);
        }
        else if(to=='cart')
        {
          this.router.navigate(['/cart']);
        }
        
      }
}
