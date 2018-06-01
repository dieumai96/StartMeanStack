import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  public formLogin = new FormGroup(
    { 
      email : new FormControl(null,[Validators.required,Validators.email]),
      password : new FormControl(null,[Validators.required]),
    }
  )
  constructor() {
    
  }
  
}
