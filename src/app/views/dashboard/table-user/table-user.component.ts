import { Component, OnInit } from '@angular/core';
import { ListUserService } from '../../../services/list-user.service';
import { Observable } from 'rxjs';
import { User } from './../../../models/user';
@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.scss']
})
export class TableUserComponent implements OnInit {
  public user_lists: User[] = [];
  constructor(
    private _listuserServie: ListUserService,
  ) { }

  ngOnInit() {
    this.getAllUser();
  }
  getAllUser() {
    this._listuserServie.getAllUser().subscribe(data => {
        this.user_lists = this.getInfo(data);
    }, err => {
      console.log(err);
    })
  }
  getInfo(data) {
     return data.response.user_lists;
  }
}
