import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  onLoginNavigate() {
    this.router.navigate(['auth']);
  }

  onSignUpNavigate() {
    this.router.navigate(['auth', 'register']);
  }

  onLogoClick() {
    this.router.navigate(['home']);
  }
}
