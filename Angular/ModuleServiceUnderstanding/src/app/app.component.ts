import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
    constructor(private svc: TestService, private http: HttpClient){
      this.svc.printConsole("Got the Service");
     }
     ngOnInit(): void {
       //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
       //Add 'implements OnInit' to the class.
       let obs = this.http.get('https://api.github.com/users/koushikkothagal');
      obs.subscribe((response) => console.log(response));
      }
}
