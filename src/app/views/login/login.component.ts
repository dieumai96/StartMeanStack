import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  public frmLogin: FormGroup;
  public errorMessage: string;
  public flagMessage: boolean = false;
  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _router: Router
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
      if (this.checkHaveToken(data) && this._userService.checkLevelUser(data)) {
        this._userService.setLocalStorage(data.token, data.user);
        this._router.navigate(['/dashboard']);
      } else {
        if (!this._userService.checkLevelUser(data)) {
          this.errorMessage = 'You do not have permission to access this page';
          this.flagMessage = true;
        }
        setTimeout(() => {
          this.errorMessage = null;
          this.flagMessage = false;
        }, 3000);
        this._router.navigate(['/login']);
      }
    }, err => {
      this.errorMessage = 'Login information is incorrect';
      this.flagMessage = true;
      setTimeout(() => {
        this.errorMessage = null;
        this.flagMessage = false;
      }, 3000)
    })
  }
  checkHaveToken(data) {
    if (data.success) {
      return true;
    }
    return false;
  }
}
