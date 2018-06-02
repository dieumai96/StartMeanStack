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
  constructor(
    private _formBuilder: FormBuilder,
    private _changeService: ChangePasswordService,
  ) { }

  ngOnInit() {
    // this._changePassword.findUserLogin();
    this.createFormChangePassword();
  }
  createFormChangePassword() {
    this.frmChangePassword = this._formBuilder.group({
      password: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      cpass: [null, Validators.required, Validators.minLength(5), Validators.maxLength(20)]
    });
  }
  onChangePassword() {
    this._changeService.onChangePass(JSON.stringify(this.frmChangePassword.value)).subscribe(data => {
        console.log(data);
    },err=>{
      console.log(err);
    })
  }

}
