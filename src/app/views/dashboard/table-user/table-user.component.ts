import { Component, OnInit } from '@angular/core';
import { ListUserService } from '../../../services/list-user.service';
import { Observable } from 'rxjs';
import { User } from './../../../models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.scss']
})
export class TableUserComponent implements OnInit {
  public user_lists: User[] = [];
  constructor(
    private _listuserServie: ListUserService,
    private _router : Router,
  ) { }

  ngOnInit() {
    this.getAllUser();
  }
  getAllUser() {
    this._listuserServie.getAllUser().subscribe(data => {
        this.user_lists = this.getInfoAll(data);
    }, err => {
      console.log(err);
    })
  }
  getInfoAll(data) {
     return data.response.user_lists;
  }
  getInfoOne(){
      this._router.navigate(['/base/change-infomation']);
  }
}
