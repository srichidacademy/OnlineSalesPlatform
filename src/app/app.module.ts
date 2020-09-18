import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SharedService } from './Services/shared.service';
import {ProductService} from './Services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import {LoginService} from './Services/login.service';
import { FormsModule }   from '@angular/forms';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import {SessionService} from './Services/session.service';
import {CustomerService} from './Services/customer.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    CartComponent,
    SignInComponent,
    RegisterComponent,
    AddProductComponent,
    SidebarComponent,
    ProductdetailsComponent,
    CustomerdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SharedService,ProductService,LoginService,SessionService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
