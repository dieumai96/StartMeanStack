import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChangePasswordService } from '../../services/change-password.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  public frmChangePassword: FormGroup;
  public ErrorMessage: string;
  public ErrorFlag: boolean = false;
  public SuccessMessage: string;
  public SuccessFlag: boolean = false;
  constructor(
    private _formBuilder: FormBuilder,
    private _changeService: ChangePasswordService,
  ) { }

  ngOnInit() {
    this.createFormChangePassword();
    this._changeService.findUserLogin();
  }
  createFormChangePassword() {
    this.frmChangePassword = this._formBuilder.group({
      newpassword: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      cpass: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]]
    });
  }
  onChangePassword() {
    this._changeService.onChangePass(JSON.stringify(this.frmChangePassword.value)).subscribe(data => {
      this.SuccessMessage = 'Change password success';
      this.SuccessFlag = true;
      this.frmChangePassword = this._formBuilder.group({
        newpassword: [null],
        cpass: [null]
      });
      setTimeout(() => {
        this.SuccessMessage = null;
        this.SuccessFlag = false;
      }, 3000);
    }, err => {
      this.ErrorMessage = err.error.Message;
      this.ErrorFlag = true;
      setTimeout(() => {
        this.ErrorMessage = null;
        this.ErrorFlag = false;
      }, 3000);
    })
  }

}
