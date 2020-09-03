import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
@Injectable()
export class SharedService {
  private selectedCatgory = new BehaviorSubject(1);

  sharedMessage = this.selectedCatgory.asObservable();
  constructor() { }

  ChangeSelectedCategory(category: number) {

    this.selectedCatgory.next(category)

  } 

}