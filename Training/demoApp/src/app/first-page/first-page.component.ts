import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  num1: number =0;
  num2: number =0;
  ans: number =0;
  constructor() { }

  ngOnInit() {
  }
Add(){
  this.ans =  this.num1 + this.num2;
}
}
