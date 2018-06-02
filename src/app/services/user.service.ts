import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public authToken: string;
  public user: any;
  constructor(
    private _router: Router,
    private _http: HttpClient,
  ) { }
  onLogin(body: any) {
    return this._http.post('http://localhost:3001/workplace-admin/signin', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-type', 'application/json'),
    })
  }
  // if you login success => get information
  getProfileLogin() {
    this.loadToken();
    return this._http.get('http://localhost:3001/workplace-admin/secret', {
      headers: new HttpHeaders().set('Authorization', this.authToken)
    })
  }
  // set LocalStorage
  setLocalStorage(token: string, user: any) {
    this.authToken = token;
    this.user = user;
    localStorage.setItem('token', this.authToken);
    localStorage.setItem('user', JSON.stringify(this.user));
  }
  // check level if user is : super admin, admin , or employee permision access page
  checkLevelUser(data) {
    if (data.user.level < 3) {
      return true;
    }
    return false;
  }
  // load token in localstorage
  loadToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }
  // check if have user loggined
  isHaveUserLogin() {
  }
}
