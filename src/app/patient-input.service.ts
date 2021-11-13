import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API =  "http://127.0.0.1:8000/Customerinpunt/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PatientInputService {

  constructor(private http: HttpClient) { }

  addPatient(user:string,name:string, phonenumber:number,location: string,): Observable<any> {
    return this.http.post(AUTH_API , {
      user,
      name,
      phonenumber,
      location,
    }, httpOptions);
  }
}
