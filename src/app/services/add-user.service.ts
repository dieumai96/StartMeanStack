import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(
    private _http: HttpClient,
  ) { }
  onRegister(body: any) {
   return this._http.post('http://localhost:3001/workplace-admin/register', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }
}
