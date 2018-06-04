import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../models/user';
@Injectable({
  providedIn: 'root'
})
export class ListUserService {
  public BASE_URL : String = 'http://localhost:3001/workplace-admin/';
  constructor(
    private _http: HttpClient,
  ) { }
  getAllUser(): Observable<User[]> {
    return this._http.get(this.BASE_URL+'get-all-user');
  }
}
