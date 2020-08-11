import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
@Injectable()
export class SharedService {
  private selectedCatgory = new BehaviorSubject('Mobile');

  sharedMessage = this.selectedCatgory.asObservable();
  constructor() { }

  ChangeSelectedCategory(category: string) {

    this.selectedCatgory.next(category)

  } 

}