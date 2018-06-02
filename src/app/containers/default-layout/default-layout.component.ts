import { Component, Input, OnInit } from '@angular/core';
import { navItems } from './../../_nav';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public username: string = '';
  constructor(
    private _userService: UserService,
    private _router: Router,
  ) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }
  ngOnInit() {
    this._userService.getProfileLogin().subscribe(data => {
      this.username = this.getName(data);
      console.log(this.username);
    });
  }
  getName(data) {
    return data.user.username;
  }
  onLogout() {
    localStorage.clear();
    this._router.navigate(['/login']);
  }
}
