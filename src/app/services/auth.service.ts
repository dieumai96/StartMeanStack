import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{
  public checkLevel : boolean  = false; 
  constructor(
    private _router : Router,
    private _userService : UserService,
  ) { }
  canActivate(){
    if(this._userService.isHaveUserLogin()){
        return true;
    }else{
      this._router.navigate(['/login']);
      return false;
    }
  }
  checkLevelForCanActive(data){
      if(data.user.level<3){
        return true;
      }
      return false;
  }
}
