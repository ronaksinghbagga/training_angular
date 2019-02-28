import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  answer: number = 0;
  constructor() { }

  ngOnInit() {
  }
Sub(num1,num2){
  this.answer = parseInt(num1)-parseInt(num2);
}
}
