import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from './../../services/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  public frmLogin: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
  ) {

  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.frmLogin = this._formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, Validators.required]
    });
  }
  formSubmit() {
    
    this._userService.onLogin(JSON.stringify(this.frmLogin.value)).subscribe(data => {
      if (this.checkHaveToken(data)) {
          this._userService.setLocalStorage(data.token,data.user);
      }
    }, err => {
      console.log(err);
    })
  }
  checkHaveToken(data) {
    if (data.success) {
      return true;
    }
    return false;
  }
}
