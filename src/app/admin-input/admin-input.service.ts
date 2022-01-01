import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Results } from '../results-class/results';

import { DoctorInput } from '../admin-class/admin';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DoctorInputService {

  private api = "http://127.0.0.1:8000/admininpunt/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

   }

constructor(private httpClient: HttpClient) { }

getData(): Observable<any[]> {
  return this.httpClient.get<any[]>(this.api);
}

}
