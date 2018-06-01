import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public authToken : string ; 
  public user : any ;
  constructor(
    private _router : Router,
    private _http :  HttpClient,
  ) { }
 onLogin(body : any){
   return this._http.post('http://localhost:3001/workplace-admin/signin',body,{
     observe : 'body',
     withCredentials : true,
     headers : new HttpHeaders().append('Content-type','application/json'),
   })
 }
 setLocalStorage(token,user){
   this.authToken = token;
   this.user = user;
   localStorage.setItem('token',this.authToken);
   localStorage.setItem('user',JSON.stringify(this.user));
 }
}
