import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  public user: Object;
  public _id: string;
  public _subcription: Subscription;
  constructor(
    private _http: HttpClient,
    private _userService: UserService,
  ) { }
  findUserLogin() {
    this._userService.getProfileLogin().subscribe(data => {
      return this.setId(data);
    });
  }
  setId(data) {
    this._id = data.user._id;
    return this._id;
  }
  onChangePass(body: any) {
   return this._http.put('http://localhost:3001/workplace-admin/' + this.findUserLogin(), body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().set('Content-type', 'application/json'),
    })
  }

}
