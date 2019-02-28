import { Component, OnInit } from '@angular/core';
import { CarlistserviceService } from '../carlistservice.service';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {
  public cardetails:any = [];
   public errorMsg;
   public showDataFlag: boolean = false;
  constructor(private carservice: CarlistserviceService) { }

  ngOnInit() {
  }
  fetchCarList(){
    this.carservice.fetchCarS()
     .subscribe(data => this.cardetails = data,
                error => this.errorMsg = error);
                if(this.errorMsg == null || this.errorMsg == ''){
                  setTimeout(()=>{
                    if(this.errorMsg == null || this.errorMsg == ''){this.showDataFlag = true;}
                    else{this.showDataFlag = false;}
                  },1000);
                  console.log(this.showDataFlag);
                }
  }
}
