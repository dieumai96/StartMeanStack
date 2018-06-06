import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddUserService } from '../../services/add-user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: User = new User();
  public form: FormGroup;
  constructor(
    private _http: HttpClient,
    private _formBuilder: FormBuilder,
    private _addUserService: AddUserService,
  ) { }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.form = this._formBuilder.group({
      email: [null, [Validators.required]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      cpass: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      level: [1],
      status: [1],
      gender: [true],
      address: null,
      hobbies: null,
      userImg: null,
    });
  }
  onRegister() {
    console.log(this.form);
    this._addUserService.onRegister(JSON.stringify(this.form.value)).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('userImg').setValue(file);
    }
  }
}
