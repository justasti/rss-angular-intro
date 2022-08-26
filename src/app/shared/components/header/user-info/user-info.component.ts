/* eslint-disable class-methods-use-this */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import AuthService from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export default class UserInfoComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loggedIn: boolean = false;

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.loggedIn = this.authService.isAuthenticated();
  }
}
