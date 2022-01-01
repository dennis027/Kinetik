
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tracing } from '../tracing-class/tracing';
import { catchError } from 'rxjs/operators';
import { Data } from '@angular/router';

const contactapi = "http://127.0.0.1:8000/referral/";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TracingRequestService {
  tracing(name: any, contact: any, date: any) {
    throw new Error('Method not implemented.');
  }

  private api = "http://127.0.0.1:8000/referral/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api);
  }

  addData(user: string, name: string, contact: number, location: string): Observable<any> {
    return this.httpClient.post(contactapi, {
      user,
      name,
      contact,
      location,
    }, httpOptions);
  }
  deletePatient(id: number): Observable<any[]> {
    return this.httpClient.delete<any[]>(this.api + id);
  }
  updatePatient(postData: Tracing, id) {
    return this.httpClient.put(this.api + id, postData);
  }

}