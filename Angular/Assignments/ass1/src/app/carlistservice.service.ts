import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Cars } from './cars';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarlistserviceService {
private _url: string = "http://localhost:3000/cars";
  constructor(private http: HttpClient) { }

  fetchCarS(): Observable<Cars[]>{  
    return this.http.get<Cars[]>(this._url)
                  .pipe(
                    catchError(error => {
                      if(error.status == 404){
                        return throwError("Page Not found");}
                      else if(error.staus == 401 || 403){
                      return throwError("You are Unauthorized or the requested page is forbidden")}
                      else{
                        return throwError("Oops Something went wrong");
                      }
                    })
    );
  }
  
}
