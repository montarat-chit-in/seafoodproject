import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService],
})
export class NavbarComponent implements OnInit {
  public isLogged = false;
  public user: any;
  constructor(public authservice: AuthService, private router: Router) {}

  async ngOnInit() {
    this.user = await this.authservice.CurrentUserName();
    if (this.user) {
      this.isLogged = true;
    }
  }

  logout() {
    this.authservice.logout();
  }
}
