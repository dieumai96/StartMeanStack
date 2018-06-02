import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(
    private _router : Router,
    private _userService : UserService,
  ) { }
  canActivate(){
    
    return false;
  }

}
