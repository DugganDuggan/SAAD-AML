import { Component, inject } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',

})
export class LoginComponent {

  logInService = inject(LoginService);
  updateLogIn() {
    this.logInService.loggedInTrue();
  }
}
