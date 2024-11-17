import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers:[LoginService]
})
export class HeaderComponent {
  title = signal('AML')

  logInService = inject(LoginService);
  get loggedIn() {
    return this.logInService.isLoggedIn;
  }
  toggleLogIn() {
    this.logInService.updateLogIn();
  }

}
