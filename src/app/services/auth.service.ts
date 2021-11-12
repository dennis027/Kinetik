import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

const AUTH_API = "http://127.0.0.1:8000/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router,) { }

  register(username: string, email: string, phone: string, role: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register/', {
      username,
      email,
      phone,
      role,
      password
    }, httpOptions);
  }


  login(userdata): Observable<any> {
    return this.http.post(AUTH_API + 'token/', userdata)
  }

  signOut(): void {
    localStorage.clear();
    this.router.navigate(['/']);

  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(AUTH_API + 'user/',);
  }
  getPatients(): Observable<any[]> {
    return this.http.get<any[]>(AUTH_API + 'Customerinpunt/',);
  }

  getStatus(): Observable<any> {
    return this.http.get<any[]>(AUTH_API + 'admininpunt/',);
  }
}