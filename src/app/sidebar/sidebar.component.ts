import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
selectedCategory:number;
  constructor(private router:Router,private sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.sharedMessage.subscribe(message => this.selectedCategory = message)
  }

  SendData(selectedOption:number) {
    this.sharedService.ChangeSelectedCategory(selectedOption);
    this.router.navigate(['products']);
  }

}
