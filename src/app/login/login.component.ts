import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = ''; // Add 'username' property
  password: string = ''; // Add 'password' property

  // Method for login submission
  onLogin() {
    console.log('Login clicked');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }

  // Method for forgotten password
  onForgotPassword() {
    console.log('Forgot Password clicked');
  }

  // Method for sign-up navigation
  onSignUp() {
    console.log('Sign Up clicked');
  }
}
