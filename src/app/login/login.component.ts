import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  // Function to handle form submission
  onLogin(form: NgForm): void {
    if (form.valid) {
      console.log('Login Successful!');
      console.log('Username:', this.username);
      console.log('Password:', this.password);

      // Simulate API call or navigate to another page
      alert('Login successful. Redirecting...');
    } else {
      console.log('Form is invalid');
      alert('Please fill in all required fields correctly.');
    }
  }

  // Function for "Forgotten Password"
  onForgotPassword(): void {
    console.log('Redirecting to "Forgotten Password" page...');
    alert('Redirecting to the Forgotten Password page...');
    // Here, you can add navigation logic if using Angular Router
    // this.router.navigate(['/forgot-password']);
  }

  // Function for "Sign Up"
  onSignUp(): void {
    console.log('Redirecting to "Sign Up" page...');
    alert('Redirecting to the Sign-Up page...');
    // Here, you can add navigation logic if using Angular Router
    // this.router.navigate(['/sign-up']);
  }
}
