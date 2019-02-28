import { Component, OnInit } from '@angular/core';
import { isComponent } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
  isCollapsed: boolean = true;
  constructor() { 
    this.user = {
      name: 'Ronak',
      title: 'Angular Intern',
      address: '1234 xyz st, London, UK, 10010',
      phone: [
         '123-123-1245',
          '456-789-0012'
      ]
    };
  }
  toogleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
  }

}
