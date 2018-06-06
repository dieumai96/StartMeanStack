import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddUserService } from '../../services/add-user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public frmRegister: FormGroup;
  constructor(
    private _http: HttpClient,
    private _formBuilder: FormBuilder,
    private _addUserService: AddUserService,
  ) { }
  ngOnInit() {
    this.createForm();

  }
  createForm() {
    this.frmRegister = this._formBuilder.group({
      email: [null, [Validators.required]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      cpass: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      level: [1],
      gender: [true],
      address: [null, [Validators.nullValidator]],
      hobbies: [null, [Validators.nullValidator]],
      avatar: [null, [Validators.nullValidator]],
    });
  }
  onCreateAccount() {
     this._addUserService.onRegister(JSON.stringify(this.frmRegister.value)).subscribe(data=>{
      console.log(data);
     },err=>{
       console.log(err);
     })
  }
}
