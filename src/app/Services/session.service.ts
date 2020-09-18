import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { LoggedInDetails } from '../sign-in/sign-in.component';
@Injectable()
export class SessionService {

  private loggedInCustomer = new BehaviorSubject({FullName:'', CustomerId:0, CartProducts:0});

  sharedMessage = this.loggedInCustomer.asObservable();
  constructor() { }

  ChangeLoginStatus(loginDetails: LoggedInDetails) {

    this.loggedInCustomer.next(loginDetails)

  } 

}